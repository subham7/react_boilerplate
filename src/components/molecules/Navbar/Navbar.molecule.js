import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { MdChat, MdBookmark } from "react-icons/md"
import { IoMdCalendar } from "react-icons/io"
import { Link } from "react-router-dom"

// Components
import { Paper, Affix, SearchBar } from "atoms"

// Tabs
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import "./style.css"

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const notificationStyle = {
      width: "270px",
      height: "80px",
      display: "inline-block",
      margin: "5px",
      padding: "10px",
      color: "#fff",
      backgroundColor: "#2853bb"
    }
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className="navbar" style={this.props.style}>
        <AppBar position="static" color="primary">
          {this.props.displayTopNavbar ? (
            <Toolbar>
              {/*<IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>*/}
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {this.props.name}
              </Typography>

              <IconButton style={{ color: "#fff" }} href="/dashboard/schedule">
                <IoMdCalendar />
              </IconButton>
              <IconButton style={{ color: "#fff" }}>
                <MdBookmark />
              </IconButton>
              <IconButton style={{ color: "#fff" }}>
                <MdChat />
              </IconButton>
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {this.props.menuItem.map((data, index) => (
                    <MenuItem key={index} onClick={this.handleClose}>
                      <Link to={data.link} style={{ textDecoration: "none" }}>
                        {data.label}
                      </Link>
                    </MenuItem>
                  ))}

                  {/*<MenuItem onClick={this.handleClose}>My account</MenuItem>*/}
                </Menu>
              </div>
              <SearchBar
                onChange={this.props.onChange}
                onRequestSearch={this.props.onRequestSearch}
                style={{
                  backgroundColor: "#2853bb",
                  marginLeft: "14px",
                  maxWidth: "100%",
                  color: "#ddd"
                }}
              />
            </Toolbar>
          ) : null}
          {/*this.props.displayNotification ? ( */}
          {true ? (
            <Toolbar>
              <div className="notification-container">
                {this.props.notification.map((data, index) => (
                  <Paper
                    key={index}
                    className="notification-box"
                    style={notificationStyle}
                    square={true}
                  >
                    <span className="notification-paragraph">
                      {data.message}
                    </span>
                  </Paper>
                ))}
              </div>
            </Toolbar>
          ) : null}
          {this.props
            .displayTabs /* <Tabs>
            {props.tabLink.map((data, index) => (
              <Tab key={index} label={data.label} href={data.link} />
            ))}
          </Tabs>*/ ? (
            <Affix offsetTop={0}>
              <div style={{ backgroundColor: "#3062cf" }}>
                <Tabs
                  value={this.props.tabValue}
                  onChange={this.props.handleTabValue}
                >
                  {this.props.tabData.map((data, index) => (
                    <Tab key={index} label={data.label} />
                  ))}
                </Tabs>
              </div>
            </Affix>
          ) : null}
        </AppBar>
      </div>
    )
  }
}

// <Tabs>
//   {props.tabLink.map((data, index) => (
//     <Tab key={index} label={data.label} href={data.link} />
//   ))}
// </Tabs>

// Navbar.propTypes = {
//   displayTopNavbar: PropTypes
// }

Navbar.defaultProps = {
  displayTopNavbar: true,
  displayNotification: true,
  displayTabs: true,
  tabLink: [],
  notification: []
}

export default withStyles(styles)(Navbar)
