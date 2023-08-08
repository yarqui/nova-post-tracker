export const isPendingAction = (action) => {
  return action.type.endsWith("pending");
};

export const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};

export const isFulfilledAction = (action) => {
  return action.type.endsWith("fulfilled");
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.departments = [];
  state.cities = [];
  state.parcel = [];
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};
