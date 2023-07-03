import React from 'react' ;

const Varieties = () => {
    let Varieties = {
        marginTop : "-480px" ,
        width : "600px" ,
        height : "700px" , 
        marginLeft : "10%" ,
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
      <div className="Varieties" style={Varieties}>
        <h4 style={Hstyle1}>Explore varieties</h4>
        <h1 style={Hstyle2}>Shop for your favorites meal as e dey hot.</h1>
        <h4 style={Hstyle3}>Shop for your favorite meals or drinks and enjoy while doing it.</h4>
      </div>
    )
}

export default Varieties ;
