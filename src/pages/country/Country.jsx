import "./country.scss"
import CountryHero from "../../components/countryhero/CountryHero";
import Footer from "../../components/footer/Footer";
import Compare from "../../components/compare/Compare";
import CoLChart from "../../components/colChart/CoLChart";
import CountryInfo from "../../components/countryhero/Mapping";
import {useLocation} from "react-router-dom";

export  default function Country(){
    const location = useLocation();
    const change = location.state.change;

    return(

        <>
            <CountryInfo countryName={change}/>
            <CoLChart country={change}/>
            <Compare/>
            <Footer/>

        </>
    )
}