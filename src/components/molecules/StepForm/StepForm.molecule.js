import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Paper } from "atoms"
import "./style.css"

const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
})

// Here props are:
// steps: An array of description of a step which has to be displayed at the top.
// stepContent: A function with switch-case which return content to be displayed with respect to the argument passed

class StepForm extends Component {
  constructor(props) {
    super(props)
    this.state = { activeStep: 0 }
  }

  style = {
    backgroundColor: "#f5f5f5"
  }

  // Functions for different opperations
  handleNext = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep + 1
    })
  }

  handleBack = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep - 1
    })
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  render() {
    const steps = this.props.steps
    const { activeStep } = this.state

    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel style={this.style}>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>

        <div>
          <Paper style={this.props.style}>
            {this.state.activeStep === steps.length ? (
              <div>
                <Typography>All steps completed</Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography>{this.props.stepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={this.handleBack}>
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.props.onSubmit}
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Paper>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(StepForm)
