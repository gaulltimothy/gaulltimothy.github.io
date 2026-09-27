# 04 · Worked example: quote request triage

**This is an illustration.** The shop, the rules, and the details below are invented to show what a finished draft skill looks like. Nothing here is a real company's process or pricing. Use it as a model for the shape, then replace the contents with your own.

The setting is a small metal fabrication and repair shop. Requests come in by email, phone, and the website form: a gate that needs rebuilding, a run of brackets, a trailer hitch repair, stair railings for a new building. Every one needs a first call before anyone spends time on it. Is this worth quoting, should we decline it, or do we need more information first?

This is a **draft**. A good portion of it is marked `[UNCONFIRMED]` because the shop hasn't mapped those parts yet. Those markers are the agenda for the next mapping session, and filling them in is the fastest way to see how the format works.

---

```markdown
# Skill: Quote request triage

Status:          draft
Owner:           the owner
Last confirmed:  [not yet confirmed]
Version:         0.1
Maps to:         Stage 1: Intake

## When to use
A new request for work arrives by email, phone message, or web form and asks
for a price, an estimate, or whether the shop can do a job.

## When not to use
- Follow-ups on a job already quoted or in progress. Route to that job's folder.
- Supplier offers, sales pitches, and job applicants. Route to the office inbox.
- Warranty or callback complaints on work the shop already did. Route to the
  owner directly. These are never triaged as new work.
- [UNCONFIRMED] Repeat requests from a customer the shop previously declined.
  Does a repeat get triaged fresh, or declined by reference to the earlier
  decision?

## Inputs
- The request and every attachment (photos, sketches, drawings)
- For phone requests, the call notes as written by whoever took the call
- `context/what-we-take-on.md`
- `context/standing-assumptions.md`
- `context/filing-conventions.md`
- The declined-requests log, to catch repeats

## Procedure
1. Extract the facts: customer name and contact, job location, job type,
   material, approximate size or quantity, whether it's new fabrication or a
   repair, requested completion date, and whether drawings or photos came
   with it.
2. Flag every fact the customer stated but did not show. Dimensions,
   material grade, "it's a quick job," and "it just needs a weld" are
   inputs, never facts.
3. Check the declined-requests log for a prior decision on this customer or job.
4. Screen against what the shop takes on, cheapest disqualifying check first:
   service area → job type → material → size and lead time.
   Stop at the first hard fail.
5. Return one of three outcomes with reasoning: QUOTE, DECLINE, or NEED INFO.
   A NEED INFO names exactly which missing fact would decide it.
6. On DECLINE: log it to the declined-requests log with the reason and date.
   [UNCONFIRMED] Does every decline get a reply, and who sends it? Is there
   a referral list of other shops for work this shop doesn't do?
7. On QUOTE: create the job folder per the naming convention, file the request
   and attachments, open a row on the quote tracker, and hand off to the
   estimating step. This skill does not produce a price.

## Site visits and deposits
[UNCONFIRMED: the whole section. Needs mapping.]
Open questions:
- Which jobs require a site visit before quoting? Is it by job type, by size,
  or by the owner's call?
- Is a site visit free, or is there a trip charge? Does it credit against the job?
- When is a deposit required, and how much?
- Who schedules visits, and how far out is the calendar typically?

Until this is mapped, the skill stops at QUOTE and hands off to a human.
It does not schedule visits or discuss deposits.

## Judgment rules
[UNCONFIRMED] The service area, the job types taken and refused, the materials
the shop works, the size limits, and the minimum job size are not yet written
down. Each one is a question for session two, quoted with numbers.

What we know so far: the call is fast, it happens at the inbox or the phone,
and many requests exit here. That combination is exactly why this stage is
worth mapping precisely. It's the highest-volume judgment in the shop and the
one most invisible to anyone else.

Illustrative rules of the kind the owner might confirm:
- [UNCONFIRMED] "We don't quote anything we haven't seen a photo or a drawing of."
- [UNCONFIRMED] "Anything that holds a person up, holds a load, or holds
  pressure goes to me, no matter how small."

## Output format
A triage record filed to the job folder:

    Request:     [customer · short job description]
    Received:    YYYY-MM-DD  ·  Channel: [email / phone / web form]
    Facts:       [extracted, each tagged shown or stated]
    Screen:      [each check, pass or fail: area, type, material, size/lead time]
    Outcome:     QUOTE | DECLINE | NEED INFO
    Reasoning:   [why, naming the rule invoked]
    Unverified:  [every fact taken from the customer's word alone]
    Next:        [the specific next action and who owns it]

## Definition of done
- [ ] Every field populated or explicitly marked unavailable
- [ ] Every fact tagged shown or stated, with its source
- [ ] Each screening check shown separately, not summarized
- [ ] Declined-requests log checked for a prior decision
- [ ] Outcome names the specific rule it rests on
- [ ] On QUOTE: job folder created per convention, request and attachments filed
- [ ] On DECLINE: logged with reason and date

## Failure modes
- Quoting from the customer's measurements. Most common error. It shows up
  later as a remake, and remakes are where the margin goes.
- Believing "it's a quick job." Repairs described as quick are the ones most
  likely to hide rust, bad prior welds, or a part that has to be replaced.
- Missing that the shop already declined this customer or job, and triaging
  it cold.
- [UNCONFIRMED] The owner to add the two or three that have actually bitten.

## Escalation
- Any request that needs pricing outside the standing assumptions (rush
  premiums, discounts, unusual terms) → the owner. The skill never quotes a
  price and never makes pricing exceptions.
- Anything safety-related or code-related: structural or load-bearing work,
  railings and stairs, pressure vessels, lifting equipment, work that needs a
  certified weld or an inspection → the owner, always.
- Any request outside what the shop takes on that the customer frames as
  special or urgent → the owner. The skill does not make exceptions.
- All site visit and deposit handling → a human, pending mapping.

## Changelog
YYYY-MM-DD · v0.1 drafted from the first mapping session. Not yet verified.
```

---

## What to notice about this example

**It stops where knowledge stops.** The site visit section is a list of questions, not a plausible-looking workflow. A skill that guesses is worse than one with a visible hole, because the hole gets filled and the guess gets trusted.

**Every fact carries its source.** Customer-stated dimensions and descriptions stay tagged as stated all the way through, so nothing reaches the estimate wearing a confidence it didn't earn. This matters for attention. A reviewer who has to check every number checks none of them properly by month three. A reviewer who only has to check the flagged ones keeps checking.

**The cheapest check runs first.** Service area before job type, job type before material, material before size. Most requests that don't fit die on the first check, which is what makes a thirty-second triage possible.

**The dangerous calls stay human.** The skill sorts requests. It does not price them, and it never decides anything that touches safety or code. That line is written into the skill, so nobody has to remember it.

**It's a draft and it says so.** File 05 covers what promotes it: five past requests, run blind, graded against what the shop actually did.

---

*The AI Foundation Kit by Timothy Gaull · timothygaull.com · Free to use and share. Want help running it? Request an intro call at timothygaull.com/intro-call/*
