import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./col.scss"
import React, {useEffect} from "react";
import {useState} from "react";




const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
        'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
};



export default function CoLChart({country}) {
    const[foodprices,setFoodPrices] = useState(0)
    const[rentals,setRentals] = useState(0)
    const[utilities,setUtilities] = useState(0)
    const[transport,setTransport] = useState(0)
    const[clothing,setClothing] = useState(0)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    };
    const data = [
        { name: 'Accomodation', cost: rentals },
        { name: 'Transportation', cost: transport },
        { name: 'Food',  cost: foodprices},
        { name: 'Utilities',cost: utilities },
        { name: 'Clothing',cost: clothing },


    ];



    useEffect(()=>{
        async function fetchPrices(){
            let responses = await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country}`, options)
            let data = await responses.json()
            // console.log(data["prices"])
            let p = data["prices"]

            let food = await p.filter( function(prices){return prices.category_name === "Markets"} )
            let sum = 0;
            for (let i = 0; i < food.length; i++) {
                sum += Number(food[i]["usd"]["avg"])
            }

            let rentals = data["prices"][0]["usd"]["avg"]
            let clothing = Number(data["prices"][3]["usd"]["avg"]) + Number(data["prices"][4]["usd"]["avg"]) + Number(data["prices"][5]["usd"]["avg"])
            let utilities =  Number(data["prices"][46]["usd"]["avg"])  + Number(data["prices"][47]["usd"]["avg"]) + Number(data["prices"][48]["usd"]["avg"])
            let transport = data["prices"][44]["usd"]["avg"] * 60
            setRentals(rentals)
            setClothing(clothing)
            setTransport(transport)
            setUtilities(utilities)
            setFoodPrices(sum)
        }
        fetchPrices()

    },[])
    return (
        <>
            <div className="col">
                <div className="col-wrapper">
                    <div className="head">COST OF LIVING</div>
                    <BarChart
                        className="bar"
                        width={800}
                        height={410}
                        data={data}
                        margin={{ top: 40, right: 30 , left: 20, bottom: 15 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" label={{  value: 'Expenses', position: 'bottom', fontWeight : 'bold' , offset : 0}}  />
                        <YAxis  label={{  value: 'Cost in USD', angle :-90 , position: 'insideLeft' , fontWeight : 'bold'}} />
                        <Tooltip />
                        <Bar dataKey="cost" fill="#48ACF0" />
                    </BarChart>

                </div>
            </div>

        </>

    );
}


