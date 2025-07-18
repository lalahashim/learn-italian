import Footer from "../Footer";
import NavHero from "./NavHero";
import Overview from "./Overview";
import Roadmap from "./Roadmap";

export default function Home(){
    return (
        <>
            <NavHero />
            <Overview />
            <Roadmap />
            <Footer />
        </>
    )
}