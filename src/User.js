function User(props) {
  return (
    <div className="card mb-1">
      <div className="card-body">
        <p>{props.user.name}</p>
        <p>{props.user.job}</p>
        {props.user.active && (
          <button className="btn btn-success btn-sm" onClick={props.onClick}>
            Connect with this user
          </button>
        )}
      </div>
    </div>
  );
}
export default User;
