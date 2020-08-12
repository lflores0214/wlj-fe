import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJournal } from "../redux/workouts/workout.actions";

import { Flex } from "@chakra-ui/core";
import WorkoutCard from "../components/JournalEntry.component";
import ErrorMessage from "../components/ErrorMessage";

const Dashboard = ({ id, userError, journalError, getJournal, token }) => {
  console.log(id)
  useEffect(() => {
    getJournal(token, id);
  }, []);
const errorMessage= () => {
  if (journalError ) {
    return journalError.message
  }  else {
    return userError.message
  }
}
  return (
    <Flex textAlign="center" justifyContent="center">
      {userError || journalError ? (
        <ErrorMessage message={errorMessage} />
      ) : null}
      <WorkoutCard />
    </Flex>
  );
};

const mapStateToProps = ({ user, journal }) => ({
  user: user,
  id: user.user.id,
  token: user.token,
  username: user.user.username,
  entries: journal.workouts,
  userError: user.error,
  journalError: journal.error,
});

const mapDispatchTProps = (dispatch) => ({
  getJournal: (token, id) => dispatch(getJournal(token, id)),
});

export default connect(mapStateToProps, mapDispatchTProps)(Dashboard);
