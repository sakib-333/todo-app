export const CreateTodo = (title, whatTodo) => {
  const currentTime = new Date();
  const createdTime = `${currentTime.toDateString()} ${currentTime.toLocaleTimeString()}`;

  return {
    id: crypto.randomUUID(),
    title,
    whatTodo,
    isCompleted: false,
    createdTime,
  };
};
