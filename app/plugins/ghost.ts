import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://davidfeinerman.ghost.io',
  key: '1bea27ff21ebc99b23dc827f2c',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    }).catch((err: any) => console.error(err))
}
