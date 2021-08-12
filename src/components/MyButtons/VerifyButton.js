import React from "react";
import Button from "components/CustomButtons/Button.js";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import PropTypes from "prop-types";

export default function VerifyButton(props) {
  return (
    <Button
      justIcon
      onClick={() => props.onVerify()}
      color={props.verify ? "success" : "danger"}
    >
      {props.verify ? <Check /> : <Cancel />}
    </Button>
  );
}

VerifyButton.propTypes = {
  verify: PropTypes.bool.isRequired,
  onVerify: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
};
