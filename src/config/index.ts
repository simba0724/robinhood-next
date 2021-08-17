import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export const MARKET_ADDRESS = publicRuntimeConfig.MARKET;
export const MEDIA_ADDRESS = publicRuntimeConfig.MEDIA;
export const KET_ADDRESS = publicRuntimeConfig.RBH;
export const FLEEK_API_KEY = publicRuntimeConfig.FLEEK_API_KEY;
export const FLEEK_API_SECRET = publicRuntimeConfig.FLEEK_API_SECRET;

export const API_ENDPOINT = publicRuntimeConfig.API_ENDPOINT;
