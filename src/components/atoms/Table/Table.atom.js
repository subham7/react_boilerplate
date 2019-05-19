import React from "react"
import { Table } from "antd"

export default props => (
  <Table
    columns={props.columns}
    dataSource={props.dataSource}
    expandedRowRender={props.expandedRowRender}
    showHeader={props.showHeader}
    rowSelection={props.rowSelection}
  />
)
