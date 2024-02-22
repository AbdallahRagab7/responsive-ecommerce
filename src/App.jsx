import React from "react";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/Home.jsx"
import ErrorPage from "./pages/Error.jsx"
import CartPage from './pages/Cart.jsx'
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from './pages/Payment.jsx'
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import About from "./pages/About.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index : true , element: <HomePage /> },
      { path: 'cart', element: <CartPage/> },
      { path: 'products', element: <ProductsPage/> },
      { path: '/product/:productId', element: <ProductDetailsPage /> },
      { path: '/payment', element: <Payment/> },
      { path: '/login', element: <Login/> },
      { path: '/register', element: <Register/> },
      { path: '/about', element: <About/> },
    ],
    
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
