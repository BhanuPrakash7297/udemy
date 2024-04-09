// @ts-nocheck
"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TabContent } from "../TabContent/TabContent";
import { ChangeEvent } from "react";
import Link from "next/link";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-full h-full"
      style={{ backgroundColor: "" }}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Content = () => {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(max-width:600px)");
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="mt-10 ml-10 mr-10 flex-col items-center px-5">
        <div className="top-heading px-10">
          <h1 className="font-bold text-5xl mx-w-[36em]">
            All the skills you need in one place
          </h1>
          <div
            className="mt-4 mx-w-[96rem] text-2xl font-normal"
            style={{ color: "#6a6f73" }}
          >
            From critical workplace skills to technical topics, our catalog
            supports well-rounded professional development.
          </div>
        </div>
        <div className="mt-10">
          <Box sx={{ marginLeft: "-10px", paddingLeft: "0" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              className="font-extrabold"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "black", // Hide the indicator
                },
              }}
            >
              <Tab
                label={
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={"#6a6f73"}
                    sx={{
                      "&:hover": { color: "black" },
                      fontSize: "1rem",
                      display: "inline-block",
                      "&.Mui-selected": { border: "2px solid black" },
                      textTransform: "none",
                    }}
                  >
                    Web Development
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={"#6a6f73"}
                    sx={{
                      "&:hover": { color: "black" },
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Leadership
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={"#6a6f73"}
                    sx={{
                      "&:hover": { color: "black" },
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Data Science
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={"#6a6f73"}
                    sx={{
                      "&:hover": { color: "black" },
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Communication
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={"#6a6f73"}
                    sx={{
                      "&:hover": { color: "black" },
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Business Analytics & Intelligence
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={"#6a6f73"}
                    sx={{
                      "&:hover": { color: "black" },
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Item Seven
                  </Typography>
                }
              />
            </Tabs>
          </Box>
          <div className="ml-6 px-6" style={{ marginTop: "-1px" }}>
            <hr style={{ borderBottom: "1px solid #2d2f31" }}></hr>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f7f9fa" }}>
        <div className="ml-10 mr-10">
          <CustomTabPanel value={value} index={0}>
            <TabContent Title={"webdevelopment"} learnerNumber={1200} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <TabContent Title={"AppDevlopment"} learnerNumber={1200} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TabContent Title={"BLockChanin"} learnerNumber={1200} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <TabContent Title={"DataScience"} learnerNumber={1200} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <TabContent Title={"Mathamatics"} learnerNumber={1200} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}></CustomTabPanel>
          <Link href="/about">
            <div className="ml-12 mt-5 p-2">
              <span
                className="cursor-pointer text-black font-bold py-1 px-5 bg-transparent hover:bg-[#d1d7dc]"
                style={{ border: "1px solid #2d2f31", fontSize: "1.6rem" }}
              >
                Show Web Development Courses
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
