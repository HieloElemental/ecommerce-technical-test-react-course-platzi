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
import { Login } from "../Login";
import { NavBar } from "../../Components/NavBar";
import { Layout } from "../../Containers/Layout";

import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/",
      element: <Home />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/electronics",
      element: <Home category='electronics' />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/jewelery",
      element: <Home category='jewelery' />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/mens-clothing",
      element: <Home category={`men's clothing`} />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/womens-clothing",
      element: <Home category={`women's clothing`} />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/my-account",
      element: <MyAccount />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/sign-in",
      element: <SignIn />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/sign-out",
      element: <Login />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/login",
      element: <Login />,
    },
    {
      path: "/Prueba-Tecnica-E-commerce-Profesional-React-Platzi/*",
      element: <NotFound />,
    },
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
