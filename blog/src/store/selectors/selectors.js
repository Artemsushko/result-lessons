export const selectRoleId = ({ user }) => user.roleId;
export const selectLogin = ({ user }) => user.login;
export const selectSession = ({ user }) => user.session;
export const selectWasLogout = ({ app }) => app.wasLogout;
export const selectSearch = ({ posts }) => posts.search;
export const selectPost = ({ post }) => post;
export const selectAppError = ({ app }) => app.error;
export const selectComments = ({ comments }) => comments;
