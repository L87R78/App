const phonePrefixes = {
  BG: '+359',
};

const responseHTTPcodes = {
  accepted: 202,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  requestTimeout: 408,
  tooManyRequests: 429,
  internalServerError: 500,
} as const; // TODO: Add more status codes

const clientIdentification = [
  {
    label: 'UCN',
    value: 'UCN',
  },
  {
    label: 'ID',
    value: 'ID',
  },
];

/* eslint-disable no-unused-vars */
export enum ResponseStatus {
  IDLE,
  PENDING,
  FULFILLED,
  REJECTED,
}

export enum OnboardingStep {
  StartService = 'START_SERVICE',
}

export { clientIdentification, phonePrefixes, responseHTTPcodes };
