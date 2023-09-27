import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product = { product } className="bg-dark">
          <ProductCard.Image className = 'custom-image' />
          <ProductCard.Title className='text-bold text-white' style={ {textTransform: 'uppercase'} } />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product = { product }
           className="bg-dark"
        >
          <ProductImage className = 'custom-image' />
          <ProductTitle title={ 'caffe '} className = 'text-white' />
          <ProductButtons className = 'custom-buttons' />
        </ProductCard>

        <ProductCard product = { product }
          style={{
            backgroundColor: '#70D1f8',
          }}
        >
          <ProductImage />
          <ProductTitle title={ 'caffe '} />
          <ProductButtons />
        </ProductCard>
    
      </div>
    </div>
  )
}