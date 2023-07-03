import React from 'react';
import image from "./Image/Food.jpg";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Food = () => {
    let btn1 = {
        backgroundColor: "orangered",
        border: "3px solid orangered",
        marginRight: "10px",
        height: "70px",
        width: "200px",
        borderRadius: "100px",
        fontWeight: "bold",
        color: "white"
    }
    let btn2 = {
        marginLeft: "10px",
        border: "3px solid white",
        height: "70px",
        width: "200px",
        borderRadius: "100px",
        fontWeight: "bold",
        color: "white"
    }
    let Hstyle1 = {
        paddingTop: "100px",
        fontSize: 50
    }
    let Hstyle2 = {
        paddingTop: "20px",
        marginBottom: "70px",
        fontSize: 30
    }
    let downloadStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        color: "white",
        height: "500px",
        fontWeight: "bold"
    }
    let Download = {
        width: "1000px",
        height: "650px",
        marginLeft: "16%"
    }
    return (
        <Router>
            <div className="text-center" style={downloadStyle}>
                <div className="Download" style={Download}>
                    <h4 style={Hstyle1}>Download the app now.</h4>
                    <h1 style={Hstyle2}>Available on your favorite store. Start your premium experience now</h1>
                    <Link to="https://play.google.com/store/games" target='_blank'>
                        <button type="button" target="_blank" rel="noreferrer" className="btn btn-lg" 
                            style={btn1}>Playstore</button>
                    </Link>
                    <Link to="https://www.apple.com/ru/app-store/" target='_blank'>
                        <button type="button" target="_blank" rel="noreferrer" className="btn btn-lg" 
                            style={btn2}>App Store</button>
                    </Link>
                </div>
            </div>
        </Router>
    )
}

export default Food;