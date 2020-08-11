import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/user/user.actions";
import ErrorMessage from "../../components/ErrorMessage";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  InputGroup,
  InputRightElement,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/core";

const RegisterForm = ({ registerUser, isLoading, error, history }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser({
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
    });
    await history.push("/login");
  };
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const passMatch = userInfo.password === userInfo.confirmPassword;

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Register</Heading>
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
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                isRequired
                size="lg"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
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
            <FormControl isRequired>
              <FormLabel> Confirm Password</FormLabel>
              <InputGroup>
                {error ? (
                  <Popover>
                    <PopoverTrigger>
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="confirm password"
                        isRequired
                        size="lg"
                        onChange={handleChange}
                        isInvalid={
                          userInfo.password !== userInfo.confirmPassword
                        }
                      />
                    </PopoverTrigger>
                  </Popover>
                ) : (
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="confirm password"
                    isRequired
                    size="lg"
                    onChange={handleChange}
                    isInvalid={userInfo.password !== userInfo.confirmPassword}
                  />
                )}

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
            <Button width="full" mt={4} type="submit" isDisabled={!passMatch}>
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

const mapStateToProps = ({ user }) => ({
  isLoading: user.isLoading,
  error: user.error,
});

const mapDispatchToProps = {
  registerUser: (userInfo) => registerUser(userInfo),
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
