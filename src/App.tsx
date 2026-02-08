import { useState } from 'react'
import ProductCard from './components/ProductCard'
import logo from './assets/logo.png'
import choco from './assets/choco.png'
import coconut from './assets/coconut.png'
import mango from './assets/mango.png'
import matcha from './assets/matcha.png'
import strabary from './assets/starabry.png'



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
      image: choco,
      description: 'High-quality sound with active noise cancellation and 30-hour battery life.'
    },
    {
      id: 2,
      name: 'Ultra HD 4K Webcam',
      price: 89.99,
      image: coconut,
      description: 'Crystal clear 4K video recording perfect for streaming and video calls.'
    },
    {
      id: 3,
      name: 'Ergonomic Mechanical Keyboard',
      price: 149.99,
      image: matcha,
      description: 'Premium mechanical switches with customizable RGB backlighting.'
    }
    ,
    {
      id: 4,
      name: 'Ergonomic Mechanical Keyboard',
      price: 149.99,
      image: strabary,
      description: 'Premium mechanical switches with customizable RGB backlighting.'
    }
    ,
    {
      id: 5,
      name: 'Ergonomic Mechanical Keyboard',
      price: 149.99,
      image: mango,
      description: 'Premium mechanical switches with customizable RGB backlighting.'
    }
  ]
 const menuItems = ['Home', 'Products', 'About', 'Contact']
  const handleAddToCart = () => {
    setCart(cart + 1)
  }

  return (
    <div className="app-container">
      <header className="header">
       
        <img src={logo} alt="Logo" />
         <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item}
            </li>
          ))}

        </ul>
        <div className="cart-badge">Cart: {cart} items</div>
      </header>
      <div className="ovraly"></div>
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
