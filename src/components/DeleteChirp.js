import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// MUI Imports
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

// Redux Imports
import { connect } from "react-redux";
import { deleteChirp } from "../redux/actions/dataActions";

// Icons
import DeleteIcon from "@material-ui/icons/DeleteOutline";

const styles = {
  deleteButton: {
    position: "absolute",
    left: "90%",
    top: "10%",
  },
};

export class DeleteChirp extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteChirp = () => {
    this.props.deleteChirp(this.props.chirpId);
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <MyButton
          tip="Delete Chirp"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteIcon color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this Chirp ? <hr />
            <em>This action is not reversible!</em>
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteChirp} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

DeleteChirp.propTypes = {
  deleteChirp: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  chirpId: PropTypes.string.isRequired,
};

export default connect(null, { deleteChirp })(withStyles(styles)(DeleteChirp));
