import './App.css';
import Navbar from './MyComponents/Navbar';
import Food from './MyComponents/Food';
import Account from './MyComponents/Account';
import Varieties from './MyComponents/Varieties';
import Checkout from './MyComponents/Checkout';
import Download from './MyComponents/Download';
import Img1 from "./MyComponents/Image/img1.png" ;
import Img2 from "./MyComponents/Image/img2.png" ;
import Img3 from "./MyComponents/Image/img3.png" ;
import Img4 from "./MyComponents/Image/img4.png" ;
import Logo from "./MyComponents/Image/Logo.png" ;
import { FaFacebookF , FaTwitter , FaInstagram } from "react-icons/fa";

function App() {
  let img1 = {
    marginLeft : "400px" ,
    marginTop : "-150px"
  }
  let img2 = {
    display : "block" ,
    marginLeft : "180px" ,
    marginTop : "100px"
  }
  let img3 = {
    display : "block" ,
    marginLeft : "800px" ,
    marginTop : "-130px"
  }
  let img4 = {
    display : "block" ,
    marginLeft : "100px" ,
    marginTop : "-100px"
  }
  let logo = {
    height : "100px" ,
    width : "200px" ,
    display : "block" ,
    marginLeft : "140px" ,
    marginTop : "20px"
  }
  let hr = {
    width : "60%" ,
    marginLeft : "300px"
  }
  let Footer = {
    marginLeft : "1200px" ,
    marginTop : "-50px" , 
  }
  let fb = {
    marginLeft : "650px" ,
    marginTop : "-70px" ,
    color: 'blue' ,
  }
  let tw = {
    marginLeft : "30px" ,
    marginTop : "-70px" ,
    color : "aqua"
  }
  let ig = {
    marginLeft : "30px" ,
    marginTop : "-70px" ,
    color : "fuchsia"
  }
  return (
    <>
      <Navbar className="Navbar"/>
      <Food className="Food"/>
      <img src={Img1} alt="img1" style={img1}/>
      <hr style={hr}/>
      <h1 className='text-center'>How the App Works</h1>
      <img src={Img2} alt="img1" style={img2}/>
      <Account/>
      <img src={Img3} alt="img1" style={img3}/>
      <Varieties/>
      <img src={Img4} alt="img1" style={img4}/>
      <Checkout/>
      <Download/>
      <img src={Logo} alt="img1" style={logo}/>
      <div style={Footer}>2021 , Bella Onojie</div>
      <a href="https://www.facebook.com" target='_blank' rel="noreferrer">
        <FaFacebookF style={fb} size = "40"/>
      </a>
      <a href="https://www.twitter.com" target='_blank' rel="noreferrer">
        <FaTwitter style={tw} size = "40"/>
      </a>
      <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
        <FaInstagram style={ig} size = "40"/>
      </a>
    </>
  );
}

export default App;
