import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import Anmol_Sahota_Resume from "../screenshot/Anmol-Sahota-Resume.pdf";
import styles from "../styles/navbar.module.css";
import Dark from "./Dark";

import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../screenshot/As_Logo.png";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorModeValue("black", "white");
  const bg2 = useColorModeValue("#ffffff", "#1a202c");
  const collogo = useColorModeValue(Logo, Logo);
  function ColoredFirstLetter({ text, color }) {
    return (
      <span>
        <span style={{ color }}>{text.charAt(0)}</span>
        {text.slice(1)}
      </span>
    );
  }
  return (
    <Box
      id={styles["nav-menu"]}
      fontSize={"14px"}
      fontWeight={400}
      // border={"1px solid red"}
    >
      <Box
        id="nav-menu"
        position="sticky"
        top="0"
        zIndex="100"
        className={styles.navbar}
        bg={bg2}
        color={color}
      >
        <Flex minWidth="max-content" alignItems="center">
          <Box
            paddingLeft={"5%"}
            display="flex"
            alignItems={"center"}
            // border={"1px solid red"}
          >
            {/* <Img h="40px" mr="10px" src={collogo} alt="" /> */}
            <a href="#home">
              <Heading id="user-detail-name" size="md">
                <ColoredFirstLetter text="Anmol" color={"green"} />
              </Heading>
            </a>
          </Box>
          <Spacer />
          <Box display={{ base: "none", md: "block" }}>
            <Flex alignItems="center" gap="8">
              <Box p="2">
                <Button colorScheme="black" variant="link">
                  <a className="nav-link home" href="#home">
                    Home
                  </a>
                </Button>
              </Box>
              <Box p="2">
                <Button colorScheme="black" variant="link">
                  <a className="nav-link about" href="#about">
                    About
                  </a>
                </Button>
              </Box>
              <Box p="2">
                <Button colorScheme="black" variant="link">
                  <a className="nav-link skills" href="#skills">
                    Skills
                  </a>
                </Button>
              </Box>
              <Box p="2">
                <Button colorScheme="black" variant="link">
                  <a className="nav-link projects" href="#projects">
                    Projects
                  </a>
                </Button>
              </Box>
              <Box p="2">
                <Button colorScheme="black" variant="link">
                  <a className="nav-link contact" href="#contact">
                    Contact
                  </a>
                </Button>
              </Box>
              <Box p="2">
                <Button colorScheme="black" variant="link" id="resume-button-1">
                  <a
                    id="resume-link-1"
                    className="nav-link resume"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1KRwcB_ihSyFaEw4u7n-7PZZ1dDLzctjr/view?usp=drive_link"
                      )
                    }
                    target="_blank"
                    href={Anmol_Sahota_Resume}
                    download
                  >
                    Resume
                  </a>
                </Button>
              </Box>
              <Box>
                <Text marginRight={"20px"}>
                  <Dark />
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<HamburgerIcon />}
              variant="ghost"
              size="lg"
              onClick={onOpen}
              aria-label="Open menu drawer"
            />
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                {/* <DrawerHeader>Menu</DrawerHeader> */}
                <DrawerBody>
                  <Flex direction="column" gap="2">
                    <Box>
                      <Button variant="link" color={color}>
                        <a href="#home">Home</a>
                      </Button>
                    </Box>
                    <Box>
                      <Button variant="link" color={color}>
                        <a href="#about">About</a>
                      </Button>
                    </Box>
                    <Box>
                      <Button variant="link" color={color}>
                        <a href="#skills">Skills</a>
                      </Button>
                    </Box>
                    <Box>
                      <Button variant="link" color={color}>
                        <a href="#projects">Projects</a>
                      </Button>
                    </Box>
                    <Box>
                      <Button variant="link" color={color}>
                        <a href="#contact">Contact</a>
                      </Button>
                    </Box>
                    <Box>
                      <Button variant="link" color={color}>
                        <a
                          onClick={() =>
                            window.open(
                              "https://drive.google.com/file/d/1KRwcB_ihSyFaEw4u7n-7PZZ1dDLzctjr/view?usp=drive_link"
                            )
                          }
                          target="_blank"
                          href={Anmol_Sahota_Resume}
                          download
                        >
                          Resume
                        </a>
                      </Button>
                    </Box>
                    <Box>
                      <Dark />
                    </Box>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
