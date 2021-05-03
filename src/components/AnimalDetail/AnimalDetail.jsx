import React from 'react';
import {useParams} from 'react-router-dom';

function AnimalDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>Animal Info</h1>
            <p>Details for animal with id of {id}</p>
        </div>
    );
}

export default AnimalDetail;