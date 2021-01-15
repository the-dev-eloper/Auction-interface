import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data';

function PlayerScreen(props) {

    const player = data.players.find((x) => x._id == props.match.params.id);

    if (!player) {
        return <div> Player Not Found</div>;
    }

    return (

        <div>

            <Link to="/">Back to result</Link>

            <div className="row top">

                <div className="col-2">
                    <img className="large" src={player.image} alt={player.name}></img>
                </div>

                <div className="col-1">

                    <ul>
                        <li>
                            <h1>{player.name}</h1>
                        </li>
                        <li>
                            Nationality: {player.country}
                        </li>
                        <li>
                            Player Profile: {player.international}
                        </li>
                        <li>
                            International Ranking: {player.ranking}
                        </li>
                        <li>
                            Description: {player.description}
                        </li>
                    </ul>
                </div>

                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Base Price</div>
                                    <div className="price">{player.basePrice} Crores</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {player.soldTo === 'Yet to buy' ? (
                                            <span className="success">Available</span>
                                        ) : (
                                            <span className="danger">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerScreen