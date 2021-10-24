import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = (props) => {

    const { id } = useParams();

    const foundProfile = props.beers.find(beer => {
        return beer.name === id;
    })

    return(
        <div>
            <h2>Beer Profile Page</h2>
            <h3>{foundProfile.name}</h3>
            <p>{foundProfile.description}</p>
         </div>
    )
}
export default Profile;