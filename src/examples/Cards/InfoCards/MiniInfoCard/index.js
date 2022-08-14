// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function MiniInfoCard({ color, icon, title, description }) {
  return (
    <Card>
      <SoftBox p={3}>
        <SoftBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="3rem"
          height="3rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </SoftBox>
        <SoftBox mt={2}>
          <SoftTypography variant="h5" fontWeight="medium" textTransform="capitalize">
            {title}
          </SoftTypography>
          <SoftTypography variant="body2" color="text" fontWeight="regular">
            {description}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of MiniInfoCard
MiniInfoCard.defaultProps = {
  color: "info",
};

// Typechecking props for the MiniInfoCard
MiniInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default MiniInfoCard;
