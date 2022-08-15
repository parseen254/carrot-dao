import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import { useSoftUIController } from "context";

function Header() {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  const [controller, _dispatch] = useSoftUIController();
  const { walletAddress } = controller;

  return (
    <Card id="profile">
      <SoftBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SoftAvatar
              src={`https://avatars.dicebear.com/api/croodles-neutral/${walletAddress.toString()}.svg`}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                {walletAddress}
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                Member
              </SoftTypography>
            </SoftBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <SoftBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <SoftTypography variant="caption" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </SoftTypography>
              <SoftBox mx={1}>
                <Switch checked={visible} onChange={handleSetVisible} />
              </SoftBox>
            </SoftBox>
          </Grid> */}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default Header;
