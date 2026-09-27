# 05 · Verification and retro

This file covers two loops. The first decides whether a new skill can be trusted. The second is what makes the whole system get better over time instead of drifting.

---

## Verification: promoting a draft to active

A skill someone wrote down is a hypothesis about how you think. Test it against cases where you already know the answer.

**Setup.** Pull five past cases the skill has never seen, from the last twelve months. Include at least one that was genuinely close, and at least one you turned down. Easy cases prove nothing, because any reasonable set of rules gets the obvious ones right.

**Run it blind.** The model gets the inputs as they existed at the time. It does not get your notes, the outcome, or what happened next.

**Grade each one:** agree, close, or disagree.

- **Agree** means the same call, and the reasoning names the same rule you were actually using.
- **Close** means the right call for the wrong reason. This counts as a miss. A skill that gets there by the wrong path will fail on the next case that differs, and it teaches a new hire the wrong thing.
- **Disagree** means a different call.

**Promote at four of five agreements.** Below that, the skill is measuring something other than your judgment. Don't tune it just to pass. Find out what it's actually missing, edit the rule, and re-run it against five fresh cases.

**Every disagreement produces one specific, dated edit.** "Be more careful with rush jobs" is not an edit. This is: "Requests marked rush that also need outside finishing get NEED INFO until the finisher confirms a date. Added to judgment rules YYYY-MM-DD, prompted by the case of the powder-coated railings."

**Re-verify quarterly, and after any change to the AI model you use.** Outputs shift when models change. Re-running five known cases takes about twenty minutes, and it's the cheapest insurance in the system.

---

## Retro: the part that compounds

Fifteen minutes, every week, in the same time slot.

Ask three questions:

1. Where did a skill produce something you had to correct?
2. What was the actual rule behind the correction?
3. Which file does that rule belong in: the skill, the context pack, or the map?

Then make the edit. Do it in the same session, not later.

That is the entire mechanism, and it's what separates this from a documentation project. Today, every correction you make to an AI output is spent once. The model gets it right in that conversation and starts fresh tomorrow. Banked into a file, the same correction applies to every future run, to every employee, and to whatever model you're using two years from now.

Most owners already have proof this works. Think of the thing you've spent months refining by hand, whether it's your quote template, your proposal, or the way you walk a new customer through the first job. Those improvements are real and valuable, and right now they exist only as memory. The retro turns them into an asset that doesn't depend on you remembering.

---

## The log

Keep one file, append-only, in your shared drive next to the skills.

```
## YYYY-MM-DD
Skill:      quote-request-triage v1.2
Trigger:    Railing job quoted on the customer's "standard 36 inch" height
Rule:       Customer-stated dimensions are never quoted from; NEED INFO
            until a drawing, a photo with a tape in frame, or a site visit
Filed to:   skills/quote-request-triage.md → judgment rules
Status:     edited, re-verified against 3 prior cases
```

Four lines and a status. You'll be tempted to write more. Resist it. A log nobody maintains teaches nothing, and the value is in how often you do it, not how deep you go.

---

## What this gives you in ninety days

A map of how work actually moves through the business. A context pack that ends the re-briefing. Two or three verified skills with dated changelogs showing they've improved. A retro log proving the loop runs.

That's also the answer to the harder question underneath all of this. A business where the process lives in the owner's head is worth less to a buyer, harder for a lender to trust, and nearly impossible for the owner to step away from, no matter how good the numbers are. A business where the process is written down, tested, and demonstrably runnable by someone else doesn't carry that discount.

The measure at day ninety isn't how much is automated. It's whether someone other than you can run one workflow to your standard, and whether you can show from the log that it got better while they did.

---

*The AI Foundation Kit by Timothy Gaull · timothygaull.com · Free to use and share. Want help running it? Request an intro call at timothygaull.com/intro-call/*
