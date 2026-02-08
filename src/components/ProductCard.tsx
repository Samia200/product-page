import React from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <div className="imgcircle"></div>
         <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      </div>
     
      <div className="product-content">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <button
            className="add-to-cart-btn"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
