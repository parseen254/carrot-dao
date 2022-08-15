// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// React Project base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// React Project data variables
import storiesData from "layouts/pages/profile/teams/components/Stories/data/storiesData";

function Stories() {
  const { borderWidth } = borders;

  const renderStories = storiesData.map(({ image, name, color }) => (
    <Grid key={name} item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
      <SoftBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        border={`${borderWidth[1]} solid ${colors[color].main}`}
        sx={{ cursor: "pointer" }}
      >
        <SoftAvatar
          src={`https://avatars.dicebear.com/api/croodles-neutral/${name.toString()}.svg`}
          alt={name}
        />
      </SoftBox>
      <SoftBox mt={0.75} textAlign="center" lineHeight={1}>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          {name}
        </SoftTypography>
      </SoftBox>
    </Grid>
  ));

  return (
    <Card sx={{ overflow: "scroll" }}>
      <SoftBox width="100%" pt={3} pb={2.5} px={3}>
        <Grid container justifyContent="space-between" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <SoftBox
              bgColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              variant="gradient"
              sx={{ cursor: "pointer" }}
            >
              <Icon fontSize="small">add</Icon>
            </SoftBox>
            <SoftBox mt={0.75} textAlign="center" lineHeight={1}>
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Add story
              </SoftTypography>
            </SoftBox>
          </Grid>
          {renderStories}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default Stories;
