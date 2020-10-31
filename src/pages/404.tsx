import React from "react"
import Header from "../components/Header"

const NotFound = () => {
  return (
    <div>
      <Header />
      <div style={{ color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "4rem", }}>
        <h1 style={{fontFamily: 'sans-serif'}}>Your lolly is freezing...</h1>
        <h1 style={{fontFamily: 'sans-serif'}}>Retry after 2-3 minutes😇</h1>
      </div>
    </div>
  )
}

export default NotFound
