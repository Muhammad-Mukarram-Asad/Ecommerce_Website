import React, {useContext} from 'react'
import Navbar from '../../components/navigation'
import { ShopContext } from '../../components/contextAPI/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../../components/breadcrum';
import ProductDisplay from '../../components/productDisplay';
import DescriptionBox from '../../components/productDescription';
import RelatedProducts from '../../components/relatedProducts';

const ProductPage = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const productDetails = all_products.find((e) => e.id === Number(productId));
  console.log("productDetails.id --> ", productDetails.id);
  let selectedCategory = "";
  if(productDetails.id < 13)
  {
    selectedCategory = "women";
  }
  else if(productDetails.id >=13 && productDetails.id < 25)
  {
    selectedCategory = "men";
  }

  else{
    selectedCategory = "kid";
  }
  return (
    <div>
      <Navbar />
      <Breadcrum product={productDetails} />
      <ProductDisplay product={productDetails} />
      <DescriptionBox />
      <RelatedProducts category={selectedCategory} />
    </div>
  )
}

export default ProductPage