import React from "react"

const Nav = ({ brandName = "" }) => {
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          {brandName}
        </a>
        <div>
          <button type="button" className="mx-1 btn btn-outline-secondary">
            Log In
          </button>
          <button type="button" className="mx-1 btn btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
