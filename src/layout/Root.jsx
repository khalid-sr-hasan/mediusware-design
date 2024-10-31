import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import Footer from "../sheared/Footer";

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
