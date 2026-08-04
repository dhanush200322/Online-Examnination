# Component Architecture: Online Examination System

## Architectural Overview

### Component Communication
- **Props Down:** Data is passed from smart containers (Pages/Features) down to dumb components (Common UI).
- **Events Up:** Callbacks are passed down to handle user interactions and bubble data back up to the state owner.

### Component Hierarchy
1. **Pages (`src/pages/`)**: Route handlers.
2. **Layouts (`src/components/layout/`)**: Page structures.
3. **Features (`src/features/`)**: Smart components encapsulating domain logic.
4. **Common (`src/components/common/`)**: Reusable, atomic UI elements.

### State Ownership
- **Global State**: Managed by Context (`ThemeContext`, `AuthContext`).
- **Domain State**: Managed by Feature containers (e.g., `QuizInterface` owns `currentQuestion`).
- **UI State**: Managed by local components (e.g., `FilterDropdown` owns `isOpen`).

### Data Flow
Unidirectional Data Flow. Mock data is imported at the top-level Feature components. Modifications (like saving an exam or taking a quiz) trigger updates to Context or Custom Hooks, which persist directly to `localStorage`.

### Rendering Strategy & Performance
- **Client-Side Rendering (CSR):** Entirely browser-based.
- **Memoization:** Use `React.memo` for list items like `ExamCard` and `QuestionPalette` to prevent re-renders when parent state (like the quiz timer) updates every second.
- **Code Splitting:** Lazy-load route components via `React.lazy`.

---

## 1. Common Components (`src/components/common/`)

| Component | Purpose | Props | State/Context |
| :--- | :--- | :--- | :--- |
| **Button** | Primary interactive element | `variant`, `size`, `isLoading`, `onClick` | None |
| **Input** | Text/Email/Password entry | `type`, `value`, `onChange`, `error`, `icon` | None |
| **Textarea** | Multi-line text entry | `value`, `onChange`, `rows`, `placeholder` | None |
| **Select** | Dropdown selection | `options`, `value`, `onChange` | Local: `isOpen` |
| **Checkbox** | Multiple choice / Boolean | `checked`, `onChange`, `label` | None |
| **Radio** | Single choice | `name`, `value`, `checked`, `onChange` | None |
| **Switch** | Boolean toggle (Settings) | `checked`, `onChange` | None |
| **Modal** | Overlay dialogues | `isOpen`, `onClose`, `title`, `children` | Local: `isAnimating` |
| **Drawer** | Slide-out panel (Mobile) | `isOpen`, `onClose`, `position` | Local: `isAnimating` |
| **Card** | Content container | `padding`, `shadow`, `children`, `className` | None |
| **Badge** | Status indicator (Difficulty) | `color`, `text`, `icon` | None |
| **Avatar** | User profile image | `src`, `name`, `size` | None |
| **Tooltip** | Hover information | `content`, `children`, `position` | Local: `isHovered` |
| **Spinner** | Loading state | `size`, `color` | None |
| **Skeleton** | Placeholder loading | `width`, `height`, `rounded` | None |
| **EmptyState**| No data illustration | `icon`, `title`, `description`, `action` | None |
| **Pagination**| List navigation | `currentPage`, `totalPages`, `onPageChange` | None |
| **Breadcrumb**| Route navigation | `items` (label, href) | None |
| **Toast** | Success/Error notifications| `message`, `type`, `duration` | Local: `isVisible` |
| **ProgressBar**| Visual progress (Quiz) | `progress` (0-100), `color` | None |
| **StatCard** | Dashboard metrics | `title`, `value`, `icon`, `trend` | None |
| **ChartCard** | Chart container | `title`, `children` | None |
| **SectionHeader**| Page/Section title | `title`, `subtitle`, `action` | None |
| **ThemeToggle**| Switch Dark/Light | None | Context: `ThemeContext` |
| **SearchInput**| Debounced search | `value`, `onChange`, `placeholder` | Local: `inputValue` |
| **FilterDropdown**| Multi-select filters | `options`, `selected`, `onChange` | Local: `isOpen` |
| **SortDropdown**| Ordering lists | `options`, `selected`, `onChange` | Local: `isOpen` |

*Note: All common components are highly reusable, use CSS transitions for animation, have robust ARIA accessibility, and are fully responsive.*

---

## 2. Layout Components (`src/components/layout/`)

- **Layout / MainLayout:** Parent for most pages. Children: Navbar, Container, Footer.
- **Navbar:** Top navigation. Context: `AuthContext`. Children: MobileMenu, ThemeToggle, Avatar.
- **Footer:** Bottom links.
- **Sidebar:** Desktop-only navigation for Dashboard.
- **DashboardLayout:** Wraps Dashboard features. Children: Sidebar, DashboardTopbar, Container.
- **MobileMenu:** Drawer containing navigation links, visible only on small screens.
- **Container:** Standardizes `max-w-7xl` and padding.

---

## 3. Feature Components (`src/features/`)

### HOME
- **HeroSection:** Main CTA, animations. Props: `title`, `subtitle`.
- **SearchSection:** Hero search bar leading to Exams list.
- **FeaturedExams:** Carousel/Grid. Data: `mockHomeData`. Children: `ExamCard`.
- **Categories:** Grid of category cards.
- **UpcomingExams:** List of scheduled exams.
- **TopPerformers:** Mini leaderboard snippet.
- **Testimonials:** Social proof cards.
- **Newsletter:** Email collection form.
- **CTASection:** Final signup push before footer.

### EXAMS
- **ExamGrid:** Container for exam mapping. Props: `exams[]`. Children: `ExamCard`.
- **ExamCard:** Individual exam preview. Props: `exam`. Events: `onWishlistToggle`.
- **ExamFilters:** Sidebar/Drawer holding all filters. LocalState: `isMobileOpen`.
- **SearchBar, SortDropdown, CategoryFilter, DifficultyFilter, DurationFilter:** Specialized filters emitting `onChange` to parent state.
- **ExamSkeleton:** Loading state for grid.
- **NoExamsFound:** Uses `EmptyState`.

### EXAM DETAILS
- **ExamHero:** Title, rating, creator. 
- **ExamInformation:** Description block.
- **InstructorCard:** Creator details.
- **ExamFeatures:** List of included items (e.g., Certificate).
- **Syllabus / Requirements:** List of topics and prerequisites.
- **ExamStatistics:** Pass rate, average time.
- **RelatedExams:** 3-4 similar `ExamCard`s.
- **ShareButtons:** Social media links.
- **StickyEnrollCard:** Desktop right-side card with "Start Exam" CTA. Checks `localStorage` (`oes_exam_history`) to see if already taken.

### INSTRUCTIONS
- **InstructionCard:** White/Dark container.
- **ExamRules:** Bulleted list.
- **Checklist:** Hardware checks.
- **StartExamButton:** Needs `isAgreed` prop to be true. Creates `oes_active_exam` entry on click.

### QUIZ (Highly complex, relies on `ExamContext`)
- **QuestionCard:** Displays question text.
- **QuestionNavigation:** Prev/Next buttons.
- **QuestionPalette:** Grid of numbers. Color-coded based on `questionStatuses`. (Memoized to prevent render lag).
- **QuestionNumber:** Current / Total.
- **OptionCard:** Radio-like button for answers.
- **Timer:** Reads from `ExamContext`. Updates every second. Pulses red at < 1 min.
- **SubmitModal:** Confirmation before calculating.
- **ReviewFlag:** Toggle for "Mark for Review".
- **QuestionSkeleton:** Loading state.

### RESULT
- **ScoreCard:** Massive typography showing %.
- **PerformanceChart:** Recharts/Chart.js radar.
- **StatisticsGrid:** Grid of `StatCard`s (Correct, Wrong, Skipped, Time).
- **ResultSummary:** Pass/Fail message.
- **RankCard:** Mock global rank display.
- **DownloadCertificate:** Button triggering PDF generation (or mock download).
- **ShareScore:** Social buttons.

### REVIEW
- **AnswerCard:** Wrapper for reviewed question.
- **CorrectAnswer / WrongAnswer / SkippedAnswer:** Specialized views indicating the user's choice vs correct choice.
- **QuestionReview:** The explanation text block below the answers.

### DASHBOARD
- **DashboardSidebar / DashboardTopbar:** Layout overrides.
- **DashboardOverview:** Greeting and top-level data.
- **StatisticsCards:** `StatCard`s driven by `localStorage` history.
- **RecentExams:** Table of attempts.
- **UpcomingExams:** Reminders.
- **PerformanceChart:** Line chart of scores over time.
- **Certificates:** Grid of earned certificates.
- **ActivityTimeline:** Vertical list of actions.
- **NotificationsPanel:** Mock alerts.

### PROFILE
- **ProfileCard:** User overview (Avatar, Name).
- **ProfileForm:** Edit details. Syncs to `localStorage` (`oes_user`).
- **ProfileStats:** Quick metrics.
- **ThemeSettings:** Toggle light/dark.
- **NotificationSettings:** Mock toggles.

### LEADERBOARD
- **LeaderboardTable:** Paginated data list.
- **LeaderboardCard:** Mobile view of a row.
- **TopThree:** Podium visual for ranks 1, 2, 3.
- **RankingFilters:** Category selector.

### WISHLIST
- **WishlistGrid:** Reuses `ExamGrid`.
- **WishlistCard:** Reuses `ExamCard`.
- **WishlistEmptyState:** Uses `EmptyState`.

### ABOUT
- **AboutHero / CompanyStory / MissionVision:** Static text and imagery components.
- **Timeline:** Vertical timeline of company history.
- **Team:** Grid of team member cards.
- **FAQ:** Accordion component.

### CONTACT
- **ContactHero / ContactInformation:** Static.
- **ContactForm:** Formik/React-Hook-Form structure.
- **OfficeLocation / MapCard:** Mock map image or iframe.

### 404
- **NotFoundIllustration:** SVG graphic.
- **HelpfulLinks:** Navigation back to home/exams.
