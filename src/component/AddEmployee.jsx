import { Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";

import { GlobalContext } from "../context/GlobalState";

function AddEmployee({ id, handleClose }) {
  const { addEmployee, employees, editEmployee } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployees = {
      name,
      location,
      role,
    };

    if (id) {
      newEmployees.id = id;
      editEmployee(newEmployees);
      handleClose();
    } else {
      newEmployees.id = employees.length + 1;
      addEmployee(newEmployees);
      setName("");
      setLocation("");
      setRole("");
    }
  };

  useEffect(() => {
    if (id) {
      const [employe] = employees.filter((emp) => emp.id === id);
      setName(employe.name);
      setLocation(employe.location);
      setRole(employe.role);
    }
  }, [id, employees]);

  return (
    <Container maxWidth="lg">
      <form noValidate autoComplete="off">
        <Grid container spacing={3} className="marginTop formContainer">
          <Grid item>
            <TextField
              required
              id="name-required"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="location-required"
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="role-required"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              {id ? "Edit" : "Add"}
            </Button>
            {id && (
              <Button variant="text" onClick={handleClose}>
                <CloseIcon />
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AddEmployee;
