export const selectUser = state => state?.auth;
export const selectIsLoggedInUser = state => state?.auth?.isLoggedIn;
export const selectIsRefreshingUser = state => state?.auth?.isRefreshing;

