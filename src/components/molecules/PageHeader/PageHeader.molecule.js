import React from "react"
import { PageHeader } from "antd"
import { Paper } from "atoms"

const style = {
  padding: "20px",
  marginBottom: "10px"
}

const PageHeader1 = props => {
  return (
    <Paper style={style}>
      <PageHeader
        title={props.title}
        subTitle={props.subTitle}
        onBack={() => props.onBack}
      />
    </Paper>
  )
}

export default PageHeader1
