import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import CategoryDetails from "./pages/Categories/CategoryDetails";
import Categories from "./pages/Categories/Categories";
import AllProducts from "./pages/Products/AllProducts";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact us/Contact";
import TermsAndConditions from "./pages/TermsAndConditions.jsx/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import About from "./pages/About/About";
import { CartProvider } from "./Context/CartContext.jsx";
import ScrollToTop from "./components/Scroll/ScrollToTop.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/categories/:category",
          element: <CategoryDetails />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/termsconditins",
          element: <TermsAndConditions />,
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
