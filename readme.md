# Scrapher Client

A React client which consumes the Scrapher API @ - `https://github.com/Akalanka47000/scrapher`

## File Structure

- assets - To hold custom assets such as images and fonts
- components - Database configurations and augmentations
  - common - Shared components between pages
    - badges - A few custom badge components
    - core - Atomic components unaffected by business logic
    - layout - Layout components such as headers and footers
  - home - Components related to the home page
- pages - Page and routing configurations
- providers - App level global providers
- services - External API connectivity layer
- store - Zustand store
- styles - Custom styles
- types - Type definitions
- utils - Shared utilities

</br>

## Basic Commands

- `bun dev` - Starts the application in dev mode
- `bun build` - Builds the application
- `bun start` - Runs the built application
