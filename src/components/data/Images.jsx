import React from 'react'
import pokeball from "../../img/pokeball.png"


export default function Images({src = "", state}) {


    if(src === "pokeball"){
        return(
            <img className="imgcontainer__sprite--pokeball" src={pokeball} alt=""></img>
        );
    }
    else{
        if(state !== false){
            return(<img className="imgcontainer__sprite--pokemon jump" src={src} alt=""></img>)
        }
        else {
            return (
                <img className="imgcontainer__sprite--pokemon" src={src} alt=""></img>
            );
        }
    }
}


