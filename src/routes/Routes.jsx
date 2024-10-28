import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
        ],
    },
]);

export default router;
