import React from 'react'
import { Grid,  Typography } from "@mui/material";

export const HomeText = (props) => {
  const {text} = props
  return (
    <Grid mt={2}>
        <Typography align="center" mt={2} variant="h4" sx={{ fontWeight: "550" }}>
          {text.text1}
        </Typography>
        <Typography mt={2} align="center" sx={{ color: "#7D879C" }}>
          {text.text2}
        </Typography>
      </Grid>
  )
}
