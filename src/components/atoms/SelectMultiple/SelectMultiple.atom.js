import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import ListItemText from "@material-ui/core/ListItemText"
import Select from "@material-ui/core/Select"
import Checkbox from "@material-ui/core/Checkbox"
import Chip from "@material-ui/core/Chip"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
]

class SelectMultiple extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { classes, theme } = this.props

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">
          {this.props.label}
        </InputLabel>
        <Select
          multiple
          value={this.state.name}
          onChange={this.handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={{
                fontWeight:
                  this.state.name.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }
}

SelectMultiple.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SelectMultiple)

// const SelectMultiple = props => (
//   <FormControl className={classes.formControl}>
//     <InputLabel htmlFor="select-multiple-chip">{props.label}</InputLabel>
//     <Select
//       multiple
//       value={props.value}
//       onChange={props.onChange}
//       input={<Input id="select-multiple-chip" />}
//       renderValue={selected => (
//         <div className={classes.chips}>
//           {selected.map(value => (
//             <Chip key={value} label={value} className={classes.chip} />
//           ))}
//         </div>
//       )}
//       MenuProps={MenuProps}
//     >
//       {names.map(name => (
//         <MenuItem
//           key={name}
//           value={name}
//           style={{
//             fontWeight:
//               this.state.name.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium
//           }}
//         >
//           {name}
//         </MenuItem>
//       ))}
//     </Select>
//   </FormControl>
// )
