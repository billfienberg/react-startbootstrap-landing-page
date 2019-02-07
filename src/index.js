import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import {
  faHeart,
  faMap,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import "./custom.scss"
import Nav from "./Nav"
import Header from "./Header"
import SocialProof from "./SocialProof"
import IconGrid from "./IconGrid"
import ImageShowcase from "./ImageShowcase"
import Footer from "./Footer"
import cheers from "./img/cheers.jpg"
import barista from "./img/barista.jpg"
import community from "./img/community.jpg"
import margaret from "./img/margaret.jpg"
import fred from "./img/fred.jpg"
import sarah from "./img/sarah.jpg"

function App() {
  const headerProps = {
    headerText: "This is your eye-catching header",
    subheaderText: "This is your tagline",
    submitButtonText: "Learn more",
    inputPlaceholder: "Enter your email...",
  }

  const iconGridItems = [
    {
      icon: faHeart,
      headerText: "Short header",
      subheaderText: "A little bit longer description",
    },
    {
      icon: faMap,
      headerText: "Short header",
      subheaderText: "A little bit longer description",
    },
    {
      icon: faCheckCircle,
      headerText: "Short header",
      subheaderText: "A little bit longer description",
    },
  ]

  const showcaseImages = [
    {
      imgSrc: cheers,
      headerText: "For Consumers",
      subheaderText:
        "Startup is a service to discover local businesses/promotions.",
    },
    {
      imgSrc: barista,
      headerText: "For Businesses",
      subheaderText: "Startup is a service to attract new/repeat customers.",
    },
    {
      imgSrc: community,
      headerText: "For Communities",
      subheaderText:
        "Startup is a service to bring together local businesses and customers.",
    },
  ]

  const testimonials = [
    {
      imgSrc: margaret,
      altText: "Margaret E.",
      headerText: "Margaret E.",
      subheaderText: `"I've found so many cool, new places on Startup."`,
    },
    {
      imgSrc: fred,
      altText: "Fred S.",
      headerText: "Fred S.",
      subheaderText: `"I met so many cool people on Startup"`,
    },
    {
      imgSrc: sarah,
      altText: "Sarah K.",
      headerText: "Sarah K.",
      subheaderText: `"My repeat business has increased significantly since using Startup."`,
    },
  ]

  const socialMediaIconLinks = [
    { icon: faFacebook },
    { icon: faInstagram },
    { icon: faTwitter },
  ]

  const footerPageLinks = [
    { linkText: "About" },
    { linkText: "Contact" },
    { linkText: "Terms of Use" },
    { linkText: "Privacy Policy" },
  ]
  const footerProps = {
    socialMediaIconLinks,
    pageLinks: footerPageLinks,
    copyrightText: "Startup 2019. All Rights Reserved.",
  }
  return (
    <main>
      <Nav brandName="Brand" />
      <Header {...headerProps} />
      <IconGrid iconGridItems={iconGridItems} />
      <ImageShowcase checkered flip showcaseImages={showcaseImages} />
      <SocialProof testimonials={testimonials} />
      <Footer {...footerProps} />
    </main>
  )
}

const rootElement = document.getElementById("root")
const theme = { primary: "purple" }
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement,
)
