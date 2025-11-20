function UsernameComponent({ user, username, emoji }) {
  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-content">
          <p className="font-bold text-gray-200">{username}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </>
  );
}

export default UsernameComponent;
