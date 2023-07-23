import { Icon } from "@iconify/react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

const One = () => {
  return (
    <div className="one">
      <div className="card">
        <div className="header">
          <Avatar sx={{}} className="avatar">
            M
          </Avatar>
          <div>
            <h1>Hi Mike,</h1>
            <p>welcome back.</p>
          </div>
        </div>
        <div>
          <Box mt={5}>
            <Typography
              fontFamily={"Noto Serif"}
              fontWeight={600}
              variant="body2"
            >
              Today
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={700}
              fontSize={"1.3rem"}
              mt={1.5}
            >
              $19,892
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Account Balance
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={"0.9rem"}
              mt={1}
            >
              $4,000
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Year-to-Date Contribution{" "}
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={"0.9rem"}
              mt={1}
            >
              $1,892
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Total Interest
            </Typography>
          </Box>
          <button className="onebtn">
            {" "}
            I want to <Icon icon={"gridicons:dropdown"} />
          </button>
        </div>
      </div>
      <Box mt={6} />
      <div className="card">
        <Typography
          fontFamily={"Noto Serif"}
          fontWeight={500}
          fontSize={"1rem"}
        >
          Recent Transactions
        </Typography>

        <Typography
          fontFamily={"Poppins"}
          fontWeight={400}
          color={"text.secondary"}
          fontSize={"0.75rem"}
          mt={3}
        >
          2020-08-07
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={"0.75rem"}
        >
          Withdrawlal Transferred to bank-XXX11
        </Typography>

        <Typography
          fontFamily={"Poppins"}
          fontWeight={400}
          color={"text.secondary"}
          fontSize={"0.75rem"}
          mt={3}
        >
          2020-07-21
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={"0.75rem"}
        >
          Withdrawlal Transferred to bank-XXX11
        </Typography>

        <Typography
          fontFamily={"Poppins"}
          fontWeight={400}
          color={"text.secondary"}
          fontSize={"0.75rem"}
          mt={3}
        >
          2020-07-16
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={"0.75rem"}
        >
          Withdrawlal Transferred to bank-XXX11
        </Typography>
      </div>
    </div>
  );
};

export default One;
