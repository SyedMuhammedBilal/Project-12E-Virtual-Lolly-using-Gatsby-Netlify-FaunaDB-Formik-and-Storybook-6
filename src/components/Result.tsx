import React from 'react'
import "../styles/Result.css"

export interface ResultProps {
    link: string; rec: string; msg: string; sender: string;
};
const Result: React.FC<ResultProps> = ({
    link,
    rec,
    msg,
    sender }) => {
    return (
        <div className="result">
            <h4>Share lolly with this link:</h4>
            <h3>{`https://awesome-bassi-0b88fb.netlify.app/lolly/${link}`}</h3>
            <div className="data">
                <p className="rec">{rec}</p>
                <p style={{fontStyle: 'normal', fontFamily: "sans-serif", letterSpacing: "1px"}}>{msg}</p>
                <p className="sender">— {sender}</p>
            </div>
        </div>
    )
}
export default Result