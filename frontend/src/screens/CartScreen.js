import React from 'react'

function CartScreen(props) {

    const playerId = props.match.params.id
    const playerSold = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    return (
        <div>
            <h2>Cart Screen</h2>

            <p>Add To Cart: {playerId}</p>
            <p>Qty: {playerSold}</p>
        </div>
    )
}

export default CartScreen