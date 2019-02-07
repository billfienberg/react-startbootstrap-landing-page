import React from "react"
import styled from "styled-components"

const Testimonials = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;

  .testimonial-item {
    max-width: 18rem;
  }

  .testimonial-item img {
    max-width: 12rem;
    -webkit-box-shadow: 0px 5px 5px 0px #adb5bd;
    box-shadow: 0px 5px 5px 0px #adb5bd;
  }
`

const Testimonial = ({ imgSrc, altText, headerText, subheaderText }) => {
  return (
    <div className="col-lg-4">
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img
          className="img-fluid rounded-circle mb-3"
          src={imgSrc}
          alt={altText}
        />
        <h5>{headerText}</h5>
        <p className="font-weight-light mb-0">{subheaderText}</p>
      </div>
    </div>
  )
}

const SocialProof = ({ testimonials = [] }) => {
  return (
    <Testimonials className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {testimonials.map((x, i) => (
            <Testimonial key={i} {...x} />
          ))}
        </div>
      </div>
    </Testimonials>
  )
}

export default SocialProof
