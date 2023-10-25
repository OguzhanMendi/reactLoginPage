import { Divider } from "@mui/material";
import leftImg from "@/public/leftimg.svg";
import RightImg from "@/public/cocuk.png";
import facebookLogo from "@/public/facebook.png";
import googleLogo from "@/public/google.png";

import Image from "next/image";

import Button from "@mui/material/Button";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <div className="flex justify-between p-12 gap-10 box-border">
      <div className="">
        <Image src={leftImg} className="absolute bottom-10 left-0 " />
      </div>

      <div className=" w-1/2 flex flex-col items-center gap-6 mt-20">
        <div className="flex flex-col items-center">
          <span className="font-bold text-8xl">Welcome</span>
          <p className=" text-lg ">We are glad to see you back with us</p>
        </div>

        <TextField
          id="filled-basic"
          variant="outlined"
          placeholder="Username"
          sx={{
            width: "53%",
          }}
          InputProps={{
            style: {
              borderRadius: "15px",
              background: "#F2F2F2",
            },
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="filled-basic"
          variant="outlined"
          placeholder="Password"
          sx={{
            width: "53%",
          }}
          InputProps={{
            style: {
              borderRadius: "15px",
              background: "#F2F2F2",
            },
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          className="bg-gray-950 rounded-xl"
          sx={{
            width: "53%",
            padding: "1rem",

            "&:hover": {
              backgroundColor: "#1C1C1C",
            },
          }}
          variant="contained"
        >
          next
        </Button>
        <Divider>
          <span className="font-bold">Login</span> with others
        </Divider>

        <Button
          className="rounded-xl"
          sx={{
            width: "53%",
            padding: "1rem",
            color: "black",
            textTransform: "lowercase",
            border: "1px solid #1C1C1C",
            "&:hover": {
              border: "1px solid #1C1C1C",
            },
          }}
          variant="outlined"
          startIcon={<Image src={googleLogo} />}
        >
          <p>
            {" "}
            Login with <span className="font-bold"> google</span>
          </p>
        </Button>

        <Button
          className="rounded-xl"
          sx={{
            width: "53%",
            padding: "1rem",
            color: "black",
            textTransform: "lowercase",
            border: "1px solid #1C1C1C",
            "&:hover": {
              border: "1px solid #1C1C1C",
            },
          }}
          variant="outlined"
          startIcon={<Image src={facebookLogo} />}
        >
          <p>
            {" "}
            Login with <span className="font-bold"> Facebook</span>
          </p>
        </Button>
      </div>
      <div className="w-1/2 ">
        <Image src={RightImg} width={810} className="rounded-xl" />
      </div>
    </div>
  );
}
