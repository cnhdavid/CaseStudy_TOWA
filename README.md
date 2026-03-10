# Case Study TOWA

Frontend application built with **React**, **Vite**, and **Bulma**.

---

## Requirements

- Node.js (v18+)
- npm

## Setup & Run

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

---

## Tech Stack

- React 19
- Vite
- Bulma CSS

## Project Structure

```
src/
  components/
    layout/       # Header, Footer, MainContent, Layout
    grid/         # Grid and Card components
    ui/           # Reusable UI elements (e.g. SearchBar)
  data/
    mockData.js   # Local dummy data
  hooks/
    useApi.js     # Custom hook for API data fetching
```

---

## Development Decisions & Notes

### UI & Styling

I intentionally chose **Bulma** as the CSS framework for this project. Following the principle of "not reinventing the wheel," I wanted to focus my time on component architecture and functional logic rather than writing redundant custom CSS. This allowed for a clean, responsive layout that meets all requirements efficiently.

- **Logo:** Sourced from [Streamline](https://www.streamlinehq.com).

### Git Workflow & Version Control

Given the compact scope of this case study, I decided to work directly on the `main` branch instead of using a complex branching model. My goal was to maintain a clear, linear commit history that documents my progress through each part of the task.

### Notes Part B

After the initial implementation of Part B, I reviewed the code for potential improvements. Based on this, I implemented the following changes:

Both `Header` and `Footer` now share the same navigation items. To avoid duplication, the nav links are defined in a central `NAV_ITEMS` constant and rendered via `.map()` in both components.

The Logo SVG was extracted into its own sub-component to keep the main component JSX clean and readable.

Styling for the pixel font (`Press Start 2P`) is handled via CSS Modules (`Header.module.css`, `Footer.module.css`) rather than inline styles, keeping styling concerns separate from the markup.