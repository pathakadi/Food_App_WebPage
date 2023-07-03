import React from 'react' ;

const Checkout = () => {
    let Checkout = {
      marginTop : "-480px" ,
      width : "600px" ,
      height : "510px" , 
      marginLeft : "40%" ,
      color : "black"
    }
    let Hstyle1 = {
      marginBottom : "20px" ,
      fontSize : 30 ,
      color : "orangered"
    }
    let Hstyle2 = {
      fontSize : 50 
    }
    let Hstyle3 = { 
      paddingTop : "20px"  ,
      marginBottom : "40px" ,
      fontSize : 30 ,
      color : "grey"
    }
  return (
    <div className="Checkout" style={Checkout}>
      <h4 style={Hstyle1}>Checkout</h4>
      <h1 style={Hstyle2}>When you done check out and get it delivered.</h1>
      <h4 style={Hstyle3}>When you done check out and get it delivered with ease.</h4>
    </div>
  )
}

export default Checkout ;
