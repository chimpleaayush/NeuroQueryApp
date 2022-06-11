export const isDevEnvironment = true;
export const BASE_FEED_API = isDevEnvironment
  ? 'http://feedservice-social.ap-south-1.elasticbeanstalk.com/'
  : 'https://feed-api.handshake.org.in/';
export const BASE_WALLET_URL = isDevEnvironment
  ? 'http://wallet.ap-south-1.elasticbeanstalk.com/'
  : 'https://wallet-api.handshake.org.in/';
export const AUTH_FEED_API = isDevEnvironment
  ? 'http://auth-env-1.eba-g6c3ywd7.ap-south-1.elasticbeanstalk.com/'
  : 'https://auth-api.handshake.org.in/';
