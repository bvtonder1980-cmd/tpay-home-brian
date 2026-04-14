import secureLocalStorage from 'react-secure-storage';

export interface TokenData {
  success: boolean;
  access_token?: string;
  refresh_token?: string;
  timeIssued?: Date;
  timeExpires?: Date;
  error?: any;
}

// Cache for authentication state to avoid repeated API calls
let authStateCache: { 
  isAuthenticated: boolean; 
  lastChecked: number; 
  token: TokenData | null 
} | null = null;

const CACHE_DURATION = 30000; // 30 seconds cache

/**
 * Fast authentication check that uses cached state when possible
 * Only makes API calls when cache is expired or doesn't exist
 * Safe for SSR - returns false if window is not available
 */
export const getAuthState = async (): Promise<{ isAuthenticated: boolean; token: TokenData | null }> => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return { isAuthenticated: false, token: null };
  }

  const now = Date.now();
  
  // Return cached result if still valid
  if (authStateCache && (now - authStateCache.lastChecked) < CACHE_DURATION) {
    return {
      isAuthenticated: authStateCache.isAuthenticated,
      token: authStateCache.token
    };
  }

  // Check localStorage first for immediate response
  const storedToken = secureLocalStorage.getItem("authToken");
  if (!storedToken) {
    authStateCache = {
      isAuthenticated: false,
      lastChecked: now,
      token: null
    };
    return { isAuthenticated: false, token: null };
  }

  let token: TokenData;
  try {
    token = JSON.parse(storedToken as string);
  } catch {
    authStateCache = {
      isAuthenticated: false,
      lastChecked: now,
      token: null
    };
    return { isAuthenticated: false, token: null };
  }

  // Check if token has basic required fields
  if (!token.access_token || !token.success) {
    authStateCache = {
      isAuthenticated: false,
      lastChecked: now,
      token: null
    };
    return { isAuthenticated: false, token: null };
  }

  // For initial load, assume token is valid if it exists and has required fields
  // This prevents the flash of home page before redirect
  // Note: Actual verification will happen in the background via getCurrentToken
  authStateCache = {
    isAuthenticated: true,
    lastChecked: now,
    token: token
  };

  return { isAuthenticated: true, token: token };
};

/**
 * Synchronous authentication check for immediate UI decisions
 * Only checks localStorage, no API calls
 * Safe for SSR - returns false if window is not available
 */
export const getAuthStateSync = (): { isAuthenticated: boolean; token: TokenData | null } => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return { isAuthenticated: false, token: null };
  }

  const storedToken = secureLocalStorage.getItem("authToken");
  if (!storedToken) {
    return { isAuthenticated: false, token: null };
  }

  try {
    const token = JSON.parse(storedToken as string);
    const isAuthenticated = !!(token.access_token && token.success);
    return { isAuthenticated, token: isAuthenticated ? token : null };
  } catch {
    return { isAuthenticated: false, token: null };
  }
};

/**
 * Clear the authentication cache
 */
export const clearAuthCache = (): void => {
  authStateCache = null;
};

/**
 * Update the authentication cache
 */
export const updateAuthCache = (isAuthenticated: boolean, token: TokenData | null): void => {
  authStateCache = {
    isAuthenticated,
    lastChecked: Date.now(),
    token
  };
};
