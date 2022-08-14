// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// React Project base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

function ReportsDoughnutChartItem({ color, title, percentage, hasBorder }) {
  const { borderWidth } = borders;
  const { light } = colors;

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderBottom: hasBorder ? `${borderWidth[1]} solid ${light.main}` : "none",
        lineHeight: 1.25,
      }}
    >
      <Grid item xs={10}>
        <SoftBox display="flex" py={0.8} px={2}>
          <SoftBox
            bgColor={color}
            width="1.35rem"
            height="1.35rem"
            borderRadius="md"
            mr={2}
            lineHeight={0}
            variant="gradient"
          />
          <SoftBox display="flex" flexDirection="column" justifyContent="center">
            <SoftTypography
              component="div"
              variant="button"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {title}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Grid>
      <Grid item xs={2}>
        <SoftBox py={0.8} px={1} textAlign="center" width="100%">
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            sx={{ display: "inline-block", width: "max-content" }}
          >
            {percentage}
          </SoftTypography>
        </SoftBox>
      </Grid>
    </Grid>
  );
}

// Setting default values for the props of ReportsDoughnutChartItem
ReportsDoughnutChartItem.defaultProps = {
  color: "info",
  hasBorder: false,
};

// Typechecking props for the ReportsDoughnutChartItem
ReportsDoughnutChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export default ReportsDoughnutChartItem;
