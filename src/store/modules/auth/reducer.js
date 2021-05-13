import produce from 'immer';

const INITIAL_STATE = {
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'SIGN_IN_SUCCESS': {
        draft.token = action.token;
        break;
      }
      default:
    }
  });
}
