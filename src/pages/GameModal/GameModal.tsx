import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GAME_URL =
  "https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en";

export function GameModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 2,
            bgcolor: "rgba(0,0,0,0.35)",
          }}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="iframe"
          src={GAME_URL}
          sx={{ width: "100%", height: "100%", border: 0 }}
          title="Game"
          allow="fullscreen"
        />
      </Box>
    </Dialog>
  );
}