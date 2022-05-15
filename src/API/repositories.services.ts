import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchGHRepositories = async (
  query = '',
  page = 1,
  // eslint-disable-next-line camelcase
  per_page = 10,
// eslint-disable-next-line no-return-await
) => await axios.get(
  // eslint-disable-next-line camelcase
  `${BASE_URL}/search/repositories?q=${query}&page=${page}&per_page=${per_page}`,
);

// eslint-disable-next-line no-return-await
export const getCollaborators = async (url: string) => await axios.get(url.replace(/{\/collaborator}/, ''), {
  headers: {
    authorization: `Basic ${btoa('tolulope-od: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')}`,
  },
});
