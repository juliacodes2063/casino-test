import { Box } from "@mui/material";
import { SocialIconButton } from "./SocialIconButton";
import TelegaIcon from "../../assets/icons/telega.svg";
import InstaIcon from "../../assets/icons/insta.svg";
import XIcon from "../../assets/icons/x.svg";
import EmailIcon from "../../assets/icons/email.svg";

export function SocialIconsRow() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <SocialIconButton
        icon={<InstaIcon  width={52} height={52}/>}
      />
      <SocialIconButton
        icon={<TelegaIcon  width={52} height={52}/>}
      />
      <SocialIconButton icon={<XIcon width={52} height={52}/>} />
      <SocialIconButton
        icon={<EmailIcon  width={52} height={52} />}
      />
    </Box>
  );
}
