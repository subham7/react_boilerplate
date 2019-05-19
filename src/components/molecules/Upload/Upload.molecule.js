import React from "react"
import { UiElements } from "atoms"

const Upload = UiElements.Upload
const Dragger = Upload.Dragger
const Icon = UiElements.Icon
const Message = UiElements.message

const Upload1 = props => {
  const action = {
    action: [props.action],
    onChange(info) {
      const status = info.file.status
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        Message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === "error") {
        Message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <div>
      <p>{props.label}</p>
      <Dragger name={props.name} multiple={props.multiple} {...action}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  )
}

export default Upload1
