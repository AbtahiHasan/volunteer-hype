import Banner from "./Banner";
import Navbar from "./Navbar";
import banner from "/banner.png"
const Header = () => {
    return (
        <header>
            <section className="">
            <img className="absolute top-0 left-0 right-0 w-full object-cover" src={banner} alt="" />
            </section>

            <div className="before:content-[''] w-full  relative before:absolute before:bg-[#ffffffe5] before:top-0 before:right-0 before:left-0 before:bottom-0">

                <img className="w-full   object-cover" src={banner} alt="" />
            </div>

            <Navbar/>

            <Banner/>
        </header>
    );
};

export default Header;