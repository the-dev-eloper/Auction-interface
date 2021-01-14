import React from 'react'

function PlayerComponent(props) {

    const { player } = props;

    return (

        <div key={player._id} className="card">

            <a href="/player">
                <img className="medium" src={player.image} alt="d1" />
            </a>

            <div className="card-body">

                <a href="/player">
                    <h2>{player.name}</h2>
                </a>

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