import React, { useState } from "react";
import { connect } from "react-redux";

import { addEntry } from "../redux/workouts/workout.actions";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure
} from "@chakra-ui/core";

const WorkoutInput = ({ isOpen, setIsOpen, addEntry, token, id }) => {
  const [workout, setWorkout] = useState({
    workout: "",
    body_region: "",
    weight: 0,
    sets: 0,
    reps: 0,
    notes: "",
  });
  const { onClose } = useDisclosure()
  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async() => {
    await addEntry(token, id, workout);
    setIsOpen(false)
  };
 
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add workout </ModalHeader>

          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Exercise</FormLabel>
                <Input
                  id="workout"
                  name="workout"
                  type="text"
                  placeholder="Exercise"
                  isRequired
                  size="md"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Weight</FormLabel>
                <Input
                  id="weight"
                  name="weight"
                  onChange={handleChange}
                  type="number"
                  placeholder={0}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Set</FormLabel>
                <Input
                  id="sets"
                  name="sets"
                  onChange={handleChange}
                  type="number"
                  placeholder={0}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Reps</FormLabel>
                <Input
                  id="reps"
                  name="reps"
                  onChange={handleChange}
                  type="number"
                  placeholder={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Body Region</FormLabel>
                <Input
                  id="body_region"
                  name="body_region"
                  type="text"
                  placeholder="Body Region"
                  size="md"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Notes</FormLabel>
                <Input
                  id="notes"
                  name="notes"
                  type="text"
                  placeholder="Notes"
                  size="md"
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" mr={2}>
                Add Workout
              </Button>
              <Button onClick={() => setIsOpen(false)}>Cancel </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addEntry: (token, id, workout) => dispatch(addEntry(token, id, workout)),
});
const mapStateToProps = ({ user }) => ({
  id: user.user.id,
  username: user.user.username,
  token: user.token,
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutInput);
