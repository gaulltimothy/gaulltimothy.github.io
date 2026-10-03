-- Client feedback from /feedback/ (a private link Tim sends to clients after a project).
-- Answers become quotes for case studies only after the client approves the exact wording.
-- ok_name / ok_photo: 1 when the client ticked that permission.
CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  before_state TEXT,
  tried TEXT,
  why_hire TEXT,
  first_meeting TEXT,
  first_look TEXT,
  now_can TEXT,
  timing TEXT,
  advice TEXT,
  anything_else TEXT,
  ok_name INTEGER NOT NULL DEFAULT 0,
  ok_photo INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS feedback_created ON feedback (created_at);
