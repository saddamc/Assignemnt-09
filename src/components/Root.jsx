import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;