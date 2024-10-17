export const UpdateTodo = (id, title, whatTodo) => {
  const currentTime = new Date();
  const createdTime = `${currentTime.toDateString()} ${currentTime.toLocaleTimeString()}`;

  return {
    id,
    title,
    whatTodo,
    isCompleted: false,
    createdTime,
  };
};
