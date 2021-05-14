import produce from 'immer';

const INITIAL_STATE = {
  drawerVisible: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'SET_DRAWER_VISIBLE': {
        draft.drawerVisible = action.state;
        break;
      }
      default:
    }
  });
}
