import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Porto from "./Porto";
import NavbarComponent from "./NavbarComponent";
const Body = () => {
    return(
        <div className="relative w-full font-roboto">
        <NavbarComponent/>
        <Home />
        <About />
        <Porto />
        <Footer />
        </div>
    );
}
export default Body;