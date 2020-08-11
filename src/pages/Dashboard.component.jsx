import React, { useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Flex } from "@chakra-ui/core";

import WorkoutCard from "../components/WorkoutCard.component";

const Dashboard = () => {

  useEffect(() => {
    axiosWithAuth().get()
  })
  return (
    <Flex textAlign="center" justifyContent="center">
      <WorkoutCard />
    </Flex>
  );
};

export default Dashboard;
