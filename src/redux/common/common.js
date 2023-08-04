export const isPendingAction = (action) => {
  return action.type.endsWith("pending");
};

export const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
