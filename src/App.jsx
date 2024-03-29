import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import "./styles/main.scss";
import NotFound from "./pages/NotFound/NotFound";

import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CartContextProvider from "./context/CartContext/CardContextProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="Men/:id" element={<Product />} />
        <Route path="Men" element={<ShopCategory />} />

        <Route path="Women/:id" element={<Product />} />
        <Route path="Women" element={<ShopCategory />} />

        <Route path="Kids/:id" element={<Product />} />
        <Route path="kids" element={<ShopCategory />} />

        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* <Route
          path=":category"
          element={<ShopCategory />}
          errorElement={<NotFound />}
        >
          <Route path=":id" element={<Product />} />
        </Route> */}
        {/* <Route path=":products" />
        <Route path=":products/:id" /> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </>
  );
}

export default App;
