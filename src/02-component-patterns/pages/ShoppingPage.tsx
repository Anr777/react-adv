import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
// import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {
  
  const { shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

      {
        products.map( product => (
          <ProductCard key={ product.id } product = { product }
            className="bg-dark"
            onChange = { onProductCountChange }
            value = { shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage className = 'custom-image' />
            <ProductTitle className = 'text-white' />
            <ProductButtons className = 'custom-buttons' />
          </ProductCard>
        ))
      }
      </div>
      <div className='shopping-cart'>
        {
          Object.entries(shoppingCart).map( ([key, product]) => (  
            <ProductCard product = { product }
              key = { key }
              className="bg-dark"
              style={{
                width: '100px'
              }}
              onChange={ onProductCountChange }
              value={ product.count }
            >
              <>
                <ProductImage className = 'custom-image' />
                {/* <ProductTitle title={ `${product.count}` } /> */}
                <ProductButtons className = 'custom-buttons' style={{
                  display: 'flex',
                  justifyContent: 'center'
                }} /> 
                
              </>
            </ProductCard>
          ) )
        }
      </div>
    </div>
  )
}