function SortCompleted(props) {
  let CompletedUsers = [];
  const datera = props.dater.map(user => {
    if (user.completed) {
      console.log(user.title);
      return <h1> {user.title} </h1>;
    }
  });
}

export default SortCompleted;
