/**
 * Constants
 * 
 * This file contains application-wide constants.
 * Add your constants here to keep them centralized.
 */

export const APP_NAME = '67run';
export const APP_VERSION = '0.1.0';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts',
} as const;
