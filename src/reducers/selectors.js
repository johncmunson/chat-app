export function getActiveThread(state) {
    return state.threads.find(
      t => t.id === state.activeThreadId
    )
}

export function getTabs(state) {
    return state.threads.map(t => (
        {
          title: t.title,
          active: t.id === state.activeThreadId,
          id: t.id,
        }
    ))
}

export function getNumTabs(state) {
    return state.threads.length;
}
