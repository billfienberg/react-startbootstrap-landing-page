import React from "react"
import styled from "styled-components"
import IconGridItem from "./IconGridItem"

const Section = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;

  .features-icons-item {
    max-width: 20rem;
  }

  .features-icons-item .features-icons-icon {
    height: 7rem;
  }

  .features-icons-item .features-icons-icon i {
    font-size: 4.5rem;
  }

  .features-icons-item:hover .features-icons-icon i {
    font-size: 5rem;
  }
`

const IconGrid = ({ iconGridItems = [] }) => {
  return (
    <Section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {iconGridItems.map((x, i) => (
            <IconGridItem key={i} {...x} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default IconGrid
