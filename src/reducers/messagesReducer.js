import uuid from 'uuid'
import moment from 'moment'

export default function messagesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage = {
                text: action.text,
                timestamp: moment(Date.now()).fromNow(),
                id: uuid.v4(),
            };
            return state.concat(newMessage);
        }
        case 'DELETE_MESSAGE': {
            const messageIndex = state.findIndex((m) => m.id === action.id);
            return [
                ...state.slice(0, messageIndex),
                ...state.slice(
                  messageIndex + 1, state.length
                ),
            ];
        }
        default: {
          return state;
        }
    }
}
