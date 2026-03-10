# Case Study TOWA

Frontend application built with **React**, **Vite**, and **Bulma**.

## Development Decisions & Notes

### UI & Styling
I intentionally chose **Bulma** as the CSS framework for this project. Following the principle of "not reinventing the wheel," I wanted to focus my time on component architecture and functional logic rather than writing redundant custom CSS. This allowed for a clean, responsive layout that meets all requirements efficiently.
* **Logo:** The logo used in this project was sourced from **Streamline**.

### Git Workflow & Version Control
Given the compact scope of this case study, I decided to work directly on the `main` branch instead of using a complex branching model. My goal was to maintain a clear, linear commit history that documents my progress through each part of the task.

## Requirements

- Node.js (v18+)
- npm

## Setup & Run

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

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

