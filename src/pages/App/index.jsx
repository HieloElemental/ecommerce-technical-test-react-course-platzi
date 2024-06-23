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
import { UserProvider } from "../../Contexts/UserProvider";
import { getUrl } from "../../utils/getUrl";

const AppRoutes = () => {
  return useRoutes([
    { path: getUrl("/"), element: <Home /> },
    { path: getUrl("/electronics"), element: <Home category='electronics' /> },
    { path: getUrl("/jewelery"), element: <Home category='jewelery' /> },
    {
      path: getUrl("/mens-clothing"),
      element: <Home category={`men's clothing`} />,
    },
    {
      path: getUrl("/womens-clothing"),
      element: <Home category={`women's clothing`} />,
    },
    { path: getUrl("/my-account"), element: <MyAccount /> },
    { path: getUrl("/my-orders"), element: <MyOrders /> },
    { path: getUrl("/my-orders/:id"), element: <MyOrder /> },
    { path: getUrl("/sign-in"), element: <SignIn /> },
    { path: getUrl("/sign-out"), element: <Login /> },
    { path: getUrl("/login"), element: <Login /> },
    { path: getUrl("/*"), element: <NotFound /> },
  ]);
};

const App = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
