import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning border-bottom border-2 border-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark fw-bold" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold hover-primary " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about"> About</Link>
            </li>
          </ul>
          {/* Ternary operator checking for Search Bar */}
          {
            props.searchBar ? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : " "
          }
        </div>
      </div>
    </nav>
  )
}

// # Default Props
Header.defaultProps = {
  title: "Suraj Dalvi",
  searchBar: true
}

// # Prop Types 
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}


// # Destructuring In JavaScript #

// export default function Header({title})     // For single argment
// export default function Header({title,Id})  // For multiple argments
// # Access: {title} & {title} {Id}

// # Prop Types #

// It will improve your code
// It is good to maintain your code nicely and for bug fixes
// # Example: <Header title = {45} searchBar = {true} /> 
//           - (It will give an 'ERROR' in console)

// # Default Props #
// If props are not passed from parent component to child component
// then this default props are used.



