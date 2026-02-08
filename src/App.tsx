import { useState } from 'react'
import ProductCard from './components/ProductCard'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

const App: React.FC = () => {
  const [cart, setCart] = useState<number>(0)

  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      image: 'https://via.placeholder.com/300x200?text=Headphones',
      description: 'High-quality sound with active noise cancellation and 30-hour battery life.'
    },
    {
      id: 2,
      name: 'Ultra HD 4K Webcam',
      price: 89.99,
      image: 'https://via.placeholder.com/300x200?text=Webcam',
      description: 'Crystal clear 4K video recording perfect for streaming and video calls.'
    },
    {
      id: 3,
      name: 'Ergonomic Mechanical Keyboard',
      price: 149.99,
      image: 'https://via.placeholder.com/300x200?text=Keyboard',
      description: 'Premium mechanical switches with customizable RGB backlighting.'
    }
  ]

  const handleAddToCart = () => {
    setCart(cart + 1)
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>Product Store</h1>
        <div className="cart-badge">Cart: {cart} items</div>
      </header>

      <main className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Product Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
