import ContinentHero from "../../components/continentHero/ContinentHero";
import Footer from "../../components/footer/Footer";
import Cards from "../../components/card/Cards";
import Compare from "../../components/compare/Compare";
import Card from "../../components/card/Card";

export default function Continent() {

    return(
        <>
            <div className='continent'>
                <div className="continent-wrapper">
                    <ContinentHero/>
                    <Cards heading="AFRICAS'S TOP TENS">
                        <Card name="TOP 10 CHEAPEST CITIES" image="assets/c4.jpg"/>
                        <Card name="TOP 10 BEST ATTRACTIONS" image="assets/c5.jpg"/>
                        <Card name="TOP 10  MOST EXPENSIVE CITIES" image="assets/c6.jpg"/>
                        <Card name="TOP 10  HIGH INCOME COUNTRIES" image="assets/c7.jpg"/>
                        <Card name="TOP 10  LOW INCOME COUNTRIES" image="assets/c8.jpg"/>
                    </Cards>
                    <Compare/>
                    <Footer/>



                </div>

            </div>
        </>
    )
}