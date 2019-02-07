import React from "react"
import { withTheme } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const IconGridItem = ({
  icon = faHeart,
  iconSize = "4x",
  iconColor: iconColorFromProps,
  headerText = "Short phrase",
  subheaderText = "A little bit longer phrase",
  theme,
}) => {
  const iconColor = iconColorFromProps || theme.primary
  return (
    <div className="col-lg-4">
      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
        <div className="features-icons-icon">
          <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
        </div>
        <h3>{headerText}</h3>
        <p className="lead mb-0">{subheaderText}</p>
      </div>
    </div>
  )
}

export default withTheme(IconGridItem)
