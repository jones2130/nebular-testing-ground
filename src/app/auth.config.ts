export const AUTH_CONFIG = {
  baseEndpoint: '',
  login: {
   endpoint: '/auth/sign-in',
   method: 'post',
  },
  register: {
   endpoint: '/auth/sign-up',
   method: 'post',
  },
  logout: {
    endpoint: '/auth/sign-out',
    method: 'post',
  },
  requestPass: {
    endpoint: '/auth/request-pass',
    method: 'post',
  },
  resetPass: {
    endpoint: '/auth/reset-pass',
    method: 'post',
  },
  alwaysFail: false,
};
