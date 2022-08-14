import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Custom styles for SoftTagInput
import SoftTagInputRoot from "components/SoftTagInput/SoftTagInputRoot";

const SoftTagInput = forwardRef(({ size, error, success, ...rest }, ref) => (
  <SoftTagInputRoot ownerState={{ size, error, success }}>
    <ReactTagInput {...rest} ref={ref} />
  </SoftTagInputRoot>
));

// Setting default values for the props of SoftTagInput
SoftTagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the SoftTagInput
SoftTagInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SoftTagInput;
