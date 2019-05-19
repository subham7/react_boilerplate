import React from "react"
import CardMedia from "@material-ui/core/CardMedia"

const CardMedia1 = props => {
  return (
    <CardMedia
      component={props.component}
      height={props.height}
      image={props.image}
      title={props.title}
    />
  )
}
export default CardMedia1
