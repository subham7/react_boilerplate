import React from "react"
import { Card, CardHeader, CardContent, CardMedia } from "atoms"

const CardWithHeader = props => {
  return (
    <Card style={props.style}>
      {props.displayMedia ? (
        <CardMedia
          component={props.component}
          height={props.mediaHeight}
          image={props.image}
          title={props.title}
        />
      ) : null}
      <CardHeader title={props.title} />
      <CardContent>{props.children}</CardContent>
    </Card>
  )
}

CardWithHeader.defaultProps = {
  displayMedia: false
}

export default CardWithHeader
