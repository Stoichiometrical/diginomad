import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import "./countryhero.scss"
import axios from "axios";



export default function CountryInfo({ countryName }) {
        const [countryData, setCountryData] = useState(null);
        const[images,setImages] = useState(null)


        useEffect(() => {
            async function fetchData() {
                const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
                const data = await response.json();
                setCountryData(data[0]);
            }
            fetchData();
        }, [countryName]);

        if (!countryData) {
            return <p>Loading...</p>;
        }

    // useEffect(() => {
    //     axios.get('https://api.pexels.com/v1/search', {
    //         params: {
    //             query: countryName,
    //             per_page: 1,
    //             page: 1
    //         },
    //         headers: {
    //             Authorization: '563492ad6f91700001000001db00a30bd9924183ac7f6d51591cdc42'
    //         }
    //     })
    //         .then(response => setImages(response.data.photos))
    //         .catch(error => console.log(error));
    // }, []);


        // useEffect(()=>{async function getPhoto(){
        //         const photo = await fetch(`https://api.pexels.com/v1/search?query=${countryName}`, {headers: {
        //             Authorization: '563492ad6f91700001000001db00a30bd9924183ac7f6d51591cdc42'
        //         }})
        //         const res  = await photo.json()
        //         const photos =res.photos
        //         setImages(photos)
        //         console.log(photos)
        //
        //     }
        //     getPhoto()
        // },[])

    return (
        <>
            <div className="country-hero">
                <div className="country-hero-wrapper">
                    <Navbar/>
                    <div className="head">
                        <div className='country-name'>{countryData.name}</div>
                        <div className="capital">Capital City : {countryData.capital}</div>
                    </div>
                    <div className="info-sect">

                        <img src="https://images.pexels.com/photos/13408427/pexels-photo-13408427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Capital image' className="head-image"/>
                        {/*{ images.map(image => (*/}
                        {/*    <img key={image.id} src={image.src.medium} alt={image.photographer}  className="head-image"/>*/}
                        {/*))}*/}

                        <div className="facts">
                            <h1>{countryData.name}</h1>
                            <p>Capital: {countryData.capital}</p>
                            <p>Population: {countryData.population}</p>
                            <p>Co-ordinates: {countryData.latlng}</p>
                            <p>Currency: {countryData.currencies[0].name}</p>
                            <p>Languages: {countryData.languages.map(language => language.name).join(', ')}</p>
                            <p>Region: {countryData.subregion}</p>
                            Flag : <img src={countryData.flags.png} alt="Flag" style={{ width : 50, height : 40}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
    }


