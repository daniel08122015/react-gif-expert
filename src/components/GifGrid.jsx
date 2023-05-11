import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifts";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({category}) => {

    
const { images, isLoading }  = useFetchGifts(category);


//console.log({images, isLoading});
// const [counter, setCounter] = useState(10);


    return (
        <>
        <h3>{category}</h3>

        {
            isLoading && (<h3>Cargando...</h3>)
        }

        {/* <p>{ counter }</p>
        <button onClick={()=> setCounter(counter+1)}>click</button> */}
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem 
                    key={image.id}
                    {...image}/>
                    )
                )
            }

        </div>
        </>
    )
}