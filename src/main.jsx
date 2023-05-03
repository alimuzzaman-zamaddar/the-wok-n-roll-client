import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import ChefeDetails from "./components/ChefeDetails/ChefeDetails.jsx";
import Login from "./components/LogIn/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoutes from "./components/routes/PrivateRoutes.jsx";
import Banner from "./components/Banner/Banner.jsx";
import VisitUs from "./components/VisitUs/VisitUs";
import Routes from "./routes/Routes";
import Blogs from "./components/Blogs/Blogs";
import NewFoods from "./components/NewFoods/NewFoods";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Recipes></Recipes>,
      },
      {
        path: "/banner",
        element: <Banner></Banner> ,
      },
      {
        path: "/vistus",
        element: <VisitUs></VisitUs> ,
      },
      {
        path: "/newFoods",
        element: <NewFoods></NewFoods>
      },


    ],
  },
  {
    path:'/',
    element: <Routes></Routes>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/recipes/:id",
        element: <PrivateRoutes><ChefeDetails></ChefeDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://the-wok-n-roll-recipe-server-alimuzzaman-zamaddar.vercel.app/recipes/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
