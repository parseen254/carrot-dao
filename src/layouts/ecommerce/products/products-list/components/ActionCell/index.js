// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ActionCell() {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Preview product" placement="top">
          <Icon>visibility</Icon>
        </Tooltip>
      </SoftTypography>
      <SoftBox mx={2}>
        <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Edit product" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
      <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Delete product" placement="left">
          <Icon>delete</Icon>
        </Tooltip>
      </SoftTypography>
    </SoftBox>
  );
}

export default ActionCell;
