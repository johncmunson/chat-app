export default function modalReducer(state = false, action) {
    switch (action.type) {
        case 'OPEN_MODAL': {
          return !state;
        }
        case 'CLOSE_MODAL': {
            return !state;
        }
        default: {
          return state;
        }
    }
}
