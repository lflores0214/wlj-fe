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
  createdAt,
  notes,
  bodyRegion,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box width="15%" borderWidth="1px" rounded="sm" mr={2}>
      <Editable
        textAlign="center"
        defaultValue={workoutName}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        textAlign="center"
        defaultValue={sets}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        textAlign="center"
        defaultValue={reps}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        textAlign="center"
        defaultValue={weight}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        textAlign="center"
        defaultValue={bodyRegion}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        textAlign="center"
        defaultValue={notes}
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
