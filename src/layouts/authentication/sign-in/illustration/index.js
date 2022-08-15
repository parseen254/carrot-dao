import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { setWalletAddress, useSoftUIController } from "context";

// Image
import carrot from "assets/images/illustrations/carrot-neon.png";
import phantom from "assets/images/logos/phantom-wallet.png";

function Illustration() {
  const [_, dispatch] = useSoftUIController();
  const handleWalletAddress = (address) => setWalletAddress(dispatch, address);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      handleWalletAddress(response.publicKey.toString());
    }
  };

  return (
    <IllustrationLayout
      title="Carrot DAO"
      description="Connect your Phantom Wallet to Proceed"
      illustration={{
        image: carrot,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox display="flex" alignItems="center">
          <SoftBox
            component="img"
            src={phantom}
            alt="logo-illustration"
            width="100%"
            borderRadius="10px"
          />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="warning"
            size="large"
            fullWidth
            onClick={connectWallet}
          >
            {" "}
            Connect Wallet to Sign In
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
