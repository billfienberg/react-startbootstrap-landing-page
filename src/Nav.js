import React from "react"

const Nav = ({ brandName = "" }) => {
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          {brandName}
        </a>
        <div>
          <a className="mx-1 btn btn-outline-secondary" href="#">
            Log In
          </a>
          <a className="mx-1 btn btn-primary" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
