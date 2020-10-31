import React from 'react'
import Header from '../components/Header'
import { Lolly } from '../components/Lolly'
import Result from '../components/Result'

const Template = ({ pageContext: { top, middle, bottom, rec, sender, msg, link } }) => {

    return (
        <div>
            <Header />
            <div className="lollyFormDiv">

                <div>
                    <Lolly top={top} middle={middle} bottom={bottom} />
                </div>

                <Result link={link} rec={rec} sender={sender} msg={msg} />
            </div>
        </div>
    )
}

export default Template
