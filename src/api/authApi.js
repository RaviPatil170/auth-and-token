export async function refreshAccessToken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accessToken: "new-access-token-789",
      });
    }, 1000);
  });
}
