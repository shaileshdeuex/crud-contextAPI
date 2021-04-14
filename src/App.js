import { Typography } from "@material-ui/core";
import "./App.css";
import AddEmployee from "./component/AddEmployee";
import EmployeeList from "./component/EmployeeList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Typography variant="h3">CRUD With React Context API</Typography>
        <AddEmployee />
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App;
