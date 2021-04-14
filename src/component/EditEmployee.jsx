import { Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export default function EditEmployee({ id }) {
  const { addEmployee, employees } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployees = {
      id: employees.length + 1,
      name,
      location,
      role,
    };

    addEmployee(newEmployees);
    setName("");
    setLocation("");
    setRole("");
  };

  //   useEffect(()=>{
  //       setName =
  //   })

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
              Primary
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
