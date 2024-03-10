import React from 'react'


const Button = () => {
  const BtnStyle ={
    color : "var(--white)",
    backgroundColor: "var(--btncolor)" ,
    padding : " 8px 30px",
    fontSize : "1rem",
    borderRadius: "3px",
    outline : "none",
    border : "none",
    transition:  " all  0.3s ease "
    
  }
  return (

  <button style={BtnStyle}>Hire Me</button>
  )
}

export default Button