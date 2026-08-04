# Page Architecture: Online Examination System

## User Flows

### Core Exam Flow
`Home` → `Exams Listing` → `Exam Details` → `Instructions` → `Quiz Interface` → `Result Page` → `Review Answers`

### Wishlist Flow
`Any Exam Card (Click Heart)` → `Wishlist Page` → `Exam Details` → `Instructions` → `Quiz Interface`

### Dashboard Flow
`Dashboard` → View `Performance Statistics`
`Dashboard` → View `Upcoming Exams`
`Dashboard` → View `Completed Exams` → `Result Page` / `Review Answers`
`Dashboard` → View `Certificates`

### Authentication Flow
`Home` / `Header` → `Login` → `Dashboard` (if successful)
`Login` → `Signup` → `Dashboard` (if successful)

### Search & Filter Flow
`Home` or `Exams Listing` → Type in `Search Bar` / Apply `Filter` → Real-time `Exams Grid` update

### Leaderboard Flow
`Home` or `Dashboard` → `Leaderboard` → Select `Category` → View `Global Rank` / `Top Users`

### Quiz Flow
- **Question Navigation**: `Previous` / `Next` buttons, or direct click on `Question Palette`.
- **Mark for Review**: Click `Mark for Review` toggle → Question Palette color changes to amber.
- **Submit**: User clicks `Submit` → Confirmation Modal → `Result Page`.
- **Auto Submit**: `Timer Expiry` → Automatic `Result Calculation` → `Result Page`.

### Result Flow
`Quiz Submit` → Calculate `Score`, `Percentage`, `Correct Answers`, `Wrong Answers`, `Skipped Questions`, `Time Taken` → Check mock data for `Rank` → Render `Result Card` & `Performance Chart`.

---

## Page Architectures

### 1. Home
- **Purpose**: Landing page to introduce the platform, highlight features, and show featured exams.
- **URL Route**: `/`
- **Layout Structure**: `MainLayout` (Navbar + Footer).
- **Components Used**: `HeroBanner`, `FeaturedExamsCarousel`, `CategoryGrid`, `TestimonialCards`, `CallToAction`.
- **State Required**: `featuredExams` (array), `categories` (array).
- **Context Used**: `ThemeContext` (dark/light mode).
- **LocalStorage Usage**: Check `oes_user` for auth state (to change CTA from "Sign Up" to "Go to Dashboard").
- **Loading State**: `SkeletonHero`, `SkeletonExamCard`.
- **Empty State**: N/A.
- **Error State**: Toast notification if mock data fails to load.
- **Responsive Behaviour**: Stacks grid on mobile, hides full navigation behind hamburger menu.
- **Accessibility Notes**: ARIA labels on carousel arrows, semantic `h1` for hero.
- **Animations**: Fade-in up for hero content, subtle scaling on exam cards.
- **Data Source**: `mockHomeData.json`.
- **Navigation Flow**: Leads to `/exams` or `/signup`.

### 2. Exams Listing
- **Purpose**: Browse, search, and filter all available exams.
- **URL Route**: `/exams`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `SearchBar`, `FilterSidebar` (Difficulty, Duration, Category), `ExamGrid`, `ExamCard`, `Pagination`.
- **State Required**: `searchQuery` (string), `activeFilters` (object), `currentPage` (number).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: Save/Load user's last used filters (optional), `oes_wishlist` for rendering heart icons.
- **Loading State**: Grid of `SkeletonExamCard`s.
- **Empty State**: "No exams found" illustration + "Clear Filters" button.
- **Error State**: Toast "Failed to fetch exams".
- **Responsive Behaviour**: `FilterSidebar` collapses into a bottom sheet on mobile.
- **Accessibility Notes**: Keyboard navigation for filter checkboxes, announce search results count.
- **Animations**: Staggered fade-in for exam cards.
- **Data Source**: `mockExams.json`.
- **Navigation Flow**: Clicking an exam goes to `/exams/:id`.

### 3. Exam Details
- **Purpose**: Provide syllabus, duration, passing marks, and overview before starting.
- **URL Route**: `/exams/:id`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `ExamHeader` (Title, Badges), `SyllabusList`, `CreatorInfo`, `StartButton`.
- **State Required**: `examDetails` (object).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: Check `oes_exam_history` to see if already attempted (to show "Retake" vs "Start").
- **Loading State**: `SkeletonHeader`, `SkeletonList`.
- **Empty State**: N/A.
- **Error State**: If ID invalid, redirect to `/404`.
- **Responsive Behaviour**: Two-column desktop layout becomes single column on mobile.
- **Accessibility Notes**: Clear heading hierarchy, high contrast badges.
- **Animations**: Slide in from right (page transition).
- **Data Source**: `mockExams.json`.
- **Navigation Flow**: Leads to `/exams/:id/instructions`.

### 4. Exam Instructions
- **Purpose**: Mandatory rules reading, hardware check, and final agreement before timer starts.
- **URL Route**: `/exams/:id/instructions`
- **Layout Structure**: `MinimalLayout` (No Footer, simplified Navbar).
- **Components Used**: `InstructionsList`, `HardwareCheck` (mock), `AgreementCheckbox`, `ProceedButton`.
- **State Required**: `isAgreed` (boolean).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: None directly, but prepares to write to `oes_active_exam`.
- **Loading State**: Simple spinner.
- **Empty State**: N/A.
- **Error State**: N/A.
- **Responsive Behaviour**: Full width reading container `max-w-3xl`.
- **Accessibility Notes**: Checkbox must be focusable via keyboard.
- **Animations**: Fade in text.
- **Data Source**: Hardcoded instructions or from `mockExams.json`.
- **Navigation Flow**: Leads to `/quiz/:id`. Initializes active quiz state.

### 5. Quiz Interface
- **Purpose**: The core exam engine. Displays questions, handles answers, manages time.
- **URL Route**: `/quiz/:id`
- **Layout Structure**: `QuizLayout` (No standard Nav/Footer. Has custom TopBar with Timer, SideBar for Palette).
- **Components Used**: `QuestionDisplay`, `OptionsList`, `QuestionPalette`, `Timer`, `QuizControls` (Prev, Next, Mark, Clear).
- **State Required**: `currentQuestionIndex` (number), `selectedAnswers` (map), `timeRemaining` (number), `questionStatuses` (map).
- **Context Used**: `ExamContext` (to avoid prop drilling).
- **LocalStorage Usage**: Continuously writes state to `oes_active_exam` to prevent refresh data loss.
- **Loading State**: Skeleton question and options.
- **Empty State**: N/A.
- **Error State**: "Failed to load questions" modal.
- **Responsive Behaviour**: `QuestionPalette` moves to a slide-out drawer on tablet/mobile.
- **Accessibility Notes**: Crucial keyboard support: Space to select, Arrows to navigate options.
- **Animations**: Slide transition between questions, heartbeat pulse on Timer when < 1 min.
- **Data Source**: `mockQuestions.json`.
- **Navigation Flow**: Submit or Timeout leads to `/result/:id`.

### 6. Result Page
- **Purpose**: Immediate display of score, passing status, and high-level analytics.
- **URL Route**: `/result/:id`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `ScoreCard` (massive typography), `MetricGrid` (Correct, Wrong, Skipped, Time), `PerformanceChart` (Radar/Bar), `ActionButtons` (Review, Dashboard).
- **State Required**: `calculatedResult` (object).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: Reads from `oes_exam_history` (which was updated on Quiz submit).
- **Loading State**: Skeleton score ring and charts.
- **Empty State**: N/A.
- **Error State**: "Result not found" -> redirect to Dashboard.
- **Responsive Behaviour**: Charts scale down, grid moves from 4 cols to 2 cols to 1 col.
- **Accessibility Notes**: SVG charts must have `<title>` tags for screen readers.
- **Animations**: Numbers counting up to final score, charts rendering with a spring animation.
- **Data Source**: Computed locally + `oes_exam_history`.
- **Navigation Flow**: Leads to `/review/:id` or `/dashboard`.

### 7. Review Answers
- **Purpose**: Show user's selected answers vs correct answers with detailed explanations.
- **URL Route**: `/review/:id`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `ReviewQuestionCard`, `FilterReview` (Show All, Correct, Incorrect, Skipped).
- **State Required**: `reviewFilter` (string).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: Reads specific attempt from `oes_exam_history`.
- **Loading State**: Skeleton list.
- **Empty State**: N/A.
- **Error State**: Redirect to dashboard if attempt not found.
- **Responsive Behaviour**: Full width mobile cards.
- **Accessibility Notes**: Use icons AND color (Success/Danger) to indicate correctness, not just color.
- **Animations**: Simple list stagger.
- **Data Source**: `mockQuestions.json` + `oes_exam_history`.
- **Navigation Flow**: Back to `/result/:id` or `/dashboard`.

### 8. Dashboard
- **Purpose**: Central hub for the user to track progress and history.
- **URL Route**: `/dashboard`
- **Layout Structure**: `DashboardLayout` (Sidebar + Main Content Area).
- **Components Used**: `WelcomeHeader`, `StatCards`, `RecentExamsTable`, `UpcomingExamsList`, `PerformanceGraph`.
- **State Required**: `userStats` (object).
- **Context Used**: `AuthContext`, `ThemeContext`.
- **LocalStorage Usage**: Heavily relies on `oes_user` and `oes_exam_history`.
- **Loading State**: Skeleton dashboard grid.
- **Empty State**: "You haven't taken any exams yet." -> Button to `/exams`.
- **Error State**: Auth error -> Redirect to `/login`.
- **Responsive Behaviour**: Sidebar collapses into a hamburger menu.
- **Accessibility Notes**: Data tables must use proper semantic HTML (`<th>`, `<tr>`).
- **Animations**: Dashboard panels fade in up sequentially.
- **Data Source**: LocalStorage + `mockExams.json`.
- **Navigation Flow**: Entry point to Profile, Wishlist, Results.

### 9. Leaderboard
- **Purpose**: Gamification. Show top performers globally or by category.
- **URL Route**: `/leaderboard`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `Podium` (Top 3), `LeaderboardTable`, `CategorySelector`.
- **State Required**: `activeCategory` (string), `leaderboardData` (array).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: Highlight current user's row if they are in the data (`oes_user`).
- **Loading State**: Skeleton rows.
- **Empty State**: "No data for this category yet."
- **Error State**: Toast error.
- **Responsive Behaviour**: Podium scales down, table drops non-essential columns (like 'Time Taken').
- **Accessibility Notes**: Table readability.
- **Animations**: Podium bars rise up from bottom.
- **Data Source**: `mockUsers.json`.
- **Navigation Flow**: View other users (future) or back to Dashboard.

### 10. Profile
- **Purpose**: Manage personal information, avatar, and account settings.
- **URL Route**: `/profile`
- **Layout Structure**: `DashboardLayout`.
- **Components Used**: `ProfileForm`, `AvatarUpload`, `SettingsToggles` (e.g., email notifications mock).
- **State Required**: `formData` (object).
- **Context Used**: `AuthContext`, `ThemeContext`.
- **LocalStorage Usage**: Updates `oes_user`.
- **Loading State**: Skeleton form inputs.
- **Empty State**: N/A.
- **Error State**: Form validation errors (red outlines).
- **Responsive Behaviour**: Standard form stacking.
- **Accessibility Notes**: Labels associated with inputs via `htmlFor`.
- **Animations**: Success toast on save.
- **Data Source**: LocalStorage `oes_user`.
- **Navigation Flow**: Internal to dashboard.

### 11. Wishlist
- **Purpose**: View exams saved for later.
- **URL Route**: `/wishlist`
- **Layout Structure**: `DashboardLayout`.
- **Components Used**: `ExamGrid`, `ExamCard` (with filled heart).
- **State Required**: `wishlistItems` (array).
- **Context Used**: `ThemeContext`, `AuthContext`.
- **LocalStorage Usage**: Reads and mutates `oes_wishlist`.
- **Loading State**: Skeleton grid.
- **Empty State**: Beautiful illustration "Your wishlist is empty" -> Button to `/exams`.
- **Error State**: N/A.
- **Responsive Behaviour**: Grid adapts to columns based on width.
- **Accessibility Notes**: "Remove from wishlist" aria-labels.
- **Animations**: Item removal shrinks and fades out gracefully.
- **Data Source**: `mockExams.json` filtered by `oes_wishlist`.
- **Navigation Flow**: Clicking exam goes to `/exams/:id`.

### 12. About
- **Purpose**: Information about the platform, vision, and team.
- **URL Route**: `/about`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `HeroText`, `FeatureBlocks`, `TeamGrid`.
- **State Required**: None.
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: None.
- **Loading State**: Minimal fade-in.
- **Empty State**: N/A.
- **Error State**: N/A.
- **Responsive Behaviour**: Standard stacking.
- **Accessibility Notes**: Readability of large text blocks.
- **Animations**: Scroll-triggered fade ins.
- **Data Source**: Static.
- **Navigation Flow**: Static page.

### 13. Contact
- **Purpose**: Support and inquiry form.
- **URL Route**: `/contact`
- **Layout Structure**: `MainLayout`.
- **Components Used**: `ContactForm`, `ContactInfoCards`.
- **State Required**: `formState` (idle, submitting, success).
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: None.
- **Loading State**: Button spinner.
- **Empty State**: N/A.
- **Error State**: Validation errors inline.
- **Responsive Behaviour**: Form and info side-by-side on desktop, stacked on mobile.
- **Accessibility Notes**: Proper form validation announcements.
- **Animations**: Success state swaps form for a "Thank you" message seamlessly.
- **Data Source**: Static (mock submission).
- **Navigation Flow**: Static page.

### 14. Login
- **Purpose**: Authenticate users.
- **URL Route**: `/login`
- **Layout Structure**: `AuthLayout` (Split screen: Form left, Brand illustration right).
- **Components Used**: `LoginForm`, `SocialAuthButtons`.
- **State Required**: `email`, `password`, `isLoading`.
- **Context Used**: `AuthContext`.
- **LocalStorage Usage**: Writes session to `oes_user`.
- **Loading State**: Spinner in submit button.
- **Empty State**: N/A.
- **Error State**: "Invalid credentials" shake animation on input.
- **Responsive Behaviour**: Hides the illustration half on mobile, centers the form.
- **Accessibility Notes**: Auto-focus first input, support password managers.
- **Animations**: Slide in form.
- **Data Source**: Validates against `mockUsers.json`.
- **Navigation Flow**: On success -> `/dashboard`. On click -> `/signup`.

### 15. Signup
- **Purpose**: Register new users.
- **URL Route**: `/signup`
- **Layout Structure**: `AuthLayout`.
- **Components Used**: `SignupForm`, `SocialAuthButtons`.
- **State Required**: `name`, `email`, `password`, `isLoading`.
- **Context Used**: `AuthContext`.
- **LocalStorage Usage**: Creates new user in `oes_user`.
- **Loading State**: Spinner in submit button.
- **Empty State**: N/A.
- **Error State**: Password strength errors.
- **Responsive Behaviour**: Same as Login.
- **Accessibility Notes**: Clear requirements for password.
- **Animations**: Slide in form.
- **Data Source**: Local.
- **Navigation Flow**: On success -> `/dashboard`. On click -> `/login`.

### 16. 404 Not Found
- **Purpose**: Catch-all for invalid routes.
- **URL Route**: `*`
- **Layout Structure**: `MinimalLayout`.
- **Components Used**: `NotFoundIllustration`, `HomeButton`.
- **State Required**: None.
- **Context Used**: `ThemeContext`.
- **LocalStorage Usage**: None.
- **Loading State**: None.
- **Empty State**: The entire page is an empty state.
- **Error State**: N/A.
- **Responsive Behaviour**: Centered vertically and horizontally.
- **Accessibility Notes**: State clearly the page doesn't exist.
- **Animations**: Subtle floating animation on illustration.
- **Data Source**: Static.
- **Navigation Flow**: Button leads to `/`.
