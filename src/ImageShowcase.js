import React from "react"
import styled from "styled-components"
import classNames from "classnames"

const Section = styled.section`
  div.showcase-text {
    padding: 3rem;
  }

  @media (min-width: 768px) {
    div.showcase-text {
      padding: 7rem;
    }
  }
`

export const Image = styled.div`
  background-image: url(${props => props.imgSrc});
  min-height: 30rem;
  background-size: cover;
`

const Row = ({ imgSrc, headerText, subheaderText, flip = false }) => {
  const imageClassNames = classNames("col-lg-6 text-white showcase-img", {
    "order-lg-2": flip,
  })
  return (
    <div className="row no-gutters">
      <Image className={imageClassNames} imgSrc={imgSrc} />
      <div className="col-lg-6 order-lg-1 my-auto showcase-text">
        <h2>{headerText}</h2>
        <p className="lead mb-0">{subheaderText}</p>
      </div>
    </div>
  )
}

const ImageShowcase = ({
  showcaseImages = [],
  flip = false,
  checkered = false,
}) => {
  return (
    <Section className="showcase">
      <div className="container-fluid p-0">
        {showcaseImages.map((x, i) => {
          if (checkered && flip) {
            const shouldFlip = i % 2 === 0
            return <Row key={i} {...x} flip={shouldFlip} />
          }

          if (checkered) {
            const shouldFlip = i % 2 !== 0
            return <Row key={i} {...x} flip={shouldFlip} />
          }

          if (flip) {
            return <Row key={i} {...x} flip />
          }
          return <Row key={i} {...x} />
        })}
      </div>
    </Section>
  )
}

export default ImageShowcase
