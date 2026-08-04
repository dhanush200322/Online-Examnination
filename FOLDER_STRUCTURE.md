# Folder Structure and Architecture: Online Examination System

## 1. Complete Folder Structure

```text
src/
├── assets/                 # Static assets like images, icons, lottie files
├── components/             # Reusable UI components
│   ├── common/             # Generic components (Buttons, Inputs, Modals, Cards)
│   ├── layout/             # Layout wrappers (Navbar, Footer, Sidebar, PageWrapper)
│   └── ui/                 # Design system components (premium glassmorphism elements)
├── context/                # React Context providers for global state
├── data/                   # Mock JSON data (exams, questions, categories, users)
├── features/               # Feature-based domains containing specific logic and UI
│   ├── about/              # About page content
│   ├── auth/               # Login, Signup UIs
│   ├── contact/            # Contact form and info
│   ├── dashboard/          # User analytics, history, recent exams
│   ├── exam-details/       # Exam information, syllabus, instructions before starting
│   ├── exams/              # Exam listing, search, filtering
│   ├── home/               # Hero section, featured exams, categories
│   ├── leaderboard/        # Global/category rankings
│   ├── profile/            # User settings, avatar, personal info
│   ├── quiz/               # Active exam engine, timer, question palette
│   ├── result/             # Post-exam score card, charts
│   ├── review/             # Detailed answer review and explanations
│   └── wishlist/           # Saved/bookmarked exams
├── hooks/                  # Custom React hooks (useLocalStorage, useAuth, useTimer)
├── pages/                  # Route level components that compose features
├── routes/                 # Routing configuration and route guards
├── styles/                 # Global CSS, Tailwind configurations, custom animations
├── utils/                  # Helper functions, formatters, validation logic
├── App.jsx                 # Main application root component
└── main.jsx                # Entry point, Context providers, DOM rendering
```

## 2. Architecture Explanation
The project utilizes a **Feature-Based Architecture (Screaming Architecture)**. Instead of organizing files strictly by technical type (e.g., all components in one folder, all state in another), the codebase is organized around business domains (features). This enterprise-grade approach is highly scalable, making it easier to locate code, test isolated features, and prevent tangled dependencies. Each feature acts as a self-contained module containing its own specific components and logic.

## 3. Purpose of Core Folders
- **`assets/`**: Stores static files imported into components, such as SVG icons, background images, and animations.
- **`components/`**: Houses global, reusable components not tied to any specific feature. 
  - `common/`: Highly reusable atomic UI elements like buttons, badges, and form inputs.
  - `layout/`: Structural components like navigation bars, footers, and page containers.
  - `ui/`: Specialized, stylized components for the premium design system (e.g., frosted glass panels).
- **`context/`**: Contains React Context definitions for state that must be accessed globally across different features.
- **`data/`**: Acts as our mock database, storing JSON files structured to simulate API responses for our frontend-only architecture.
- **`features/`**: The core of the application logic. Each subfolder encapsulates a distinct domain.
- **`hooks/`**: Global custom React hooks providing reusable logic (e.g., generic `useLocalStorage`).
- **`pages/`**: The routing layer. These components map directly to URLs, remain thin, and simply import and assemble complex components from the `features/` directory.
- **`styles/`**: Global stylesheets (`index.css`) containing base Tailwind directives, custom CSS variables for themes, and complex keyframe animations.
- **`utils/`**: Pure functions for generic tasks such as date formatting, score calculations, and string manipulation.

## 4. Purpose of Feature Folders
- **`auth/`**: Login/Signup forms and validation schemas.
- **`home/`**: Hero banners, promotional content, top-level category grids.
- **`exams/`**: Complex filtering logic, search bars, and the main exam grid.
- **`exam-details/`**: Detailed breakdown of a specific exam and instructions before starting.
- **`quiz/`**: The most complex feature; handles the active test state, question palette (answered/review/skipped), and countdown timer.
- **`result/`**: Data visualization (charts) and score breakdown immediately following a quiz submission.
- **`review/`**: Interface for comparing user answers against correct answers with explanations.
- **`dashboard/`**: User-specific analytics, performance charts, and recent activity logs.
- **`leaderboard/`**: Data tables sorting users based on mock scores.
- **`profile/`**: Form fields for updating user details (persisted to local storage).
- **`wishlist/`**: A specialized view of exams saved/bookmarked by the user.

## 5. State Management Locations
Relying entirely on React Context and LocalStorage:
- **Global UI State:** Managed via Context (e.g., `ThemeContext` for Dark Mode toggling).
- **User/Auth State:** Managed via Context (`AuthContext`), heavily synced with `localStorage` (key: `oes_user`).
- **Active Quiz State:** Managed inside `src/features/quiz/` using `useReducer` or robust `useState`. Crucially, every change (answer selected, timer tick) is synced to `localStorage` (key: `oes_active_exam`) to prevent data loss on accidental browser refreshes.
- **Local Form State:** Managed locally within specific components (e.g., search input state in `src/features/exams/`).

## 6. Data Flow
1. **Initial Load:** Application initializes and checks `localStorage` for sessions, theme preferences, and active exam states.
2. **Context Distribution:** Global Providers wrap the app, distributing this initial state.
3. **Data Fetching (Mock):** Pages/Features import JSON from `src/data/` (or use a simulated async fetch wrapper in `src/utils/` to mimic network latency).
4. **User Action:** User interacts (e.g., clicks an answer in the Quiz).
5. **State Update & Persistence:** Local component state updates, and a synchronized effect writes this exact state to `localStorage`.
6. **Completion:** Upon quiz submission, the final score is calculated, pushed to the `oes_exam_history` array in `localStorage`, the active quiz key is cleared, and the user is routed to the Result page.

## 7. Routing Structure
Defined using React Router v6 in `src/routes/`:
- **Public Routes:** `/`, `/exams`, `/about`, `/contact`, `/login`, `/signup`
- **Protected Routes (require mock auth state):** `/dashboard`, `/profile`, `/wishlist`, `/quiz/:id`, `/result/:id`, `/review/:id`
Pages act as entry points for routes and import their respective Feature components.

## 8. Naming Conventions
- **Folders/Directories:** `kebab-case` (e.g., `exam-details`, `components`)
- **React Components:** `PascalCase` (e.g., `ExamCard.jsx`, `QuestionPalette.jsx`)
- **Hooks & Utils:** `camelCase` (e.g., `calculateScore.js`, `useTimer.js`)
- **Constants/Mock Data Files:** `camelCase` or `UPPER_SNAKE_CASE` depending on usage (e.g., `mockExams.json`, `EXAM_CATEGORIES`).

## 9. Import Rules
- **Absolute Imports:** Use path aliases (e.g., `@/components`, `@/features`) to avoid messy relative paths (`../../../../`). Configured via `vite.config.js` and `jsconfig.json`.
- **Strict Feature Encapsulation:** Features should NEVER import from other features. For example, `src/features/dashboard/` must not import a component directly from `src/features/quiz/`. If they need to share a UI element, that element must be extracted and moved to `src/components/common/`.
- **Unidirectional Page Imports:** Pages can import from anywhere (they compose features and common components), but no other folder should ever import from `src/pages/`.
