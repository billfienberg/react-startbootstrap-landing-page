import React from "react"

const Nav = ({ brandName = "" }) => {
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          {brandName}
        </a>
        <a className="btn btn-primary" href="#">
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Nav
