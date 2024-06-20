import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductPage, {fetchProducts, fetchProductsCategory} from './pages/productPage.tsx';
import CartPage from './pages/CartPage.tsx';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './reducers/reducers.ts';
import Checkout from './pages/Checkout.tsx';
const store = createStore(rootReducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: fetchProducts,
        element: <ProductPage/>
      },
      {
        path: "products/:category",
        loader: fetchProductsCategory,
        element: <ProductPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

)

export { store };