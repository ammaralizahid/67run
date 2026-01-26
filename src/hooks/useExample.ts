'use client';

import { useState, useEffect } from 'react';

/**
 * Example Custom Hook
 * 
 * This is a template for creating custom React hooks.
 * Replace this with your actual hooks.
 */
export function useExample() {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Example effect
  }, []);

  return { data, loading, error };
}
