export default function appRender(state, action) {
  switch (action.type) {
    case "ADD_EMP":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "EDIT_EMP":
      const updatedEmp = action.payload;
      const updatedEmployees = state.employees.map((emp) => {
        if (emp.id === updatedEmp.id) {
          return updatedEmp;
        }
        return emp;
      });
      return {
        ...state,
        employees: updatedEmployees,
      };
    case "REMOVE_EMP":
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload),
      };
    default:
      return state;
  }
}
