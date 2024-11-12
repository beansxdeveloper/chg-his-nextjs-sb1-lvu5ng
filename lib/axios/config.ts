export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export const API_TIMEOUT = 15000; // 15 seconds

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;