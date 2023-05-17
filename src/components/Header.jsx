import Navbar from "./Navbar";
import banner from "/banner.png"
const Header = () => {
    return (
        <header>
            <section className="">
            <img className="absolute top-0 left-0 right-0" src={banner} alt="" />
            </section>

            <Navbar/>
        </header>
    );
};

export default Header;