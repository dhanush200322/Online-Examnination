# Changelog

All notable changes to the Online Examination System (OES) project will be documented in this file.

## [Phase 8] - 2026-08-04
### Added
- Added Error Boundary fallback UI (`ErrorBoundary.jsx`).
- Added network offline detection banner (`OfflineBanner.jsx`).
- Added SEO meta tags, OpenGraph cards, Twitter cards, `robots.txt`, `sitemap.xml`, and `manifest.json`.
- Added `useDocumentTitle` hook for dynamic page titles.
- Added `vercel.json` and `public/_redirects` for SPA routing on Vercel and Netlify.
- Added GitHub community guidelines (`CONTRIBUTING.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md`, Issue and PR templates).
- Added comprehensive `README.md` and MIT `LICENSE`.

## [Phase 7] - 2026-08-04
### Added
- Simulated Authentication flow (`AuthContext`, `useAuth`, `Login`, `Register`, `ForgotPassword`, `ResetPassword`).
- Password strength meter, remember me, 24-hour session expiration, and email verification UI.
- Route guards (`ProtectedRoute.jsx` and `GuestRoute.jsx`).
- Public informational pages (`About.jsx`, `Contact.jsx`, `FAQ.jsx`).
- Legal pages with sticky navigation (`PrivacyPolicy.jsx`, `TermsConditions.jsx`).
- Custom 404 page (`NotFound.jsx`).

## [Phase 6] - 2026-08-04
### Added
- User Dashboard (`Dashboard.jsx`), Profile (`Profile.jsx`), Leaderboard (`Leaderboard.jsx`), Notifications (`Notifications.jsx`), and Settings (`Settings.jsx`).
- Dashboard Layout, Sidebar, Topbar, and Mobile Navigation.
- Native CSS/SVG performance trend charts.

## [Phases 1-5] - 2026-08-04
### Added
- Project initialization, Vite + React setup, Tailwind CSS theme configuration.
- Home page, Exams listing page, Exam Details, and Instructions.
- Exam Session engine with distraction-free timer and question palette.
- Exam Results analysis page and PDF certificate generator.
