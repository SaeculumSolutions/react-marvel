const envConfig = import.meta.env;

export default {
  COMIC: {
    GET_COMIC_LIST: `${envConfig.VITE_API_BASE_URL}/v1/public/comics?format=comic&formatType=comic&limit={{limit}}&offset={{offset}}&orderBy={{orderBy}}&apikey=${envConfig.VITE_MARVEL_API_SECRET}&hash=${envConfig.VITE_MARVEL_HASH}&ts=${envConfig.VITE_MARVEL_HASH_TS}`,
  },
};
