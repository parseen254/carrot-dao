// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Images
import curved1 from "assets/images/curved-images/curved1.jpg";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${curved1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <SoftBox p={3} position="relative" lineHeight={0}>
        <SoftTypography variant="h5" color="white" fontWeight="bold">
          نوع من البلوز
        </SoftTypography>
        <SoftTypography variant="button" color="white" fontWeight="medium">
          ديفتونز
        </SoftTypography>
        <SoftBox display="flex" mt={3} pt={1}>
          <SoftBox display="flex" alignItems="center" justifyContent="center">
            <SoftButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_previous</Icon>
            </SoftButton>
            <SoftButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>play_arrow</Icon>
            </SoftButton>
            <SoftButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_next</Icon>
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default MediaPlayer;
