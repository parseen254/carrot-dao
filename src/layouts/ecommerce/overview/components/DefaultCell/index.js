// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// React Project components
import SoftTypography from "components/SoftTypography";

function DefaultCell({ children }) {
  return (
    <SoftTypography variant="button" fontWeight="medium" color="text">
      {children}
    </SoftTypography>
  );
}

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultCell;
