import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Profile() {
  return (
    <Box sx={{ mt: 13, flexGrow: 1 }}>
      <Avatar sx={{ height: 90, width: 90, ml: 20 }}>DP</Avatar>
      <Box sx={{ flexGrow: 1 }}>
        <Typography component="h1" variant="h2">
          Hi Darab
        </Typography>
      </Box>
    </Box>
  );
}

export default Profile;
