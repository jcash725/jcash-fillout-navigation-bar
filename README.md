# JCash Fillout Navigation Bar

A modern, interactive navigation bar component built with React, TypeScript, and Tailwind CSS. Features drag-and-drop reordering, context menus, and persistent state management.

## 🚀 Features

- **Drag & Drop Reordering**: Intuitively reorder navigation tabs by dragging
- **Context Menu**: Right-click any tab to access actions (Rename, Duplicate, Delete)
- **Persistent State**: Tab order is automatically saved to localStorage
- **Add New Pages**: Insert new pages at any position
- **Active Tab Management**: Visual indication of active tabs
- **Responsive Design**: Works across different screen sizes
- **Custom Fonts**: Supports Inter and BL Melody fonts

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icons
- **localStorage** - State persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jcash-fillout-navigation-bar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Basic Navigation Bar
```jsx
import { NavigationBar } from './components/navigation-bar/NavigationBar'

function App() {
  return (
    <div>
      <NavigationBar />
    </div>
  )
}
```

### Customizing Default Pages
Edit `src/data/navigationData.ts` to modify the default navigation pages:

```typescript
export const defaultNavigationBarPages: NavItem[] = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' },
]
```

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

## 📁 Project Structure

```
src/
├── components/
│   └── navigation-bar/
│       ├── NavigationBar.tsx          # Main navigation component
│       ├── navigation-bar-item/
│       │   └── NavigationBarItem.tsx  # Individual tab component
│       ├── context-menu/
│       │   └── ContextMenu.tsx        # Right-click menu
│       └── add-page-button/
│           └── AddPageButton.tsx      # Add new page button
├── hooks/
│   └── useHorizontalDrag.ts          # Drag and drop logic
├── data/
│   └── navigationData.ts             # Default pages and storage logic
├── styles/
│   └── styles.css                    # Custom styles
└── index.css                         # Global styles and font imports
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### State Management

The navigation bar uses React's built-in state management with localStorage for persistence:
- Tab order is automatically saved when items are reordered
- Active tab state is maintained across sessions
- New pages are automatically saved

## 🎯 Key Components

### NavigationBar
Main container component that manages the overall state and layout.

### NavigationBarItem
Individual tab component with drag, click, and context menu functionality.

### ContextMenu
Right-click menu with actions for each tab.

### useHorizontalDrag
Custom hook that handles drag-and-drop reordering logic.

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
