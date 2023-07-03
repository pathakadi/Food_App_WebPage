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
    paddingTop: "70px",
    marginBottom: "5px",
    fontSize: 30
  }
  let Hstyle2 = {
    paddingTop: "5px",
    fontSize: 70
  }
  let Hstyle3 = {
    paddingTop: "20px",
    marginBottom: "40px",
    fontSize: 30
  }
  let foodStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    color: "white",
    height: "600px",
    fontWeight: "bold"
  }
  let Food = {
    width: "1000px",
    height: "700px",
    marginLeft: "16%"
  }
  return (
    <Router>
      <div className="text-center" style={foodStyle}>
        <div className="Food" style={Food}>
          <h4 style={Hstyle1}>Food App</h4>
          <h1 style={Hstyle2}>Why stay hungry when you can order form Bella Onojie</h1>
          <h4 style={Hstyle3}>Download the Bella Onoje’s food app now on :</h4>
          <Link to="https://play.google.com/store/games" target='_blank'>
            <button type="button" target="_blank" rel="noreferrer" className="btn btn-lg" style={btn1}>Playstore</button>
          </Link>
          <Link to="https://www.apple.com/ru/app-store/" target='_blank'>
            <button type="button" target="_blank" rel="noreferrer" className="btn btn-lg" style={btn2}>App Store</button>
          </Link>
        </div>
      </div>
    </Router>
  )
}

export default Food;