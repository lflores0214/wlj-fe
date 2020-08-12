import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJournal } from "../redux/workouts/workout.actions";

import { Flex } from "@chakra-ui/core";
import WorkoutCard from "../components/JournalEntry.component";
import ErrorMessage from "../components/ErrorMessage";

const Dashboard = ({
  id,
  user,
  username,
  entires,
  userError,
  journalError,
  getJournal,
}) => {
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    console.log(id);
    console.log(user);
    getJournal(token, id);
  }, []);
  
  return (
    <Flex textAlign="center" justifyContent="center">
      {userError || journalError ? <ErrorMessage message={journalError.message}/> : null}
      <WorkoutCard />
    </Flex>
  );
};

const mapStateToProps = ({ user, journal }) => ({
  user: user,
  id: user.id,
  username: user.username,
  entries: journal.workouts,
  userError: user.error,
  journalError: journal.error,
});

const mapDispatchTProps = (dispatch) => ({
  getJournal: (token, id) => dispatch(getJournal(token, id)),
});

export default connect(mapStateToProps, mapDispatchTProps)(Dashboard);
