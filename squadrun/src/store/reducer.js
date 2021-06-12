import { ACTIONS } from "./action";

export const initialState = {
  selectedPriceRange: "",
};

export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.SET_PRICE_RANGE: {
      return {
        ...state,
        selectedPriceRange: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
