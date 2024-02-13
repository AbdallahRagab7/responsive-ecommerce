import React from "react";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/Home.jsx"
import ErrorPage from "./pages/Error.jsx"
import CartPage from './pages/Cart.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index : true , element: <HomePage /> },
      { path: 'cart', element: <CartPage/> },
      // { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
