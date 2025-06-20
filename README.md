# JCash Fillout Navigation Bar

A modern, interactive navigation bar component built with React, TypeScript, and Tailwind CSS. Features drag-and-drop reordering, context menus, and persistent state management.

## 🚀 Features

- **Drag & Drop Reordering**: Intuitively reorder navigation tabs by dragging.
- **Context Menu**: Right-click any tab to access actions (e.g., Rename, Duplicate, Delete).
- **Persistent State**: Tab order is automatically saved to localStorage.
- **Add New Pages**: Seamlessly insert new pages between existing tabs or at the end.
- **Active Tab Management**: Clear visual indication for the currently active tab.
- **Custom Fonts**: Supports custom fonts like Inter and BL Melody.

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Modern build tool and dev server
- **Lucide React** - Icons
- **localStorage** - State persistence

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/jcash725/jcash-fillout-navigation-bar.git
    cd jcash-fillout-navigation-bar
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173`.

## 🎯 Usage

The application is self-contained within the `NavigationContainer`. To use it, simply render it in your main `App.tsx`:

```jsx
// src/App.tsx
import { NavigationContainer } from './components/navigation-container/NavigationContainer';

function App() {
  return <NavigationContainer />;
}
```

### Customizing Default Pages
To change the initial set of navigation tabs, edit the `defaultNavigationBarPages` array in `src/data/navigationData.ts`:

```typescript
// src/data/navigationData.ts
export const defaultNavigationBarPages: NavItem[] = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' },
];
```

## 📁 Project Structure

The project follows a smart container/presentational component architecture.

```
src/
├── components/
│   ├── navigation-container/
│   │   └── NavigationContainer.tsx  # (Smart) Manages all state and logic
│   ├── navigation-bar/
│   │   └── NavigationBar.tsx          # (Dumb) Renders the bar and tabs
│   ├── navigation-bar-item/
│   │   └── NavigationBarItem.tsx      # (Dumb) An individual tab
│   └── page-view/
│       └── PageView.tsx               # (Dumb) Displays the active page title
├── hooks/
│   └── useHorizontalDrag.ts         # Logic for drag-and-drop
├── data/
│   └── navigationData.ts            # Default data and localStorage logic
└── ...
```

## 🎯 Key Components

### `NavigationContainer` (Smart Component)
This is the "brain" of the application. It holds all the state (the list of tabs, the active tab) and all the logic (adding, resetting, reordering tabs). It passes this data and logic down to the presentational components as props.

### `NavigationBar` (Presentational Component)
This component's only job is to display the navigation bar and its tabs. It doesn't contain any complex logic. It receives the list of tabs to display and functions to call when a user interacts with it (e.g., `onItemClick`).

### `PageView` (Presentational Component)
A simple component that displays the name of the currently active navigation item.

## 🔧 Development

### Available Scripts
-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run lint`: Runs the ESLint linter.
-   `npm run preview`: Previews the production build locally.
-   `npm run deploy`: Deploys the application to GitHub Pages.

---

## 🎨 Customization

### Fonts
The project supports two custom fonts:
- **Inter**: Modern sans-serif font (loaded from Google Fonts)
- **BL Melody**: Custom font (requires font files in `public/fonts/`)

To use custom fonts in components:
```jsx
<div className="font-inter">Inter font text</div>
<div className="font-melody">BL Melody font text</div>
```

### Styling
Styles are managed through Tailwind CSS classes and custom CSS in `src/styles/styles.css`. The project uses CSS custom properties for theming.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
