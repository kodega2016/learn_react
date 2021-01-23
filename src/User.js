function User(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>{props.user.job}</p>
    </div>
  );
}
export default User;
