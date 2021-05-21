// import Hero from "./Hero";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        {/* <Hero /> */}
        <main>{children}</main>
        </>
    );
}

export default Layout;