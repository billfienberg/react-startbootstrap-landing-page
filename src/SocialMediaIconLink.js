import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { withTheme } from "styled-components"

const SocialMediaIconLink = ({
  href = "#",
  icon = faFacebook,
  iconColor: iconColorFromProps,
  iconSize = "2x",
  theme,
}) => {
  const iconColor = iconColorFromProps || theme.primary
  return (
    <li className="list-inline-item mr-3">
      <a href={href}>
        <FontAwesomeIcon icon={icon} color={iconColor} size={iconSize} />
      </a>
    </li>
  )
}

export default withTheme(SocialMediaIconLink)
