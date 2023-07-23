import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Divider,
  Slide,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const iOSBoxShadow = "0 1px 1px rgba(0,0,0,0.1),0 0 0 1px rgba(0,0,0,0.02)";
const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#FAFAFA",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
}));

const Three = () => {
  return (
    <div className="three">
      <Box bgcolor={"#FAFAFA"} p={2} borderRadius={2}>
        <Box>
          <Typography
            fontFamily={"Noto Serif"}
            fontWeight={600}
            fontSize={"0.9rem"}
          >
            Retirement Strategy
          </Typography>
          <Typography fontWeight={500} fontSize={"0.75rem"} mt={3}>
            Employee Contribution
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <IOSSlider defaultValue={50} />
            <Typography fontSize={"0.8rem"}>12%</Typography>
          </Stack>
          <Typography fontWeight={500} fontSize={"0.75rem"} mt={3}>
            Retirement Age
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <IOSSlider defaultValue={65} />
            <Typography fontSize={"0.8rem"}>65%</Typography>
          </Stack>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={500} fontSize={"0.75rem"} mt={3}>
              Employer Contribution
            </Typography>
            <Typography fontWeight={500} fontSize={"0.75rem"} mt={3}>
              8.4%
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={500} fontSize={"0.75rem"} mt={3}>
              Interest Rate
            </Typography>
            <Typography fontWeight={500} fontSize={"0.75rem"} mt={3}>
              5%
            </Typography>
          </Box>
          <Box mt={3}>
            <button className="threeBtn">Update</button>
            <button className="threeBtn2">
              View Help Docs <Icon icon="mingcute:right-fill" />
            </button>
          </Box>
        </Box>
      </Box>
      <Box borderLeft={"2px solid #4834fd"} padding={"0 1.5rem"} mt={3}>
        <Typography fontSize={"0.8rem"}>
          Are you considering a <br />
        </Typography>
        <Typography fontSize={"0.8rem"} fontWeight={"600"}>
          Housing Advance?
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Life time reduced interest.
        </Typography>
        <button className="threeBtn2sm">
          Learn More <Icon icon="mingcute:right-fill" />
        </button>
      </Box>
    </div>
  );
};

export default Three;
