import React from "react"
import Banner from "../components/Banner"
import { Button } from "../components/Button"
import Header from "../components/Header"
import { navigate } from "@reach/router"
import "../styles/Home.css"

export default function Home() {
  return <div className="home">
    <Header />
    <Banner />
    <Button label="Make a new lolly to send to a friend" onClickFunc={() => navigate("/create")} />
  </div>
}
