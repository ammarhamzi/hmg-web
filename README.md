# HMG Portfolio 2

Personal portfolio website designed for an AI / Software Engineer. This project steers away from standard templates, offering a unique visual identity with glitch effects, smooth interactions, and a polished dark/light mode.

## Setup & Deployment

This project is built with **Vite** and **React**.

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production** (GitHub Pages / Vercel):
    ```bash
    npm run build
    ```
    This will generate a `dist` folder containing the compiled assets.

## Features

- **Unique Aesthetic**: Custom layout using *Syne* and *Space Grotesk* typography.
- **Visual Effects**: 
  - Glitch text animations.
  - Custom cursor with dynamic following glow.
  - Reveal-on-scroll animations.
  - Noise texture overlays.
- **Theming**: Seamless Dark and Light mode support with dynamic accent colors (Neon Yellow / Deep Indigo).
- **Tech Stack**: React 18, TypeScript, Tailwind CSS, and Lucide Icons.

## Customization

All content is managed in `constants.ts`. You can easily update:
- **Personal Info**: Name, role, and summary.
- **Experience**: Career history and roles.
- **Projects**: Portfolio items with images and descriptions.
- **Skills**: Technical skills categorized by domain.
- **Contact**: Email, LinkedIn, and location.

## Project Structure

- `components/`: Reusable UI components.
- `constants.ts`: The central data source for content.
- `index.css`: Global styles and Tailwind directives.
- `vite.config.ts`: Build configuration.
