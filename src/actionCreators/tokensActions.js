export const getAccessToken = (access_token) => {
  return {
      type: 'STORE_TOKEN',
      token: access_token
  }
}
