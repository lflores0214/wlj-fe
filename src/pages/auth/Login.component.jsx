import React, { useState } from "react";
import axios from "axios";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://weightliftingjournal1.herokuapp.com/api/auth/login",
      userInfo
    )
    .then(response => {
        console.log(response);
        alert(userInfo)
    })
  };
  const handleChange = e => {
    setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value
      })
  }

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
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                isRequired
                size="lg"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                isRequired
                size="lg"
                onChange={handleChange}
              />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
export default LoginForm;
