function User(props) {
  return (
    <div
      style={{
        backgroundColor: "#f0efeb",
        padding: "10px",
        marginTop: "5px",
        borderRadius: "4px",
      }}
    >
      <p>{props.user.name}</p>
      <p>{props.user.job}</p>
      {props.user.active && (
        <button onClick={props.onClick}>Connect with this user</button>
      )}
    </div>
  );
}
export default User;
