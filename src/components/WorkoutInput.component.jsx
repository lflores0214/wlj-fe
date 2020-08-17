import React, { useState } from "react";
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
} from "@chakra-ui/core";
const WorkoutInput = ({ isOpen, setIsOpen }) => {
  const [workout, setWorkout] = useState({
    workout: "",
    body_region: "",
    weight: 0,
    reps: 0,
    notes: "",
  });
  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add workout </ModalHeader>
          
          <ModalBody>
            <form>
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
            </form>
          </ModalBody>
          <ModalFooter>
              <Button mr={2} >Add Workout</Button>
              <Button onClick={() => setIsOpen(false)} >Cancel </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default WorkoutInput;
