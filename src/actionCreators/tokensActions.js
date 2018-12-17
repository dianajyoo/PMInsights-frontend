export const getAccessToken = (access_token) => {
  return {
      type: 'GET_ACCESS_TOKEN',
      token: access_token
  }
}
