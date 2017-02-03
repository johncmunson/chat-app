export default function addThread(id, title) {
    return {
        type: 'ADD_THREAD',
        id: id,
        title: title
    }
}
