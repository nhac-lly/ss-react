# Arobid 3D Virtual Tour with React

A modern 3D virtual tour application combining Shapespark's WebGL-based walkthrough engine with React components for enhanced user interaction.

## Features

- 🏢 **Interactive 3D Walkthrough**: Navigate through realistic 3D environments
- ⚛️ **React Integration**: Modern UI components for enhanced user experience
- 📱 **Mobile Responsive**: Optimized for both desktop and mobile devices
- 🎮 **Advanced Controls**: Audio toggle, fullscreen, screenshot capabilities
- 💫 **Modern UI**: Beautiful, animated interface components
- 🚀 **Fast Development**: Hot-reload development server with Vite

## Tech Stack

- **3D Engine**: Shapespark WebGL
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (backdrop-filter, CSS Grid, Flexbox)

## Project Structure

```
arobid_booth_mobile/
├── src/
│   ├── components/
│   │   ├── InfoPanel.jsx        # Tour information modal
│   │   ├── InfoPanel.css
│   │   ├── TourControls.jsx     # Interactive control buttons
│   │   └── TourControls.css
│   ├── App.jsx                  # Main React application
│   ├── App.css
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── 2025-07-30-14-04-55/        # 3D tour assets
├── index.html                   # Main HTML file
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Features Overview

### React Components

#### InfoPanel

- **Purpose**: Displays welcome information and tour instructions
- **Features**:
  - Animated modal with gradient header
  - Control instructions for different devices
  - Feature highlights
  - Mobile-responsive design

#### TourControls

- **Purpose**: Provides additional control buttons for the 3D tour
- **Features**:
  - Audio toggle
  - View reset
  - Fullscreen toggle
  - Screenshot capture
  - Tooltip on hover
  - Mobile-optimized layout

#### App

- **Purpose**: Main application wrapper that coordinates React and 3D tour
- **Features**:
  - Detects when 3D engine is loaded
  - Status indicator
  - Responsive overlay system

### Integration with Shapespark

The React components are designed to work alongside the existing Shapespark 3D tour:

- **Non-intrusive**: Uses overlay positioning to avoid interfering with 3D canvas
- **API Integration**: Hooks into WALK engine APIs for advanced functionality
- **Event Coordination**: Listens for 3D engine events and updates React state accordingly

## Development

### File Structure

- `src/`: All React source code
- `src/components/`: Reusable React components
- `2025-07-30-14-04-55/`: Static 3D tour assets (don't modify)

### Styling Approach

- CSS variables for consistent theming
- Component-specific CSS files
- Mobile-first responsive design
- Modern CSS features (backdrop-filter, CSS Grid)

### Adding New Features

1. Create new components in `src/components/`
2. Import and use them in `App.jsx`
3. Add any needed CSS files
4. Use `window.WALK` to integrate with the 3D engine

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

### Development Server Issues

- Make sure port 3000 is available
- Try `npm run dev -- --port 3001` to use a different port

### 3D Tour Not Loading

- Check browser console for WebGL errors
- Ensure all files in `2025-07-30-14-04-55/` directory are present
- Verify browser supports WebGL

### React Components Not Appearing

- Check that `#react-root` element exists in HTML
- Verify React scripts are loaded
- Check browser console for JavaScript errors

## License

This project combines:

- Custom React components (your implementation)
- Shapespark 3D tour engine (separate license)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Note**: This project enhances an existing Shapespark 3D tour with React components. The core 3D functionality remains unchanged, while React provides modern UI enhancements.
