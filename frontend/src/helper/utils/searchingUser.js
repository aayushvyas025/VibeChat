function searchUser(userName, searchTerm) {
  const user = userName.find((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return user;
}

export default searchUser;
