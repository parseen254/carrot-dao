// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

function ChangePassword() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <SoftBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <SoftTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </SoftTypography>
      </SoftBox>
    );
  });

  return (
    <Card id="change-password">
      <SoftBox p={3}>
        <SoftTypography variant="h5">Change Password</SoftTypography>
      </SoftBox>
      <SoftBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label="current password"
              placeholder="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="new password"
              placeholder="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="confirm new password"
              placeholder="Confirm Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <SoftBox mt={6} mb={1}>
          <SoftTypography variant="h5">Password requirements</SoftTypography>
        </SoftBox>
        <SoftBox mb={1}>
          <SoftTypography variant="body2" color="text">
            Please follow this guide for a strong password
          </SoftTypography>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <SoftBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </SoftBox>
          <SoftBox ml="auto">
            <SoftButton variant="gradient" color="dark" size="small">
              update password
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default ChangePassword;
