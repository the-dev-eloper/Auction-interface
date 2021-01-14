import React from 'react'
import { Link } from 'react-router-dom';

function PlayerComponent(props) {

    const { player } = props;

    return (

        <div key={player._id} className="card">

            <Link to={`/player/${player._id}`}>
                <img className="medium" src={player.image} alt="d1" />
            </Link>

            <div className="card-body">

                <Link to={`/player/${player._id}`}>
                    <h2>{player.name}</h2>
                </Link>
                
                <div className="profile">
                    <h2>{player.category}</h2>
                    <h3>{player.country}</h3>
                </div>

                <div className="price">
                    <h2>{player.basePrice} Crores</h2>
                </div>
            </div>
        </div>
    )
}

export default PlayerComponent