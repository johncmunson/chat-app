export default function addMessage(text, threadId) {
  return {
    type: 'ADD_MESSAGE',
    text: text,
    threadId: threadId,
  };
}
