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
import { ProtectedRoute } from "../../Components/ProtectedRoute/index";

const AppRoutes = () => {
  return useRoutes([
    {
      path: getUrl("/"),
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/electronics"),
      element: (
        <ProtectedRoute>
          <Home category='electronics' />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/jewelery"),
      element: (
        <ProtectedRoute>
          <Home category='jewelery' />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/mens-clothing"),
      element: (
        <ProtectedRoute>
          <Home category={`men's clothing`} />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/womens-clothing"),
      element: (
        <ProtectedRoute>
          <Home category={`women's clothing`} />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/my-account"),
      element: (
        <ProtectedRoute>
          <MyAccount />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/my-orders"),
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ),
    },
    {
      path: getUrl("/my-orders/:id"),
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ),
    },
    { path: getUrl("/sign-in"), element: <SignIn /> },
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
