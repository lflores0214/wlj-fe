import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogIn } from "../../redux/user/user.actions";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  CircularProgress,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";

import ErrorMessage from "../../components/ErrorMessage";

const LoginForm = ({ userLogIn }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    userLogIn(userInfo);
  };
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box
          my={4}
          textAlign="left"
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          {isLoggedIn ? (
            <Box textAlign="center">
              <Text>{userInfo.username} logged In!</Text>
              <Button
                variantColor="orange"
                variant="outline"
                width="full"
                mt={4}
                onClick={() => setIsLoggedIn(false)}
              >
                Sign Out
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && <ErrorMessage message={error} />}
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  isRequired
                  size="lg"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="password"
                    isRequired
                    size="lg"
                    onChange={handleChange}
                  />
                  <InputRightElement width="3rem">
                    <Button
                      h="1.5rem"
                      size="sm"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? (
                        <Icon name="view-off" />
                      ) : (
                        <Icon name="view" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button width="full" mt={4} type="submit">
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" />
                ) : (
                  "SignIn"
                )}
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

const mapDispatchToProps = {
  userLogIn,
};
export default connect(null, mapDispatchToProps)(LoginForm);
