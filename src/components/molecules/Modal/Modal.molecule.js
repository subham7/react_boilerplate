import React, { Component } from "react"
import { UiElements, Button } from "atoms"

const Modal = UiElements.Modal

class Modal1 extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>{this.props.btnText}</Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={this.props.width}
          style={{ top: 20 }}
        >
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default Modal1
