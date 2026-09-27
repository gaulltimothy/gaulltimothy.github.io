# 03 · Skill extraction

Once a stage is mapped, this file turns it into something an AI can run and a person can learn from.

Do one at a time. Start with the highest-frequency stage tagged **mechanical** or **hybrid**, not the hardest one. The first skill's job is to prove the format works.

---

## Instructions to the AI

You are converting one mapped stage into a written skill. You have the map block for that stage and the context pack. Your job is to make the stage runnable by someone who wasn't in the room when it was designed.

**Rules:**

1. **Read the map block first.** Everything in it is already confirmed. Don't re-interview what's recorded. Interview only the gaps.
2. **Interview for what the map doesn't hold.** A map records *what* decision gets made. A skill needs *how*: the order things get checked, which check comes first because it rules out the most work fastest, and what a wrong answer looks like.
3. **Ask for three worked examples.** One clear yes, one clear no, and one that was genuinely close. The close one teaches more than the other two combined, and it's the one the skill will be tested against.
4. **Write the skill to the template below, with no deviation.** A fixed shape is what lets skills compose. It also lets someone scan six of them without relearning the format each time.
5. **Carry `[UNCONFIRMED]` markers through.** Never resolve an unknown by inventing a plausible value.
6. **Every skill declares its escalation path.** It says what it must not decide alone, and who that goes to.
7. **Draft, don't publish.** A new skill is marked `Status: draft` until it passes verification (file 05). Draft skills can be run, but nobody trusts their output unattended.

---

## Skill template

```markdown
# Skill: [name]

Status:          draft | active
Owner:           who owns the judgment in this skill
Last confirmed:  YYYY-MM-DD
Version:         1.0
Maps to:         Stage N in the service delivery map

## When to use
The trigger. Be specific enough that it's never ambiguous whether this applies.

## When not to use
The near-misses that should route elsewhere. This section prevents more errors
than the one above it.

## Inputs
What must be in hand, and where it comes from. Name the files and folders.

## Procedure
1. ...
2. ...
Ordered. Cheapest disqualifying check first.

## Judgment rules
The criteria, with numbers, quoted from the owner.
Each one tagged: (confirmed) or [UNCONFIRMED].
Include the exceptions: when the rule gets broken and on what basis.

## Output format
Exactly what this produces, in what shape, filed where.
Every number carries its source. A figure that can't name a source is
emitted with a flag, never silently.

## Definition of done
A checkable list. If any item fails, the output isn't finished.

## Failure modes
What has gone wrong here before, and the tell that it's happening again.

## Escalation
What this skill must not decide alone, and who it goes to.

## Changelog
YYYY-MM-DD · what changed and which case prompted it
```

---

## Composing skills

Skills chain when the output format of one matches the input of the next. That's the whole mechanism. You don't need an orchestration framework to start.

Intake triage produces a triage record. The estimating skill takes a triage record as its input. The scheduling skill takes an approved estimate. Because each one declares its shape, the chain is easy to read, and any link can be swapped out or run by hand without breaking the others.

This is also the practical answer to portability. A skill written this way doesn't depend on which model runs it. A tool someone built for you on another platform becomes just another link, as soon as its inputs and outputs are declared in the same format. You keep the tool and lose the lock-in.

---

## Later: apprentice mode

Once skills are active and verified, you can add a teaching layer. Not yet, though. A skill has to be right before it's worth learning from.

Here is the design for when you get there. With apprentice mode on, the skill holds back its answer. It shows the new hire the inputs and asks for their call first. Then it reveals its own answer, the rule it used, the facts that triggered that rule, and the evidence that pointed the other way and why it lost. The new hire commits to an answer, then compares.

Two details make it work. The new hire answers **before** they read the skill's reasoning. That order is the whole mechanism. And every disagreement gets logged, because the pattern in those disagreements is the curriculum. After thirty of them you know precisely what they can't see yet, which is something no training plan written in advance can tell you.

A skill that only gives the answer trains button-pushers. A skill that gives the answer and the reasoning trains people who can eventually make the call themselves.

---

*The AI Foundation Kit by Timothy Gaull · timothygaull.com · Free to use and share. Want help running it? Request an intro call at timothygaull.com/intro-call/*
