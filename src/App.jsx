import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Distributor from "./pages/Distributor";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import './App.css'

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={ <RootLayout /> } errorElement={ <Error /> } >
			<Route index element={ <Home /> } />
			<Route path="about" element={ <About /> } />
			<Route path="services" element={ <Services /> } />
			<Route path="contact" element={ <Contact /> } />
			<Route path="distributor" element={ <Distributor /> } />
			<Route path="products" element={ <Products /> } />
			<Route path="*" element={ <NotFound /> } />
		</Route>
	));

    return (
        <RouterProvider router={router} />
    );
}

export default App
