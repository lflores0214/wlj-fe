import React from "react";
import { connect } from "react-redux";
import { Link as RouterLink,  } from "react-router-dom";
import { Flex, Box, Link, Button } from "@chakra-ui/core";

import ThemeToggler from "./ThemeToggler";
import { userLogOut } from "../redux/user/user.actions";

const Header = ({ isLoggedIn, userLogOut }) => {
  return (
    <>
    
      <Flex justifyContent="space-between">
        <ThemeToggler />
        <Box py={4} mr={12}>
          {isLoggedIn ? (
            <Button variant="link" onClick={userLogOut}>
              Logout
            </Button>
          ) : (
            <Link as={RouterLink} to="/login">
              {" "}
              Log in{" "}
            </Link>
          )}
        </Box>
      </Flex>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  userLogOut: () => dispatch(userLogOut()),
});
const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.isLoggedIn,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
