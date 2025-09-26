// lib/sessionCache.ts
let cachedSession: any = null;

export function getCachedSession() {
  return cachedSession;
}

export function setCachedSession(session: any) {
  cachedSession = session;
}
