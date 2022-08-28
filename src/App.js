import { Grid, TextField, Typography, Button, Box } from "@mui/material";
import { Stepper, Step } from "react-form-stepper";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import icon from "./icons/new.png";
import PersonIcon from "@mui/icons-material/Person";
import Groups2Icon from "@mui/icons-material/Groups2";
import { HomeText } from "./components";
import Check from "./icons/check.png";
import { useTheme } from "@mui/material";
function App() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");
  const [WordspaceName, setWordSpaceName] = useState("");
  const [url, setUrl] = useState("");
  const [selected, setSelected] = useState("");
  const [isTeam, setIsTeam] = useState(false);
  const [isAlone, setIsAlone] = useState(false);

  const WorkspaceButton = styled(Button)(() => ({
    color: "#fff",
    width: "inherit",
    textTransform: "none",
    height: "50px",
    backgroundColor: "#664DE5",
    "&:hover": {
      backgroundColor: "#664DE5",
    },
  }));
  const onAloneClick = () => {
    if (isTeam) {
      setIsAlone(true);
      setIsTeam(false);
    } else setIsAlone(!isAlone);
  };
  const onTeamClick = () => {
    if (isAlone) {
      setIsTeam(true);
      setIsAlone(false);
    } else setIsTeam(!isTeam);
  };
  const getText = () => {
    switch (activeStep) {
      case 0:
        return {
          text1: "Welcome ! First things first...",
          text2: "You can always change them later.",
        };
      case 1:
        return {
          text1: "Let's set up a home for all your work",
          text2: "You can always create another workspace later.",
        };
      case 2:
        return {
          text1: "How are you planning to use Eden?",
          text2: "we'll streamline your setup experience accordingly",
        };
      case 3:
        return {
          text1: `Congratulations, ${displayName}!`,
          text2: "You have completed onboarding, you can start using the Eden!",
        };
      default:
        return { text1: "", text2: "" };
    }
  };
  const handleClick = () => {
    if (activeStep === 3) {
      setActiveStep(0);
      setDisplayName("");
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyItems: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        [theme.breakpoints.down("sm")]: {
          padding: "10px",
        },
      }}
    >
      {/* <Steppers /> */}
      <Grid sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <img src={icon}></img>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          {" "}
          Eden
        </Typography>
      </Grid>
      <Grid
        sx={{
          width: "450px",
          [theme.breakpoints.down("sm")]: {
            width: "200px",
          },
        }}
      >
        <Stepper
          activeStep={activeStep}
          styleConfig={{
            activeBgColor: "#664DE5",
            completedBgColor: "#664DE5",
          }}
        >
          {["", "", "", ""].map((item, i) => (
            <Step inactiveBgColor="#FFFFFF" key={i} label="" />
          ))}
        </Stepper>
      </Grid>

      {activeStep === 3 && <img src={Check} />}
      <HomeText text={getText()} />
      <Grid
        mt={4}
        sx={{
          width: "450px",
          flexDirection: "column",
          display: "flex",
          gridGap: "11px",
          [theme.breakpoints.down("sm")]: {
            width: "200px",
          },
        }}
      >
        {activeStep === 0 && (
          <>
            <Typography sx={{ fontWeight: "500" }}>Full Name</Typography>
            <TextField
              onChange={(e) => setFullName(e.target.value)}
              required
              fullWidth={true}
              variant="outlined"
            />
            <Typography sx={{ fontWeight: "500" }}>Display Name</Typography>
            <TextField
              onChange={(e) => setDisplayName(e.target.value)}
              required
              fullWidth={true}
              variant="outlined"
            />
          </>
        )}
        {activeStep === 1 && (
          <>
            <Typography sx={{ fontWeight: "500" }}>Workspace Name</Typography>
            <TextField
              onChange={(e) => setWordSpaceName(e.target.value)}
              required
              fullWidth={true}
              variant="outlined"
            />
            <Grid sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "500" }}>Wordspace Url </Typography>
              <Typography sx={{ color: "#707070" }}>(optional) </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "#F8F9FC",
                  border: "1px solid #E8E8E8",
                  padding: "12px",
                }}
              >
                <Typography sx={{ color: "#707070" }}>
                  www.eden.com/{" "}
                </Typography>
              </Box>
              <TextField
                onChange={(e) => setUrl(e.target.value)}
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
          </>
        )}
        {activeStep === 2 && (
          <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box
              onClick={onAloneClick}
              sx={{
                border: `0.5px solid ${isAlone ? "#664DE5" : "#E8E8E8"}`,
                width: "145px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <PersonIcon sx={{ color: "#664DE5" }} />
              <Typography mt={1} sx={{ fontWeight: "500" }}>
                For myself
              </Typography>
              <Typography mt={1} sx={{ color: "#707070" }}>
                Write better. Think more clearly. Stay organized.
              </Typography>
            </Box>
            <Box
              onClick={onTeamClick}
              sx={{
                border: `0.5px solid ${isTeam ? "#664DE5" : "#E8E8E8"}`,
                width: "145px",
                height: "145px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <Groups2Icon sx={{ color: "#664DE5" }} />
              <Typography mt={1} sx={{ fontWeight: "500" }}>
                With my team
              </Typography>
              <Typography mt={1} sx={{ color: "#707070" }}>
                Wikis, docs, tasks & projects,all in one place.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      <Grid sx={{ width: "450px",
     [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    }} mt={4}>
        <WorkspaceButton onClick={handleClick}>
          {activeStep === 3 ? `Launch Eden` : "Create Workspace"}
        </WorkspaceButton>
      </Grid>
    </Grid>
  );
}

export default App;
