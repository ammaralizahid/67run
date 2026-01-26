/**
 * Type Definitions
 * 
 * This file contains shared TypeScript type definitions.
 * Add your types, interfaces, and enums here.
 */

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';
