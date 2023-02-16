import Home from "./pages/home/Home";
import Continent from "./pages/continent/Continent";
import Country from "./pages/country/Country";
import About from "./pages/about/About";
import { BrowserRouter , Routes , Route } from "react-router-dom"


export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="" element={<Home/>}/>
                    <Route  path="/home" element={<Home/>}/>
                    <Route path="/continent" element={<Continent/>}/>
                    <Route path="/country" element={<Country/>}/>/>
                    <Route path="/about" element={<About/>}/>

                </Routes>
            </BrowserRouter>
        </>

    )
}