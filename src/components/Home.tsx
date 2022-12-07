import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Tic-Tac-Toe</h1>
       <Link to='/tictac' > click to play </Link>

    </div>
  )
}

export default Home