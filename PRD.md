# Product Requirements Document (PRD): Online Examination System

## 1. Project Overview
The Online Examination System is a premium, client-side only web application designed to simulate a robust testing environment. Built exclusively with React.js, Tailwind CSS, and local storage, the platform provides a seamless, zero-latency experience for taking exams, reviewing results, and tracking performance without the need for a backend server. The design aesthetic draws heavy inspiration from industry leaders like Apple, Linear, Stripe, and Vercel, prioritizing clean interfaces, micro-interactions, and premium glassmorphism.

## 2. Vision
To deliver the most visually stunning, highly responsive, and user-centric client-side examination platform that sets a new standard for educational technology interfaces, proving that complex state and data management can be elegantly handled entirely within the browser.

## 3. Goals
- Create a flawless, zero-latency exam-taking experience.
- Implement robust local storage mechanisms to persist state (user profiles, exam history, leaderboards) reliably.
- Deliver a state-of-the-art UI/UX using modern design principles (dark mode, glassmorphism, fluid animations).
- Provide comprehensive analytics and result breakdowns instantly after exam completion.

## 4. Target Audience
- **Students & Learners:** Individuals preparing for competitive exams, certifications, or self-assessment.
- **Educators/Institutions (Mock Use):** Teachers looking for a beautiful interface template for student assessment.
- **Developers/Designers:** Professionals seeking an exemplary reference for premium frontend architecture and UI/UX design.

## 5. User Personas
### Persona 1: Alex the Aspirant
- **Role:** College Student
- **Needs:** Fast, distraction-free environment, clear progress tracking, detailed result analysis to identify weak areas.
- **Pain Points:** Clunky interfaces, unexpected session timeouts, lack of clear review mechanisms.

### Persona 2: Sarah the Self-Improver
- **Role:** Working Professional
- **Needs:** Ability to save exams for later, responsive design to take quizzes on mobile during commutes, visually pleasing dark mode to reduce eye strain.
- **Pain Points:** Complex navigation, poor mobile responsiveness, losing progress if the browser refreshes.

## 6. User Journey
1. **Discovery:** User lands on the Home page, views featured exams and categories.
2. **Exploration:** User navigates to Exams Listing, filters by difficulty/duration, and selects an exam.
3. **Preparation:** User views Exam Details and Instructions.
4. **Execution:** User enters the Quiz Interface, navigates questions via the palette, tracks time, and submits.
5. **Review:** User lands on the Result Page, views the score card, performance chart, and reviews answers.
6. **Retention:** User visits the Dashboard to view history, saved exams, and checks the Leaderboard.

## 7. User Flow
`Home` -> `Exams Listing` -> `Exam Details` -> `Instructions` -> `Quiz Interface` (Timer starts) -> `Auto/Manual Submit` -> `Result Page` -> `Review Answers` -> `Dashboard/History`

## 8. Sitemap
- / (Home)
- /exams
- /exams/:id
- /exams/:id/instructions
- /quiz/:id
- /result/:id
- /review/:id
- /dashboard
- /leaderboard
- /profile
- /about
- /contact
- /login (UI only)
- /signup (UI only)
- /admin (UI only)
- /* (404)

## 9. Complete Page List
1. Home
2. Exams Listing
3. Exam Details
4. Instructions
5. Quiz Interface
6. Result Page
7. Review Answers
8. Dashboard
9. Leaderboard
10. Profile
11. About
12. Contact
13. Login UI (Bonus)
14. Signup UI (Bonus)
15. Admin Dashboard UI (Bonus)
16. Certificate UI (Bonus)
17. PDF Report UI (Bonus)
18. 404 Not Found

## 10. Features
### Core Features
- Hero Section with dynamic elements
- Featured Exams & Categories carousel/grid
- Comprehensive Search & Filtering (Difficulty, Duration, Category)
- Detailed Exam Pages
- Advanced Quiz Engine (MCQs, Question Palette, Timer, Auto-submit)
- Detailed Result Calculation (Correct/Wrong, Percentage, Score Card)
- Answer Review System
- User Dashboard (History, Wishlist/Saved Exams)

### UI/UX Features
- Premium Dark Mode
- Fully Responsive Design
- Toast Notifications
- Micro-animations and Page Transitions
- Premium Glassmorphism UI elements

## 11. Functional Requirements
- **Exam Engine:** Must handle question navigation (Next/Prev/Palette), mark for review, and calculate time spent per question.
- **Timer:** Must countdown from the specified duration and trigger auto-submit upon reaching zero.
- **Evaluation:** Must accurately compare user answers against mock data correct answers and generate a comprehensive score object.
- **Persistence:** All progress (bookmarks, exam history, profile data) must be serialized and saved to `localStorage`.
- **Search/Filter:** Must filter the mock exam list dynamically based on user input without page reloads.

## 12. Non-functional Requirements
- **Reliability:** The app must elegantly handle browser refreshes during an exam (rehydrate state from local storage).
- **Usability:** High contrast text, clear CTAs, intuitive navigation.
- **Maintainability:** Component-based architecture with clean separation of concerns.

## 13. Responsive Requirements
- **Mobile (320px - 480px):** Stacked layouts, bottom navigation or hamburger menu, touch-friendly touch targets (min 44x44px).
- **Tablet (481px - 768px):** Adjusted grid columns, optimized question palette placement (slide-out drawer).
- **Desktop (769px+):** Full use of screen real estate, persistent sidebars for question palettes and dashboards.

## 14. UI/UX Guidelines
- **Vibe:** Sleek, professional, modern, distraction-free.
- **Inspiration:** Apple (typography, spacing), Linear (dark mode, precision), Stripe (gradients, shadows, micro-interactions), Vercel (minimalism, focus).
- **Components:** Use soft borders (rounded-xl/2xl), subtle inner shadows, and frosted glass effects (backdrop-blur) for overlays and floating elements.

## 15. Design Principles
- **Minimalism:** Remove non-essential elements. Every pixel must serve a purpose.
- **Clarity:** Ensure the user always knows their current status (especially during a quiz).
- **Feedback:** Immediate visual feedback for every interaction (hover states, click animations, toast notifications).
- **Consistency:** Uniform spacing, border radii, and color application across all views.

## 16. Color Palette
- **Backgrounds:** 
  - Dark: Deep Charcoal/Black (`#0A0A0A`, `#121212`)
  - Light: Off-white/Geist white (`#FAFAFA`, `#FFFFFF`)
- **Accents:** 
  - Primary: Vercel Blue (`#0070F3`) or Linear Violet (`#5E6AD2`)
  - Success: Emerald Green (`#10B981`)
  - Warning: Amber (`#F59E0B`)
  - Danger: Rose/Red (`#EF4444`)
- **Surfaces:** Elevated panels using semi-transparent grays with backdrop blur (Glassmorphism).
- **Text:** High contrast white/gray for dark mode, dark slate for light mode.

## 17. Typography
- **Primary Font:** Inter, SF Pro, or Geist.
- **Headings:** Tight tracking (letter-spacing), bold weights (600-800).
- **Body:** Highly legible, relaxed line height (1.5 - 1.6).
- **Monospace (for data/code):** JetBrains Mono or SF Mono.

## 18. Icon System
- **Library:** Lucide React or Radix Icons.
- **Style:** Stroke-based, consistent 2px weight, minimal and geometric.

## 19. Animation Guidelines
- **Library:** Framer Motion (recommended) or CSS Transitions.
- **Durations:** Snappy and responsive (150ms - 300ms).
- **Easings:** Spring physics for structural changes (modals, drawers), ease-out for standard transitions.
- **Specifics:** Page fade-ins, list item staggering, subtle scale on button hover, smooth progress bar fills.

## 20. Accessibility
- Keyboard navigability for the entire quiz interface (space to select, arrows to navigate).
- ARIA labels for icon-only buttons.
- Minimum contrast ratio of 4.5:1 for text.
- Focus rings visible for keyboard users.

## 21. Performance
- 100/100 Lighthouse scores targeted.
- Code splitting via React Router lazy loading.
- Optimized rendering to prevent re-renders of the entire question list when selecting an answer.

## 22. Security
- Sanitize any mock data inputs if later connected to a CMS.
- Prevent manual manipulation of `localStorage` scores (implement a simple client-side hash or validation mechanism if possible, though acknowledge limitations of client-side-only security).

## 23. SEO
- While a client-side app, use semantic HTML.
- Proper meta tags, titles, and descriptions for each route using React Helmet.

## 24. Mock Data Strategy
- Create a robust `data/` directory containing JSON objects for `exams`, `categories`, `questions`, and `users`.
- Questions should include text, options (array), correct answer ID, difficulty, and explanation.

## 25. LocalStorage Strategy
- **Keys:** `oes_user`, `oes_exam_history`, `oes_active_exam`, `oes_wishlist`, `oes_settings`.
- **Active Exam State:** Continuously sync current question index, selected answers, and remaining time to `oes_active_exam` to handle accidental refreshes. Clear this key upon submission.

## 26. State Management
- **Context API:** Use Context for global states:
  - `ThemeContext` (Dark/Light mode)
  - `AuthContext` (Mock user session)
  - `ExamContext` (Active exam timer, questions, answers)
- **Local State (useState/useReducer):** For component-level UI toggles (dropdowns, modals).

## 27. Routing Strategy
- Use React Router v6.
- Implement Private Routes (conceptually, checking mock auth state) for Dashboard, Profile, and Quiz interfaces.
- Scroll to top on route change.

## 28. Validation Strategy
- Use controlled components for any form inputs (login, profile edit).
- Validate required fields before allowing quiz submission (or prompt a warning for unanswered questions).

## 29. Error Handling
- Catch invalid exam IDs and redirect to the 404 page.
- Graceful degradation if `localStorage` is disabled or full.
- Error boundaries to prevent complete app crashes.

## 30. Empty States
- Beautifully designed empty states with illustrations/icons for:
  - No exams found (Search/Filter).
  - Empty wishlist.
  - No exam history.

## 31. Loading States
- Skeleton loaders for exam lists, dashboards, and question cards rather than generic spinners.
- Smooth transitions between loading and loaded states.

## 32. Dashboard Requirements
- Overview metrics (Total Exams Taken, Average Score, Global Rank).
- Recent Exam History list with status (Passed/Failed) and score.
- Quick access to Wishlisted exams.
- Visual charts (Radar or Line chart) showing performance over time using Recharts or Chart.js.

## 33. Quiz Engine Requirements
- **Question View:** Clear typography for questions, distinct clickable areas for options.
- **Question Palette:** A grid of question numbers color-coded by status (Answered, Not Answered, Marked for Review, Answered & Marked).
- **Navigation:** Next, Previous, Clear Response, Mark for Review buttons.

## 34. Timer Requirements
- Fixed at the top or side, highly visible.
- Turns warning colors (Amber, Red) when time is running low (e.g., last 5 minutes, last 1 minute).
- Heartbeat animation in the final seconds.

## 35. Result Calculation Logic
- Compare `selectedAnswers` map against `exam.questions[i].correctOption`.
- Calculate:
  - Total Questions
  - Attempted / Unattempted
  - Correct / Incorrect
  - Accuracy Percentage
  - Total Score (applying negative marking if specified in exam mock data).

## 36. Future Enhancements
- WebRTC integration for proctoring.
- Backend migration (Node.js/Supabase).
- Multi-language support (i18n).
- Multiplayer live quizzes.

## 37. Development Roadmap
1. **Phase 1: Foundation.** Setup Vite, Tailwind, Routing, Context, and Mock Data.
2. **Phase 2: Core UI.** Develop Home, Exams Listing, Exam Details, and persistent Layout (Navbar/Footer).
3. **Phase 3: Quiz Engine.** Build the interactive Quiz Interface, Timer, and State Persistence.
4. **Phase 4: Analytics & Dashboard.** Develop Result Calculation, Result Page, Review Answers, and User Dashboard.
5. **Phase 5: Polish.** Implement Dark Mode, Animations, Glassmorphism, and responsive testing.

## 38. Verification Plan
- **State Persistence:** Start a quiz, answer 2 questions, refresh the browser. Verify state is restored.
- **Timer:** Wait for the timer to expire. Verify automatic submission and redirection to results.
- **Scoring:** Complete a quiz with known answers. Verify the calculated percentage and correct/wrong counts are perfectly accurate.
- **Responsiveness:** Test the Question Palette on mobile devices to ensure it collapses into a drawer/modal correctly.

## 39. User Review Required
- Please review the **Color Palette** (Section 16) and **Mock Data Strategy** (Section 24) to ensure they align perfectly with your vision before UI implementation begins.
- Confirm if negative marking should be supported in the V1 Result Calculation Logic.
