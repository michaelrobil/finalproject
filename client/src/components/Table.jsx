import React, { useContext } from 'react';
import ProductContext from '../utils/ProductContext';
import Wrapper from '../components/Wrapper';
import TableHead from './TableHead'
import Button from './Button';
import Th from './Th';
import Image from './Image';



function Table() {
  const { productState, inputRef, addToCart } = useContext(ProductContext);

  return (
    <Wrapper>
      <table className="table table-info table-bordered">
        <TableHead />
        <tbody>
          {productState.slice(1, 12).map(function (o) {
            return <tr key={o.sku}>
              <Th key={o.sku + 1}>{o.name}</Th>
              <Th key={o.sku + 2}>{o.price}</Th>
              <Th key={o.sku + 3}><Image src={o.image || "https://www.bvfd.com/wp-content/uploads/2015/12/placeholder.jpg"} alt={o.name} /></Th>
              <Th>
                <Button  key={o.sku + 4} ref={inputRef} type="submit" onClick={() => addToCart(o.sku)}>Add To Cart</Button>
              </Th>
            </tr>;
          })
          }
        </tbody>
      </table>
    </Wrapper>
  );
}

export default Table;