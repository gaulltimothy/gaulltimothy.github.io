-- Signups for the free kit, and a short-lived log of attempts for rate limiting.
CREATE TABLE IF NOT EXISTS signups (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  wants_updates INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  last_download_at TEXT,
  download_count INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS attempts (ip_hash TEXT NOT NULL, at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS attempts_ip_at ON attempts (ip_hash, at);
