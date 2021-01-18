import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsPlayer } from '../actions/playerActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function PlayerScreen(props) {

    const dispatch = useDispatch();
    const playerId = props.match.params.id;
    const playerDetails = useSelector((state) => state.playerDetails);
    const { loading, error, player } = playerDetails;

    const [ sellPrice, setSellPrice ] = useState()
    const [ soldTo, setSoldTo ] = useState(['CSK', 'DC', 'MI', 'RCB'])

    useEffect(() => {
        dispatch(detailsPlayer(playerId));
    }, [dispatch, playerId]);

    const bidToCartHandler = () => {
        props.history.push(`/cart/${playerId}?qty=${sellPrice}`)
    }

    return (

        <div>

            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox variant="danger"> {error} </MessageBox>
            ) : (

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
                                                    <span className="danger">UnAvailable</span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Sold To</div>
                                            <div>
                                                {player.soldTo === 'Yet to buy' ? (
                                                    <select
                                                        value={soldTo}
                                                        onChange={(e) => setSoldTo(e.target.value)}
                                                    >
                                                        {
                                                            soldTo.map((team, index) => (
                                                                <option key={index} value={team}>{team}</option>
                                                            ))
                                                            // for (i = 0; i < soldTo.length; i++) {
                                                            //     <option value={soldTo[i]}></option>
                                                            // }

                                                            // soldTo.map(item => <option
                                                            //     key={item.id}
                                                            //     value={soldTo[item.value]}
                                                            // >
                                                            //     {soldTo[item.name]}
                                                            // </option>)                                        

                                                            // [...Array(soldTo)].map(
                                                            //     (x) => (
                                                            //         <option key={x} value={soldTo[x]}>
                                                            //             {soldTo[x]}
                                                            //         </option>
                                                            //     ))
                                                        }
                                                                {/* <option>CSK</option>
                                                                    <option>RCB</option>
                                                                <option>MI</option> */}
                                                            {/* } */}
                                                        </select>
                                                    
                                                ) : (
                                                    <span className="success">{player.soldTo}</span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    {player.soldTo === 'Yet to buy' ? (
                                        <>
                                            <li>
                                                <div className="row">
                                                    <div>Auctioned Price</div>
                                                    <div>
                                                        <input
                                                            type="number"
                                                            placeholder="in Crores"
                                                            value={sellPrice}
                                                            onChange={(e) => setSellPrice(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={bidToCartHandler}
                                                    className="primary block"
                                                >
                                                    Add to Cart
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <div className="row">
                                                    <div>Auctioned Price</div>
                                                    <div>
                                                        <h2>{player.sellPrice} Crores</h2>
                                                    </div>
                                                </div>
                                            </li>
                                        </>    
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
 
            )}
        </div>
    );
}

export default PlayerScreen