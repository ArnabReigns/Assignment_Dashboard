import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";
import { Icon } from "@iconify/react";
import CircularBarChart from "./CircularBarChart ";

const Two = () => {
  return (
    <div className="two">
      <Box>
        <Typography
          fontSize={"0.7rem"}
          fontWeight={"bold"}
          fontFamily={"Noto Serif"}
          color={"#4834fd"}
        >
          Retrivement Income
        </Typography>
        <Typography fontWeight={"600"} fontFamily={"Noto Serif"}>
          Starting Year 2056
        </Typography>
      </Box>

      <Grid container mt={1} spacing={"2rem"}>
        <Grid item xs={12} md={4}>
          <Typography fontFamily={"Poppins"} fontWeight={600} fontSize={"1rem"}>
            $300,000
          </Typography>
          <Typography fontSize={"0.8rem"} color={"text.secondary"}>
            My Goal
          </Typography>
          <Box bgcolor={"#4834fd7f"} height={"2px"} mt={1} />
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography fontFamily={"Poppins"} fontWeight={600} fontSize={"1rem"}>
            59%
          </Typography>
          <Typography fontSize={"0.8rem"} color={"text.secondary"}>
            Goal Avhieved
          </Typography>
          <Box bgcolor={"#4834fd7f"} height={"2px"} mt={1} />
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography fontFamily={"Poppins"} fontWeight={600} fontSize={"1rem"}>
            $300
          </Typography>
          <Typography fontSize={"0.8rem"} color={"text.secondary"}>
            Est. Monthly Income
          </Typography>
          <Box bgcolor={"#4834fd7f"} height={"2px"} mt={1} />
        </Grid>
      </Grid>
      <Box mt={5} width={"100%"} height={"15rem"} pb={0}>
        <Typography mb={2} fontWeight={500} fontFamily={"Noto Serif"}>
          Contributions Overtime
        </Typography>
        <BarChart />
      </Box>

      <Box mt={10}>
        <Typography fontWeight={600}>How do I compare my peers?</Typography>
        <Typography variant="caption" color={"text.secondary"}>
          Those numbers represent current goal achivement
        </Typography>

        <Grid container spacing={3} width={'100%'} mt={1}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box display={"flex"} >
                <Typography fontSize={"0.8rem"} fontWeight={500}>
                  Age:
                </Typography>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"0.8rem"}
                  px={1}
                >
                  Under 30 <Icon icon="gridicons:dropdown" />{" "}
                </Typography>
              </Box>
              <Divider sx={{ mt: 1 }} />
            </Box>
            <Box>
              <Box display={"flex"} mt={3}>
                <Typography fontSize={"0.8rem"} fontWeight={500}>
                  Salary:
                </Typography>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"0.8rem"}
                  px={1}
                >
                  Under 30 <Icon icon="gridicons:dropdown" />{" "}
                </Typography>
              </Box>
              <Divider sx={{ mt: 1 }} />
            </Box>
            <Box>
              <Box display={"flex"} mt={3}>
                <Typography fontSize={"0.8rem"} fontWeight={500}>
                  Gender:
                </Typography>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"0.8rem"}
                  px={1}
                >
                  Under 30 <Icon icon="gridicons:dropdown" />{" "}
                </Typography>
              </Box>
              <Divider sx={{ mt: 1 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} gap={'1rem'}>
            <Box textAlign={"center"}>
              <Box width={"7rem"} height={"7rem"}>
                <CircularBarChart value={78} />
              </Box>
              <Typography variant="caption">Average</Typography>
            </Box>
            <Box textAlign={"center"}>
              <Box width={"7rem"} height={"7rem"}>
                <CircularBarChart value={95} />
              </Box>
              <Typography variant="caption">Top</Typography>
            </Box>
            <Box textAlign={"center"}>
              <Box width={"7rem"} height={"7rem"}>
                <CircularBarChart value={59} />
              </Box>
              <Typography variant="caption">Me</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Two;
