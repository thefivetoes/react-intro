import u from 'updeep';

function config(state={}, action={}) {
  if (action.payload && action.payload.config) {
    return u(action.payload.config, state);
  }
  return state;
}

/**
 * Merge and export
 */
export default config;
