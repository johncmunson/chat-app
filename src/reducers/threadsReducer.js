import messagesReducer from './messagesReducer'

function findThreadIndex(threads, action) {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return threads.findIndex(
        (t) => t.id === action.threadId
      );
    }
    case 'DELETE_MESSAGE': {
      return threads.findIndex(
        (t) => t.messages.find((m) => (
          m.id === action.id
        ))
      );
    }
    // no default
  }
}

export default function threadsReducer(state = [
    {
        id: '1-fca2',
        title: 'Buzz Lightyear',
        messages: [{
          text: 'To infinity and beyond!',
          timestamp: Date.now(),
          id: '453-2sd09-ad23',
        }]
    },
    {
        id: '2-be91',
        title: 'Michael Collins',
        // Setting the first argument to undefined means that we are allowing messagesReducer the opportunity to set the initial state
        messages: messagesReducer(undefined, {})
    },
], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'DELETE_MESSAGE': {
            const threadIndex = findThreadIndex(state, action);
            const oldThread = state[threadIndex];
            const newThread = {
                ...oldThread,
                messages: messagesReducer(oldThread.messages, action)
            };
            return [
                ...state.slice(0, threadIndex),
                newThread,
                ...state.slice(threadIndex + 1, state.length)
            ];
        }
        case 'ADD_THREAD': {
            const newThread = {
                id: action.id,
                title: action.title,
                messages: []
            }
            return state.concat(newThread);
        }
        case 'DELETE_THREAD': {
            const threadIndex = state.findIndex((t) => t.id === action.id);
            return [
                ...state.slice(0, threadIndex),
                ...state.slice(
                  threadIndex + 1, state.length
                ),
            ];
        }
        default: {
            return state;
        }
    }
}
