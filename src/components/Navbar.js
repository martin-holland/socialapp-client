import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// Redux imports
import { connect } from "react-redux";

//MUI Imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// Icons
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import Notifications from "@material-ui/icons/Notifications";

export class Navbar extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <>
              <MyButton tip="Create a Chirp!">
                <AddIcon color="secondary" />
              </MyButton>
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon color="secondary" />
                </MyButton>
              </Link>
              <MyButton tip="Notifications">
                <Notifications color="secondary" />
              </MyButton>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
