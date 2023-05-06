import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Error,
  ProtectedRoute,
  SharedLayout,
  Cart,
  Home,
  About,
  ProductsPage,
  SingleProduct,
} from "./pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "./features/products/productsSlice";
import { calculateTotals } from "./features/cart/cartSlice";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AlertToast from "./components/Alert";

function App() {
  const { cart } = useSelector((state) => state.cart);
  const { alert,alertText,alertType } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route exact path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      {alert && <AlertToast alertText={alertText} alertType={alertType}/>}
    </BrowserRouter>
  );
}

export default App;
