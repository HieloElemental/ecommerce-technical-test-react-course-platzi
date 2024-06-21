import { useRoutes, BrowserRouter } from "react-router-dom";

import { ShoppingCartProvider } from "../../Contexts/ShoppingCartProvider";
import { ProductDetailProvider } from "../../Contexts/ProductDetailProvider";
import { OrdersProvider } from "../../Contexts/OrdersProvider";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutMenu } from "../../Components/CheckoutMenu";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { NavBar } from "../../Components/NavBar";
import { Layout } from "../../Containers/Layout";

import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    { path: "/React-Vite-Tailwind-Platzi/", element: <Home /> },
    {
      path: "/React-Vite-Tailwind-Platzi/electronics",
      element: <Home category='electronics' />,
    },
    {
      path: "/React-Vite-Tailwind-Platzi/jewelery",
      element: <Home category='jewelery' />,
    },
    {
      path: "/React-Vite-Tailwind-Platzi/mens-clothing",
      element: <Home category={`men's clothing`} />,
    },
    {
      path: "/React-Vite-Tailwind-Platzi/womens-clothing",
      element: <Home category={`women's clothing`} />,
    },
    { path: "/React-Vite-Tailwind-Platzi/my-account", element: <MyAccount /> },
    { path: "/React-Vite-Tailwind-Platzi/my-orders", element: <MyOrders /> },
    { path: "/React-Vite-Tailwind-Platzi/my-orders/:id", element: <MyOrder /> },
    { path: "/React-Vite-Tailwind-Platzi/sign-in", element: <SignIn /> },
    { path: "/React-Vite-Tailwind-Platzi/*", element: <NotFound /> },
  ]);
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <ProductDetailProvider>
        <OrdersProvider>
          <BrowserRouter>
            <NavBar />
            <ProductDetail />
            <CheckoutMenu />
            <Layout>
              <AppRoutes />
            </Layout>
          </BrowserRouter>
        </OrdersProvider>
      </ProductDetailProvider>
    </ShoppingCartProvider>
  );
};

export default App;
