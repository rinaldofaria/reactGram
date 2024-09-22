import { resetMessage } from "../slices/photoSlice";

export const useResetComponentMessage = (dispatch, time = 2000) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, time);
  };
};
