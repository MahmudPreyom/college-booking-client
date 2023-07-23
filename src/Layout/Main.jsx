import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navber/NavBer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;