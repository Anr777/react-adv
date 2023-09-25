
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, Props } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

// interface ProductButtonsProps {
//   counter: number;
//   increaseBy: ( value: number ) => void;
// }

export const ProductCard = ({ children ,product }: Props) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value = {
      {
        counter,
        increaseBy,
        product
      } 
    }>
      <div className={ styles.productCard }>
        {/* <ProductImage img={ product.img } />
        
        <ProductTitle title={ product.title } />
        <ProductButtons counter = { counter } increaseBy={ increaseBy } /> */}
        { children }
      </div>
    </Provider>
  )
}


