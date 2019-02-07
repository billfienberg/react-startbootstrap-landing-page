import React from "react"
import styled from "styled-components"
import SocialMediaIconLink from "./SocialMediaIconLink"

const Footer = styled.footer`
  padding-bottom: 4rem;
`

const PageLink = ({ href = "#", linkText }) => {
  return (
    <li className="list-inline-item">
      <a href={href}>{linkText}</a>
    </li>
  )
}

const FooterContent = ({
  pageLinks = [],
  socialMediaIconLinks = [],
  copyrightText,
}) => {
  return (
    <Footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              {pageLinks.map((x, i) => (
                <PageLink key={i} {...x} />
              ))}
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              &copy; {copyrightText}
            </p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              {socialMediaIconLinks.map((x, i) => (
                <SocialMediaIconLink key={i} {...x} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterContent
