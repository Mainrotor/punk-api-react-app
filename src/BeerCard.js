import React, {useState} from 'react';

function BeerCard (props) {
    const [isHidden, setHide] = useState(false);


 if (isHidden) {
    return (
        <li>
            <header>
                <div>
                    <h2>{props.name}</h2>
                </div>
                <img onClick={() => {setHide(false)}} src="https://img.icons8.com/material-rounded/24/fa314a/like--v1.png" alt="unliked beer"/>
            </header>
            
            <br/>
            <br/>
            {props.desc}
            <br/>
            <br/>
            <img src={props.img} id="beerIMG"></img>
        </li>
    ) 
 }
        
    else {
        return (
            <li>
                <header>
                    <div>
                        <h2>{props.name}</h2>
                    </div>
                        <img onClick={() => {setHide(true)}} src="https://img.icons8.com/material-outlined/24/fa314a/like--v1.png" alt="liked beer"/>
                </header>
                
                <br/>
                <br/>
                {props.desc}
                <br/>
                <br/>
                <img src={props.img} id="beerIMG"></img>
            </li>
        )
    }

}

export default BeerCard