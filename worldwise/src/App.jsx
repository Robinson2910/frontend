import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./pages/ProtectedRoute";
import CityList from "./components/CityList";

import CountiesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// ✓ 348 modules transformed.
// dist/index.html                   0.45 kB │ gzip:   0.29 kB
// dist/assets/index-580fee20.css   31.94 kB │ gzip:   5.32 kB
// dist/assets/index-5a55c608.js   531.59 kB │ gzip: 150.06 kB

// inside lazy we need a callback function which call the dynamic import fn which is part of js
const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  // const x = 23;

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              {/* protected route is used in such a way that only when user is authenticated that routes will be accesible */}
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* when you want part of ui to be interactive with respect to particular url,then we go for nested routes */}
                {/* <Route index element={<CityList cities={cities} isLoading={isLoading} />} /> */}
                {/* instead of the above statement we redirect it to cities component */}
                {/* the index route is used to specify the default
              child route that should be rendered when the parent route (/app in this case) is
              accessed. */}
                <Route index element={<Navigate replace to="cities" />} />
                {/* If the user clicks the back button, they won't go back to /app because the /app entry
              was replaced with /app/cities. The browser history effectively "skips" the /app entry. Instead it goes to the previous page*/}
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                {/* In typical web development with frameworks like React Router, the route itself doesn't
          include query parameters. The route is generally used to define the structure of the URL
          and to capture dynamic parameters like id in the above route, often referred to as route parameters */}
                <Route path="countries" element={<CountiesList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="login" element={<Login />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;

//path prop is used to define the url

//we need to pass in the product component in element

// The code you provided appears to be written in JSX and is part of a React application.
// It's defining a routing structure using React Router, which is a popular library for handling routing and navigation in React applications.
//  Let's break down the code step by step:

// 1. `<BrowserRouter>`: This component is part of React Router and provides the basic routing functionality for your application.
// It should wrap your entire application to enable routing. It uses the HTML5 History API to create clean, client-side URLs.
// In other words, it helps manage the navigation history and the URL displayed in the browser's address bar.

// 2. `<Routes>`: This component is also part of React Router and is used to define the routing configuration for your application.
// Inside the `<Routes>` component, you specify the routes that your application should handle.

// 3. `<Route>`: Within the `<Routes>` component, you define individual routes using the `<Route>` component. A route represents a URL path and specifies what component to render when that path is matched.
// In your code, there's only one route defined.

//    - `path="product"`: This attribute defines the path for this route. It specifies that when the URL matches "/product,"
// the associated component should be rendered. For example, if the URL is "http://example.com/product," the `<Product />` component will be displayed.

//    - `element={<Product />}`: This part specifies the React component that should be rendered when the route matches. In this case, it's rendering the `<Product />` component when the "/product" path is matched.

// Here's a breakdown of what this code does:

// - When a user navigates to the "/product" URL, the `<Product />` component will be rendered in the application.
// This allows you to create a "product" page or view in your application that gets displayed when the corresponding URL is visited.

// - The `<BrowserRouter>` component is required for managing the routing and ensuring that the URL changes and navigations work correctly.

// - The `<Routes>` component defines the routing configuration for the entire application,
// and the `<Route>` component specifies individual route patterns and their associated components.

// In summary, this code sets up a basic routing structure in a React application using React Router,
// where the "product" URL path is mapped to the `<Product />` component for rendering. When the user visits "/product,"
// the content of the `<Product />` component will be displayed in the application.

//nested hooks

//we need nested routes when we want a part of the user interface to be controlled by part of url

//the default child route that is going to be matched

// if none of these other routes here matches.

/***************** */

//To use params with react router we do it in 3 steps

// step1:

// create a new route
// <Route path="cities/:id" element={<City />} />
//id is the name of the parameter
// step 2:

// we link to that route

// step 3:

// and now in the third step we can then

// read the data from the URL into this component.

// const { id } = useParams();

/******* */

//There is a second way of storing state in url

//that is using the query string
