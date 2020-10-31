import React from 'react'
import { Lolly } from './Lolly'
import "../styles/Banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <Lolly top="#e97393" middle="#d23a62" bottom="#bb1161" />
            <Lolly top="#ed265b" middle="#f77249" bottom="#f5c64d" />
            <Lolly top="#97e665" middle="#8ccb4c" bottom="#a8d838" />
            <Lolly top="#feefd6" middle="#b65ae4" bottom="#c116c1" />
            <Lolly top="#cd2753" middle="#d5cfd1" bottom="#5ba3da" />
        </div>
    )
}

export default Banner
