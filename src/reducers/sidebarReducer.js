export default function sidebarReducer(state = false, action) {
    switch (action.type) {
        case 'OPEN_SIDEBAR': {
          return !state;
        }
        case 'CLOSE_SIDEBAR': {
            return !state;
        }
        default: {
          return state;
        }
    }
}
