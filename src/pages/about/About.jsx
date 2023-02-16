import "./about.scss"
import AboutUsHero from "../../components/aboutHero/AboutUsHero";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";

export default function About() {

    return(
        <>
            <div className="about">
                <div className="about-container">
                    <AboutUsHero/>
                    <Team/>
                    <Footer/>
                </div>

            </div>
        </>
    )
}