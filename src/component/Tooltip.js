import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function Tool_tip({position}){
  const message =`Thanks for hovering! I'm a tooltip`;
  return (
    <Box sx={{ width: 500 }} textAlign={"center"}>
          <Tooltip sx={{ fontSize: 500 }} title={message} placement={!position ? "top" : position} arrow>
            <Button className="btn">Hover Over Me</Button>
          </Tooltip>
    </Box>
  );
}
