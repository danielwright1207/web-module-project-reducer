import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_PLUS,
  MEMORY_CLEAR,
  MEMORY_R,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

// #### Task 8: Add in memory functions from scratch.
// > *Congratulations! You have gone through the entire process for adding an action to your app! Now, see if you can follow the same process (reducer case => action creator => UI connection) for the following button functions. IN EACH CASE, ALWAYS TEST YOU FEATURE WORKS BEFORE PROCEEDING FORWARD.*

// * [ ] When `M+` is pressed, the state's current memory value should be set to the current total value. Test by seeing the result of memory in the UI.
// * [ ] When `MR` is pressed, the state's current total value should be set to the current total value applied to the current memory value (See the APPLY_NUMBER case). Test by adding a value to memory and then seeing if the total updates correctly when pressed.
// * [ ] When `MC` is pressed, the state's current memory value should be set to zero. Test by adding a value to memory and then seeing the memory value reset to zero when pressed.

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return { ...state, total: 0 };
    case MEMORY_PLUS:
      return { ...state, memory: state.total };
    case MEMORY_CLEAR:
      return { ...state, memory: 0 };
    case MEMORY_R:
      return { ...state, total: state.memory };
    default:
      return state;
  }
};

export default reducer;
