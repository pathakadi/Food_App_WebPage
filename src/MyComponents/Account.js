import React from 'react' ;

const Account = () => {
    let Account = {
      marginTop : "-380px" ,
      width : "700px" ,
      height : "700px" , 
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
    <div className="Account" style={Account}>
      <h4 style={Hstyle1}>Create an Account</h4>
      <h1 style={Hstyle2}>Create/login to an existing account to get started</h1>
      <h4 style={Hstyle3}>An account is created with your email and a desired password</h4>
    </div>
  )
}

export default Account ;
