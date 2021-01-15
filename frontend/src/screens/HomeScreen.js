import React, { useEffect } from 'react'

import PlayerComponent from '../components/PlayerComponent'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listPlayers } from '../actions/playerActions';
import { useDispatch, useSelector } from 'react-redux';

function HomeScreen() {

    const dispatch = useDispatch()
    const playerList = useSelector((state) => state.playerList)
    const { loading, error, players } = playerList;

    useEffect(() => {
        dispatch(listPlayers());
    }, [dispatch])

    return (
        <div>

            {
                loading ? (
                    <LoadingBox />
                ) : error ? (
                    <MessageBox variant="danger"> {error} </MessageBox>
                ) : (
                    <div className="row center">
                        {
                            players.map(player => (
                                <PlayerComponent key={player._id} player={player} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default HomeScreen
