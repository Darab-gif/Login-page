import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibleIcon from "@mui/icons-material/Visibility";
import VisibleIconOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { green } from "@mui/material/colors";

function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const handleShow = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "0px 9px 9px 13px #d9d9d9",
          borderRadius: "2rem",
          height: "30rem",
          width: "30rem",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", marginLeft: "30px" }}>
          <h2>Sign in to continue</h2>
          <p>
            Don't have a profile yet? <a href="/">Sign up</a>
          </p>
        </div>

        <FormControl variant="outlined" sx={{ mt: 5, ml: 9 }}>
          <Input
            type="email"
            placeholder="Username"
            startAdornment={
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            }
          />
          <Input
            sx={{ mt: 6 }}
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <LockIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleShow}>
                  {values.showPassword ? <VisibleIconOff /> : <VisibleIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormControlLabel
            sx={{ mt: 3 }}
            control={
              <CheckBox
                sx={{
                  color: green[500],
                  "&.Mui-checked": {
                    color: green[600],
                  },
                }}
              />
            }
            label="Keep me sign in"
          />
          <Button
            variant="standard"
            sx={{
              mt: 5,
              bgcolor: "green",
              color: "#fff",
              "&.Mui-hover": {
                color: green,
              },
            }}
          >
            Login
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default Login