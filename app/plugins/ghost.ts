import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://davidfeinerman.ghost.io',
  key: process.env.GHOST_API_KEY!,
  version: 'v3'
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch((err: any) => {
      throw err;
    });
}

export async function getPost(slug: string) {
  return await api.posts.read({ slug }, { formats: ['html'] });
}
