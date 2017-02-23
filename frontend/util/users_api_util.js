export const fetchUsers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/users'
  });
}

export const fetchUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`
  });
}

export const newUserFollow = (followerId, followingId) => {
  return $.ajax({
    method: 'post',
    url: `api/users/${followingId}/user_follows`,
    data: { follower_id: followerId }
  });
};

export const deleteUserFollow = (followingId, followId) => {
  return $.ajax({
    method: 'delete',
    url: `api/users/${followingId}/user_follows/${followId}`
  });
};
