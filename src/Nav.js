import React, { useState, Fragment } from "react"
import Modal, { Header, Body, Footer } from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function LogInForm() {
  return (
    <form className="form-signin">
      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label htmlFor="inputPassword">Password</label>
      </div>

      <div className="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember password
        </label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Log in
      </button>
    </form>
  )
}

function Nav({ brandName = "" }) {
  const [isOpen, setIsOpen] = useState(false)
  const modal = isOpen && (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Header>
      <Body>
        <LogInForm />
      </Body>
      <Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setIsOpen(false)}>
          Save Changes
        </Button>
      </Footer>
    </Modal>
  )
  return (
    <Fragment>
      {modal}
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            {brandName}
          </a>
          <div>
            <button
              type="button"
              className="mx-1 btn btn-outline-secondary"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            >
              Log In
            </button>
            <button
              type="button"
              className="mx-1 btn btn-primary"
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Nav
