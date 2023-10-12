function SortCompleted(props) {
  let CompletedUsers = [];
  const datera = props.dater.map((user, indekss) => {
    if (user.completed) {
      CompletedUsers.push(user);
    } else {
      return null;
    }
  });
  return console.log(CompletedUsers);
}

export default SortCompleted;
