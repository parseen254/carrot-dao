// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Analytics application components
import SocialItem from "layouts/applications/analytics/components/SocialItem";

function Social() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6">Social</SoftTypography>
        <Tooltip title="See how much traffic do you get from social media" placement="bottom">
          <SoftButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </SoftButton>
        </Tooltip>
      </SoftBox>
      <SoftBox p={2}>
        <SocialItem
          icon={{ color: "facebook", component: <FacebookIcon /> }}
          title="Facebook"
          percentage={80}
        />
        <SocialItem
          icon={{ color: "twitter", component: <TwitterIcon /> }}
          title="Facebook"
          percentage={40}
        />
        <SocialItem
          icon={{ color: "reddit", component: <RedditIcon /> }}
          title="Reddit"
          percentage={30}
        />
        <SocialItem
          icon={{ color: "youtube", component: <YouTubeIcon /> }}
          title="Youtube"
          percentage={25}
        />
        <SocialItem
          icon={{ color: "instagram", component: <InstagramIcon /> }}
          title="Instagram"
          percentage={15}
        />
      </SoftBox>
    </Card>
  );
}

export default Social;
