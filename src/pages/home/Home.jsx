import './home.scss'
import Hero from "../../components/hero/Hero";
import Cards from "../../components/card/Cards";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import {Link, useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";


export default function Home(){

    return(
        <>
            <Hero/>
            <div id="continents">
                <Cards heading="CONTINENTS"  >
                    <Card name="AFRICA" image="assets/c6.jpg"  />
                    <Card name="EUROPE" image="assets/c8.jpg"   />
                    <Card name="AMERICA" image="assets/c7.jpg" />
                    <Card name="AUSTRALIA" image="assets/c1.jpg" />
                    <Card name="ASIA" image="assets/c5.jpg" />
                </Cards>

            </div>

            <Footer/>

        </>


    )
}