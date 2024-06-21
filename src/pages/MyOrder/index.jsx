import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { Layout } from "../../Containers/Layout";
import { OrdersContext } from "../../Contexts/OrdersProvider";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {
  const { orders } = useContext(OrdersContext);
  const currentPath = window.location.pathname.split("/")[3];
  const order =
    currentPath === "last"
      ? orders?.[orders?.length - 1]?.products
      : orders?.[currentPath]?.products;

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link
          to='/React-Vite-Tailwind-Platzi/my-orders'
          className='absolute left-0'
        >
          <ChevronLeftIcon className='h-6 w-6 text-white cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col max-w-lg'>
        {!order && (
          <p className='text-white font-light'>
            <strong className='font-normal'>Here are no products</strong>
            <br />
            Try add a product to the cart.
          </p>
        )}
        {order &&
          order.map(({ id, title, image, price }) => (
            <OrderCard
              key={id}
              id={id}
              title={title}
              imageUrl={image}
              price={price}
            />
          ))}
      </div>
    </Layout>
  );
};

export { MyOrder };
