import { TEST } from './types';

export const incr = () => dispatch => {
  dispatch({ type: TEST })
}
