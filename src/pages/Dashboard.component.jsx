import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Flex, Box, IconButton } from "@chakra-ui/core";
import JournalEntry from "../components/JournalEntry.component";
import ErrorMessage from "../components/ErrorMessage";

import { getJournal } from "../redux/workouts/workout.actions";
import WorkoutInput from "../components/WorkoutInput.component";

const Dashboard = ({
  id,
  userError,
  journalError,
  getJournal,
  token,
  entries,
  isLoggedIn,
  history,
}) => {
  useEffect(() => {
    if (isLoggedIn === false) {
      history.push("/login");
    } else {
      getJournal(token, id);
    }
  }, [isLoggedIn, id]);

  const [isOpen, setIsOpen] = useState(false);
  
  const errorMessage = () => {
    return journalError ? journalError.message : userError.message;
  };
  return (
    <>
      {!isLoggedIn && <Redirect to="/login" />}
      {entries.length ? (
        <>
          <Flex textAlign="center" justifyContent="center">
            {userError || journalError ? (
              <ErrorMessage message={errorMessage} />
            ) : null}
            {entries.map((entry) => (
              <JournalEntry
                key={entry.id}
                workoutName={entry.workout}
                reps={entry.reps}
                sets={entry.sets}
                weight={entry.weight}
                notes={entry.notes}
                bodyRegion={entry.body_region}
                date={entry.created_at}
              />
            ))}
          </Flex>
          <Box position="absolute" bottom="20" right="20">
            <IconButton aria-label="add workout" icon="add" isRound onClick={() => setIsOpen(true)} />
          </Box>
          {isOpen && <WorkoutInput isOpen={isOpen}  setIsOpen={setIsOpen}/>}
        </>
      ) : (
        <>
          <Box textAlign="center">There are no entries </Box>
          <Box position="absolute" right="0" bottom="0">
            <IconButton aria-label="add workout" icon="add" isRound variant="ghost"/>
          </Box>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ user, journal }) => ({
  id: user.user.id,
  username: user.user.username,
  token: user.token,
  entries: journal.workouts,
  userError: user.error,
  journalError: journal.error,
  isLoggedIn: user.isLoggedIn,
});

const mapDispatchTProps = (dispatch) => ({
  getJournal: (token, id) => dispatch(getJournal(token, id)),
});

export default connect(mapStateToProps, mapDispatchTProps)(Dashboard);
