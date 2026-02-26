# Developer & Agent Guidelines

This document outlines the rules, coding standards, and design guidelines for Project Amara. All developers and AI agents must adhere to these instructions to ensure consistency and modularity.

## Frontend Development

### 1. Design System & Styling
*   **Monochromatic Theme:** The application uses a strict monochromatic theme defined in `frontend/src/index.css` using OKLCH color spaces.
*   **Tailwind CSS v4:** We use Tailwind v4.
*   **Utility Classes:** Use the provided custom utility classes for common elements. **Do not create custom styles unless absolutely necessary.**
*   **Strict Color Usage:**
    *   **NEVER** use hardcoded colors like `bg-white`, `bg-black`, `text-gray-500`.
    *   **ALWAYS** use the semantic utility classes and variables defined in `index.css` (e.g., `bg-primary`, `bg-background`, `bg-[var(--bg-100)]`). This is crucial for the monochromatic theme to adapt correctly between light and dark modes.
    *   **Glassmorphism:** Use the dedicated glass utility classes (`.glass`, `.bg-frosty-glass`) to maintain the "frosted glass" aesthetic.
    *   **Typography:** Strictly adhere to the typography consistency. Use Tailwind's text utilities (`text-xl`, `text-muted`) rather than custom pixel values.
    *   **Override Rule:** These design rules are strict. Overriding them (e.g., introducing new colors outside the monochromatic scale) requires explicit approval from a senior developer.
    *   **Buttons:** `.tw-button`, `.tw-button-secondary`, `.tw-button-ghost`, `.tw-button-sm`.
    *   **Inputs:** `.tw-input`, `.tw-select`, `.tw-checkbox`, `.tw-radio`, `.tw-file`.
    *   **Cards:** `.tw-card`.
    *   **Alerts:** `.tw-alert`.
    *   **Typography:** Use Tailwind utility classes (`text-xl`, `font-bold`, `text-muted`).
*   **New Designs:** To create a new button design or significant UI element, you **must** obtain approval from a senior developer.

### 2. Icons
*   **Library:** We use Google Fonts Material Symbols Outlined.
*   **Usage:** Use the `mso` class on a `span` element.
    ```tsx
    <span className="mso">home</span>
    <span className="mso filled">favorite</span> {/* For filled variant */}
    ```
*   **Sizing:** Control size using `text-*` classes (e.g., `text-xl`, `text-[24px]`).
*   **Search:** Find icons at [fonts.google.com/icons](https://fonts.google.com/icons).

### 3. Notifications & Feedback
*   **ToastContext:** ALways use the custom `ToastContext` for notifications, alerts, and confirmations.
    ```tsx
    import { useToast } from '../context/ToastContext';
    // ...
    const toast = useToast();
    toast.success('Saved successfully');
    toast.error('Something went wrong');
    const confirmed = await toast.confirm('Are you sure?');
    ```

### 4. Components & Folder Structure
*   **UI Library:** Check `frontend/src/ui/` for existing custom components (e.g., `MultiSelect`, `DataTable`) before building new ones.
*   **Pages:**
    *   The system must be divided into proper pages that fit a criteria or model.
    *   Each page must be in its own folder within `frontend/src/pages/`.
    *   **Routing:** Follow the structure in `frontend/src/pages/auth/index.tsx`. Export a route definition component.
*   **Forms:** Use the `useForm` hook located in `frontend/src/ui/use-form.tsx` for form state management.
*   **Utilities:** Reusable utility functions must reside in `frontend/src/utils/`.

## Backend & Data Integration

### 1. Authentication
*   **Method:** We use default Django authentication (Session/Cookies).
*   **No JWT:** Do not implement JWT or stateless token authentication. Stick to the session-based approach.

### 2. Data Fetching
*   **Strictly use `customFetch`:** All API requests must be made using the `customFetch` function exported from `frontend/src/utils/index.ts`.
*   **No Axios:** Do not install or use Axios or any other HTTP client library.
*   **Mechanism:** `customFetch` handles Base URL, CSRF tokens, and credentials automatically.

### 3. Type Safety
*   **Synchronization:** Any update to Django Serializers or Models in the backend **must** be accompanied by a corresponding update to the TypeScript types in the frontend.
*   **Consistency:** Ensure property names and types match exactly.

## General Workflow
1.  **Check `AGENTS.md` and `README.md` first.**
2.  **Verify UI:** Use the `/design` page to check available components and styles.
3.  **Modularize:** Keep code modular and clean.
4.  **Consistency:** Adhere to the coding patterns observed in the codebase.
5.  **Dependencies:** It is preferable to keep dependencies minimal, and not too many, thus only install extra dependencies only if completely necessary.