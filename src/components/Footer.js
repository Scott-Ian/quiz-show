import React from 'react';

function Footer() {
  const footerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'gold',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginBottom: '10px'
  }
  const h1Footer = {
    fontWeight: 'bold'
  }

  return (
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>Copyright: Ian Scott, Peter Grimm, Thomas Glenn, Deryck Jackson, JohnNils Olson, Cody Fritz; 2020</h3>
    </div>
  )
}

export default Footer;