
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import React, { ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

// interface ProductButtonsProps {
//   counter: number;
//   increaseBy: ( value: number ) => void;
// }

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children ,product, className, style }: Props) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value = {
      {
        counter,
        increaseBy,
        product
      } 
    }>
      <div className={ `${styles.productCard} ${ className }` }
        style = { style }
      >
        {/* <ProductImage img={ product.img } />
        
        <ProductTitle title={ product.title } />
        <ProductButtons counter = { counter } increaseBy={ increaseBy } /> */}
        { children }
      </div>
    </Provider>
  )
}


