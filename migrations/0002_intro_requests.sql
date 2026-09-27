-- Intro call requests from /intro-call/. Tim reviews them weekly and sends his private
-- booking link to good fits. status: new, invited, declined.
CREATE TABLE IF NOT EXISTS intro_requests (
  id INTEGER PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  site TEXT,
  team_size TEXT,
  business TEXT NOT NULL,
  pain TEXT NOT NULL,
  timeline TEXT,
  budget TEXT,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);
CREATE INDEX IF NOT EXISTS intro_requests_created ON intro_requests (created_at);
