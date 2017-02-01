export default function deleteMessage(id) {
  return {
    type: 'DELETE_MESSAGE',
    id: id,
  };
}
