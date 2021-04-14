import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import AddEmployee from "./AddEmployee";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function EmployeeList() {
  const classes = useStyles();
  const { employees, removeEmployee } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const handleClose = () => setOpen(false);
  const handleOpen = (id) => {
    setSelectedID(id);
    setOpen(true);
  };
  return (
    <>
      {employees.length ? (
        <Container maxWidth="lg">
          <Grid container spacing={3} className="marginTop">
            {employees.map((emp) => (
              <Grid item key={emp.id}>
                <Card className="empCard">
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {emp.name}
                    </Typography>
                    <Typography color="textSecondary">
                      {emp.location}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {emp.role}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      fullWidth
                      onClick={() => handleOpen(emp.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      fullWidth
                      onClick={() => removeEmployee(emp.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <AddEmployee id={selectedID} handleClose={handleClose} />
              </div>
            </Fade>
          </Modal>
        </Container>
      ) : (
        <p>No Data Available</p>
      )}
    </>
  );
}

export default EmployeeList;
