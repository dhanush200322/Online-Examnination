# Design System: Online Examination System

## 1. Design Philosophy
The design philosophy of the Online Examination System is rooted in the aesthetics of top-tier SaaS products (Apple, Linear, Stripe, Vercel, Notion). It prioritizes focus, clarity, and delight. The interface should feel invisible when the user is concentrating on an exam, yet inherently premium when navigating dashboards and results. We embrace large white space, subtle depth, and pixel-perfect alignment.

## 2. UI Principles
- **Clarity over Cleverness:** Every interactive element must be instantly recognizable.
- **Visual Hierarchy:** Use size, weight, and contrast to guide the user's eye naturally from the most critical information down to secondary details.
- **Tactile Feedback:** Every click, hover, and focus state must provide immediate, smooth visual feedback using native CSS transitions.
- **Focus:** Eliminate distractions during the core exam loop.

## 3. Brand Personality
- **Premium & Professional:** Exudes trust, stability, and high quality.
- **Minimal & Modern:** Clean lines, lack of unnecessary borders, and sophisticated typography.
- **Empathetic & Guiding:** Clear empty states, friendly error messages, and encouraging result displays.

## 4. Design Tokens
Design tokens are the foundational variables of our UI. All colors, spacing, and typography must map to a specific token rather than using hardcoded values. We utilize standard CSS variables mapped to Tailwind utility classes.

## 5. Color Palette

### Light Mode Colors
- **Primary:** `#000000` (Deep Black for striking contrast, Vercel style)
- **Secondary:** `#666666` (Subtle Gray for secondary text/icons)
- **Accent:** `#5E6AD2` (Linear Violet for active states, focus rings, and gradient hints)
- **Success:** `#10B981` (Emerald Green for correct answers, passed states)
- **Warning:** `#F59E0B` (Amber for low time alerts, flagged questions)
- **Danger:** `#EF4444` (Rose Red for incorrect answers, failed states)
- **Info:** `#3B82F6` (Blue for tooltips, helpful notes)
- **Background:** `#FAFAFA` (Off-white, Geist white to reduce glare)
- **Surface:** `#FFFFFF` (Pure white for cards and elevated elements)
- **Border:** `#EAEAEA` (Ultra-light gray for subtle separation)
- **Text:** 
  - Heading: `#111827` (Gray 900)
  - Body: `#4B5563` (Gray 600)
  - Muted: `#9CA3AF` (Gray 400)

### Dark Mode Colors
- **Background:** `#0A0A0A` (Deep Charcoal, almost pitch black)
- **Surface:** `#121212` (Slightly elevated dark gray)
- **Surface Elevated:** `#1C1C1C` (For modals and popovers)
- **Border:** `#2E2E2E` (Subtle dark separator)
- **Primary:** `#FFFFFF` (Pure white for high contrast actions)
- **Secondary:** `#A1A1AA` (Zinc 400)
- **Text:**
  - Heading: `#F9FAFB` (Gray 50)
  - Body: `#D1D5DB` (Gray 300)
  - Muted: `#6B7280` (Gray 500)

## 6. Typography
- **Heading Fonts:** `Inter`, `SF Pro Display`, or system sans-serif.
- **Body Fonts:** `Inter`, `SF Pro Text`, or system sans-serif.
- **Monospace:** `JetBrains Mono` or `SF Mono` (for code blocks or precise data like the Timer).
- **Font Sizes:**
  - `xs`: 0.75rem (12px)
  - `sm`: 0.875rem (14px)
  - `base`: 1rem (16px)
  - `lg`: 1.125rem (18px)
  - `xl`: 1.25rem (20px)
  - `2xl`: 1.5rem (24px)
  - `3xl`: 1.875rem (30px)
  - `4xl`: 2.25rem (36px)
  - `5xl`: 3rem (48px)
- **Line Heights:**
  - Headings: `1.2` (tight)
  - Body: `1.6` (relaxed for readability)
- **Letter Spacing:**
  - Headings: `-0.02em` (tight tracking for modern look)
  - Body: `normal`
  - Uppercase Labels: `0.05em` (wide tracking)

## 7. Spacing System
Based on a 4px grid system:
- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px (Base padding)
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px
- `24` = 96px (Large section gaps)

## 8. Border Radius
Theme specifically requests "Rounded XL".
- **Sm:** `0.375rem` (6px) - Checkboxes, small badges
- **Md:** `0.5rem` (8px) - Inputs, small buttons
- **Lg:** `0.75rem` (12px) - Standard buttons, small cards
- **Xl:** `1rem` (16px) - Primary cards, modals, dropdowns
- **2xl:** `1.5rem` (24px) - Large hero cards, main dashboard panels
- **Full:** `9999px` - Avatars, pill badges

## 9. Shadow System
Theme specifically requests "Soft Shadows".
- **Sm:** `0 1px 2px rgba(0,0,0,0.04)` - Inputs, buttons
- **Md:** `0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)` - Cards, dropdowns
- **Lg:** `0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.025)` - Modals, popovers
- **Hover:** Combine `Shadow Md` with a subtle Y-axis translation (`-translate-y-1`)
- **Dark Mode Shadows:** Rely heavily on borders (`#2E2E2E`) and extremely soft, spread-out opacity shadows (`rgba(0,0,0,0.5)`).

## 10. Glassmorphism Rules
- **Background:** Semi-transparent white (`bg-white/70`) or dark (`bg-[#0A0A0A]/70`).
- **Backdrop Blur:** Use `backdrop-blur-md` (12px) or `backdrop-blur-lg` (16px).
- **Border:** Must have a very thin, semi-transparent border to define the edge (`border border-white/20` in light, `border-white/10` in dark).
- **Use Cases:** Sticky navbars, floating action bars, question palettes, and toast notifications.

## 11. Grid System
- Standard 12-column grid structure for page layouts.
- Gaps: Default to `gap-6` (24px) for desktop, `gap-4` (16px) for mobile.

## 12. Layout Rules
- **Large White Space:** Do not crowd elements. Use `py-16` or `py-24` between major landing page sections.
- **Centering:** Maximize readability by centering primary content blocks (like the quiz engine) and restricting max-width.

## 13. Container Widths
- **Quiz Interface:** `max-w-3xl` (768px) for optimal reading line length.
- **Dashboard:** `max-w-7xl` (1280px) to utilize screen real estate for charts.
- **Landing Pages:** `max-w-7xl` (1280px) for hero and feature sections.

## 14. Breakpoints
- **Mobile (sm):** `640px`
- **Tablet (md):** `768px`
- **Laptop (lg):** `1024px`
- **Desktop (xl):** `1280px`
- **Wide (2xl):** `1536px`

## 15. Icon System
- Use Lucide React.
- **Weight:** Consistent `stroke-width="2"`.
- **Size:** `w-5 h-5` for inline text, `w-6 h-6` for standalone buttons, `w-12 h-12` for empty states.

## 16. Button Design
- **Gradient Buttons (Primary):** Linear gradient (e.g., Violet to Indigo) or sleek Solid Black/White depending on context. Text must be bold (`font-semibold`).
- **Secondary:** Transparent background, subtle border, distinct hover state (`hover:bg-gray-50`).
- **Ghost:** No border, background changes on hover (`hover:bg-gray-100`).
- **Radius:** `rounded-xl` or `rounded-full`.
- **Transitions:** Native CSS `transition-all duration-200 ease-out`.

## 17. Input Design
- **Background:** Solid very light gray (`bg-gray-50`) or dark (`bg-[#1A1A1A]`).
- **Border:** Transparent by default, shifts to Accent color on focus with a soft focus ring (`ring-2 ring-accent/20`).
- **Padding:** Generous padding (`px-4 py-3`).
- **Radius:** `rounded-xl`.

## 18. Card Design
- **Glass Cards:** Used for premium tier features or featured exams.
- **Standard Cards:** Solid surface color, `rounded-2xl`, soft border (`border-gray-100`), `shadow-sm`.
- **Hover:** Smooth scale up (`hover:scale-[1.01]`) and shadow elevation.

## 19. Modal Design
- **Backdrop:** Dark glassmorphism (`bg-black/40 backdrop-blur-sm`).
- **Surface:** Solid surface color, `rounded-2xl`, large shadow (`shadow-2xl`).
- **Animation:** Slide up and fade in via native CSS keyframes or transition classes.

## 20. Sidebar Design
- **Dashboard:** Persistent on desktop (`w-64`), bordered right (`border-r`), subtle background.
- **Mobile:** Slides in from the left with a glassmorphism overlay.

## 21. Navbar Design
- **Style:** Sticky at the top, Glassmorphism (`backdrop-blur-md`).
- **Height:** `h-16` or `h-20`.
- **Content:** Logo left, Links center, Auth/Profile right.

## 22. Footer Design
- **Layout:** Multi-column (Brand, Links, Legal).
- **Typography:** Muted text (`text-gray-500`), small font size.
- **Spacing:** Generous top padding (`pt-16 pb-8`).

## 23. Badge Design
- **Shape:** Pill-shaped (`rounded-full`).
- **Style:** Soft backgrounds (e.g., `bg-green-100 text-green-700`) for status indicators (Difficulty, Passed/Failed).
- **Typography:** Uppercase, wide tracking, `text-xs font-semibold`.

## 24. Toast Design
- **Position:** Bottom right or Top center.
- **Style:** Glassmorphism card, rounded-lg, specific icon (Check/Error) on the left.
- **Animation:** Slide in from edge, fade out.

## 25. Skeleton Design
- **Style:** Pulsing subtle gray background (`animate-pulse bg-gray-200`).
- **Shape:** Matches the exact border radius and dimensions of the content it replaces.

## 26. Empty State Design
- **Visual:** A large, monochrome or subtly tinted icon/illustration.
- **Copy:** Clear, empathetic heading (e.g., "No exams found") and helpful subtext.
- **Action:** Always include a primary button to guide the user back to safety (e.g., "Clear Filters").

## 27. Loading State Design
- **Spinners:** Minimalist SVG circle with stroke-dasharray animation.
- **Page Transitions:** Top progress bar (like GitHub/Next.js) or full-screen soft fade in.

## 28. Charts Design
- **Lines/Bars:** Use the Accent color with a gradient fill below the line.
- **Grids:** Extremely subtle dashed lines, or remove them entirely for a cleaner look.
- **Tooltips:** Custom glassmorphism tooltips mirroring the app's aesthetic.

## 29. Tables Design
- **Headers:** Muted background (`bg-gray-50`), uppercase, tracking-wider text.
- **Rows:** Clean, bottom border only, distinct hover state (`hover:bg-gray-50/50`).
- **Radius:** Wrap the entire table in a `rounded-xl` border overflow container.

## 30. Quiz UI Design
- **Focus Mode:** Remove all unnecessary navigation. 
- **Question Text:** `text-xl` or `text-2xl`, highly legible, `font-medium`.
- **Options:** Large clickable areas (`rounded-xl` cards), distinct selected state (Accent border + very light Accent background).

## 31. Question Palette Design
- **Grid:** Tight grid of small squares or circles.
- **Colors:** 
  - Gray: Unanswered
  - Accent/Primary: Answered
  - Warning (Amber): Marked for Review
  - Warning + Primary dot: Answered & Marked

## 32. Timer Design
- **Typography:** Monospace font for exact digit alignment.
- **States:** 
  - Normal: Standard text color.
  - Warning (Last 5 mins): Amber text.
  - Critical (Last 1 min): Red text with a subtle CSS pulse animation.

## 33. Result Card Design
- **Hero Metric:** Massive typography for the final percentage/score (e.g., `text-6xl font-bold`).
- **Breakdown:** Clean grid showing Correct, Incorrect, and Skipped counts using respective success/danger colors.

## 34. Dashboard Design
- **Cards:** Metric overview cards at the top (Total Exams, Avg Score).
- **Recent Activity:** A clean list or table of latest attempts.
- **Layout:** Grid-based, highly structured, leveraging the `max-w-7xl` container.

## 35. Motion Design
- **Philosophy:** Animations should feel natural, snappy, and never delay the user.
- **Implementation:** Strictly use Native CSS Transitions (`transition-all`) and Keyframes (`@keyframes`). No Framer Motion to keep bundle sizes zero.

## 36. Animation Guidelines
- **Hover:** `duration-200 ease-out`.
- **Page Load:** Fade in up (`opacity-0 translate-y-4` to `opacity-100 translate-y-0`) over `500ms ease-out`.
- **Modals:** Scale up slightly (`scale-95` to `scale-100`) and fade in over `200ms cubic-bezier(0.16, 1, 0.3, 1)` (Apple-style spring feel simulated via CSS).

## 37. Accessibility
- **Contrast:** Ensure all text passes WCAG AA standards (4.5:1).
- **Focus Rings:** Never remove `outline-none` without providing a custom `:focus-visible` ring using the Accent color.
- **Target Size:** All interactive buttons/options must be at least 44x44px for touch interfaces.

## 38. Responsive Design Rules
- **Mobile First:** Build the stacked mobile view first.
- **Collapsing:** Hide complex navigation into hamburger menus on mobile.
- **Palettes:** Move sidebars (like Question Palette) into bottom sheets or slide-out drawers on screens smaller than `1024px`.

## 39. Component Consistency Rules
- Never mix border radii paradigms (e.g., don't use a `rounded-sm` button inside a `rounded-2xl` card unless functionally necessary).
- Stick strictly to the defined shadow depths.
- Use CSS variables for all theme colors to ensure a perfect, glitch-free dark mode toggle.
