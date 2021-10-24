import React from 'react';

const BeerList = (props) => {

    return(
        <div>
            <h1> Beer List </h1>
            {props.beers.map(beer => {
                return(
                    <div>
                        <h2> {beer.name} </h2>
                        <img src= {beer.image_url} alt= {`This is an image of beer with a name of ${beer.name}`} />
                        <h3> {beer.tagline} </h3>
                        <p> ABV: {beer.abv} </p>
                        <p> {beer.description} </p>
                        

                    </div>
                )    
            })}
        </div>
    )
}
export default BeerList;