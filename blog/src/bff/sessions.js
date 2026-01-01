export const sessions = {
  list: {},
  create(user) {
    const hash = Math.random().toFixed(50);
    this.list[hash] = user;
    return hash;
  },
  remove(hash) {
    delete this.list[hash];
  },
  add(hash, user) {
    this.list[hash] = user;
  },
  access(hash, accessRoles) {
    const user = this.list[hash];

    if (!user) return false;

    const userRoleId = Number(user.roleId ?? user.role_id);

    return accessRoles.includes(userRoleId);
  },
};
