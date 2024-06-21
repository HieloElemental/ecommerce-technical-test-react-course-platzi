import { useContext } from "react";

import { ProductDetailContext } from "../../Contexts/ProductDetailProvider";
import { SideMenu } from "../../Containers/SideMenu";

const ProductDetail = () => {
  const {
    isProductDetailOpen,
    onCloseProductDetail,
    selectedProduct: { image, title, price, description },
  } = useContext(ProductDetailContext);

  return (
    <SideMenu
      title={"Detail"}
      isOpen={isProductDetailOpen}
      onClose={onCloseProductDetail}
    >
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={image} alt={title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${price}</span>
        <span className='font-medium text-md'>{title}</span>
        <span className='font-light text-sm line-clamp-6' title={description}>
          {description}
        </span>
      </p>
    </SideMenu>
  );
};

export { ProductDetail };
