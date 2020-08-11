import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/core";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <Flex justifyContent="space-between">
      <ThemeToggler />
      <Box py={4} mr={12} >
        <Link as={RouterLink} to="/login">
          {" "}
          Log in{" "}
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
