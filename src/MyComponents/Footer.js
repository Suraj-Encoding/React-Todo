import React from 'react'

export const Footer = () => {
  //   let footerStyle = {
  //     position: "relative",
  //     width: "100%",
  //     top: "10vh"
  //   }
  return (
    // <footer className="bg-dark text-light py-3" style={footerStyle}>
    <footer className="bg-dark text-light py-3">
      <p className="text-center font-bold my-2">
        copyright &copy; Mytodo.com
      </p>
    </footer>
  )
}

// # How to add css in react ?
// 1.Using style sheet -> Add style sheet -> e.g Footer.css
// 2.Using style object -> Make style object ->  e.g footerStyle