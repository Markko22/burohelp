// API endpoints
export const ENDPOINTS = {
  MAKE_WEBHOOK: 'https://hook.eu2.make.com/yy8do9tldc69m1vi89pknvxownldd06q',
} as const;

// Storage
export const STORAGE = {
  BUCKETS: {
    PDF: 'pdfs',
  },
  DEFAULT_SIGNED_URL_EXPIRY: 3600, // 1 hour in seconds
} as const;