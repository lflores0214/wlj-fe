import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/core";

const JournalEntry = ({
  entry,
  workoutName,
  reps,
  sets,
  weight,
  createAt,
  bodyRegion,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log(entry)
  for (const key in entry.workout) {
      console.log(`${key}: ${entry[key]}`)
  }
  return (
    <Box width="20%" borderWidth="1px" rounded="sm">
      <Editable
        textAlign="center"
        defaultValue={workoutName}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      
    </Box>
  );
};
const mapStateToProps = ({ journal }) => ({
  entry: journal.workouts,
});
export default connect(mapStateToProps)(JournalEntry);
