# Product Page

A modern React + TypeScript product listing application built with Vite.

## Features

- 🎨 Modern, responsive UI with gradient design
- ⚛️ Built with React 18 and TypeScript
- ⚡ Vite for fast development and builds
- 🛒 Shopping cart counter
- 📱 Mobile-responsive layout
- 🎯 Sample products with Add to Cart functionality

## Project Structure

```
product-page/
├── src/
│   ├── components/
│   │   └── ProductCard.tsx    # Reusable product card component
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── styles.css             # Global styles
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone/Open the project:**
   ```zsh
   cd /Users/mac/Desktop/work/product-page
   ```

2. **Install dependencies:**
   ```zsh
   npm install
   ```

### Running the Development Server

Start the development server:

```zsh
npm run dev
```

The app will automatically open at `http://localhost:5173` in your default browser.

### Building for Production

Create an optimized production build:

```zsh
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```zsh
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm start` - Alias for `npm run dev`

## Technologies Used

- **React** 18.2.0 - UI library
- **TypeScript** 5.3.0 - Type-safe JavaScript
- **Vite** 5.0.0 - Build tool and dev server
- **CSS3** - Styling with flexbox and grid

## Sample Products

The app includes 3 sample products:

1. **Premium Wireless Headphones** - $199.99
2. **Ultra HD 4K Webcam** - $89.99
3. **Ergonomic Mechanical Keyboard** - $149.99

Each product has an image placeholder, description, price, and "Add to Cart" button.

## Features Implementation

- **ProductCard Component**: Reusable component that displays individual product information
- **Cart Counter**: Current cart item count displayed in the header
- **Responsive Design**: Mobile-first design that adapts to different screen sizes
- **TypeScript Types**: Fully typed components and interfaces

## Customization

### Adding New Products

Edit `src/App.tsx` and add items to the `products` array:

```typescript
const products: Product[] = [
  {
    id: 4,
    name: 'New Product',
    price: 99.99,
    image: 'image-url',
    description: 'Product description'
  },
  // ... more products
]
```

### Styling

Global styles are in `src/styles.css`. Modify colors, spacing, and layout as needed.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers

## License

MIT

## Author

Created with React + TypeScript and Vite
