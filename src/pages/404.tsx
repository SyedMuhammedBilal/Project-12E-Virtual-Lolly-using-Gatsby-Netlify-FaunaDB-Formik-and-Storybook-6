import React from "react"
import Header from "../components/Header"
import "../styles/Create.css"

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className='freeze'>
        <h1>Your lolly is freezing🧊</h1>
        <h1>Retry after 4-5 minutes🕗</h1>
      </div>
    </div>
  )
}

export default NotFound
