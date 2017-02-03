export default function deleteThread(id) {
    return {
        type: 'DELETE_THREAD',
        id: id
    }
}
