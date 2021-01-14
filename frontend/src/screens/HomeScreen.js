import React from 'react'
import PlayerComponent from '../components/PlayerComponent'
import data from '../data'

function HomeScreen() {

    return (
        <div className="row center">

            {
                data.players.map(player => (
                    <PlayerComponent key={player._id} player={player} />
                ))
            }
        </div>
    )
}

export default HomeScreen
