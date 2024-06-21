import { useContext } from "react";

import { Layout } from "../../Containers/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { OrdersContext } from "../../Contexts/OrdersProvider";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { orders } = useContext(OrdersContext);

  return (
    <Layout>
      <h1 className='font-medium text-2xl mb-4'>My Orders</h1>

      {orders.map(({ totalPrice, totalProducts, date }, index) => {
        return (
          <Link
            to={`/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/my-orders/${index}`}
            key={`${date}${index}`}
          >
            <OrdersCard
              totalPrice={totalPrice}
              totalProducts={totalProducts}
              date={date}
            />
          </Link>
        );
      })}
    </Layout>
  );
};

export { MyOrders };
