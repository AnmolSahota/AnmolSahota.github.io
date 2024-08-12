import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
function Dark() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const bg2 = useColorModeValue("#ffffff", "#1a202c");
  return (
    <span>
      <Button
        onClick={toggleColorMode}
        // bg={"#edf2f7"}
        bg={bg2}
        color={color}
        _hover={{ bg: "#EEEEEE", svg: { fill: "black" } }}
      >
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </span>
  );
}

export default Dark;
