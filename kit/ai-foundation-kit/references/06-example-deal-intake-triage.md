# 06 · Worked example: deal intake triage

**This is an illustration.** The firm, the rules, and the details below are invented to show what a finished draft skill looks like in a deal-driven business. Nothing here is a real firm's process or criteria. Use it as a model for the shape, then replace the contents with your own.

The setting is a small commercial real estate investment firm. Opportunities arrive by email: an offering memorandum (OM) from a broker, a teaser, an introduction, or an off-market approach from a property owner. The firm's owner decides whether each one is worth acting on. If it is, confidentiality paperwork gets signed and the deal gets its own folder.

The same pattern fits any business where opportunities arrive in volume and most of them should be turned down fast: acquisitions, lending, recruiting, partnerships, large bids.

This is a **draft**. Roughly a third of it is marked `[UNCONFIRMED]` because the firm hasn't mapped those parts yet. Those markers are the agenda for the first mapping session.

---

```markdown
# Skill: Deal intake triage

Status:          draft
Owner:           the owner
Last confirmed:  [not yet confirmed]
Version:         0.1
Maps to:         Stage 1: Intake

## When to use
An inbound email arrives containing or referencing an investment opportunity:
an OM, a teaser, a broker introduction, an off-market approach, or a direct
contact from a property owner.

## When not to use
- Ongoing correspondence on a deal already in the pipeline. Route to that
  deal's folder instead.
- Market or research material with no specific property attached. Route to
  market research.
- [UNCONFIRMED] Repeat sends of a deal the firm previously passed on. Does a
  re-send get re-screened, or declined by reference to the earlier decision?

## Inputs
- The email and every attachment
- `context/what-we-take-on.md` (the firm's buy box)
- `context/filing-conventions.md`
- The passed-deals log, to catch re-sends

## Procedure
1. Extract the facts: property name, address, market and submarket, asset
   type, unit or square-foot count, year built, asking price, stated cap rate,
   stated net operating income (NOI), broker or sender, and any stated deadline.
2. Flag every figure the sender asserted but did not evidence. Broker math is
   an input, never a fact.
3. Check the passed-deals log for a prior decision on this property.
4. Screen against the buy box, cheapest disqualifying check first:
   market → asset type → size → price band. Stop at the first hard fail.
5. Return one of three outcomes with reasoning: ACT, PASS, or NEED INFO.
   A NEED INFO names exactly which missing fact would decide it.
6. On PASS: log it to the passed-deals log with the reason and date.
   [UNCONFIRMED] Does a pass generate a reply to the broker, and who writes it?
7. On ACT: hand off to the confidentiality step below.
8. On ACT: create the deal folder per the naming convention, file the email
   and attachments, and open a tracker row.

## Confidentiality agreements
[UNCONFIRMED: the whole section. Needs mapping.]
Open questions:
- Which agreements are involved? NDA, confidentiality agreement, buyer
  representation, something else?
- Is there a standard form, or is each one the other side's paper?
- Who reviews before signing? Does anything go to counsel, and on what
  trigger (deal size, unusual terms, an unfamiliar counterparty)?
- What gets tracked: signature date, expiry, obligations that survive?
- Does the deal folder get created before or after signature?

Until this is mapped, the skill stops at ACT and hands off to a human.
It does not attempt any part of the agreement workflow.

## Judgment rules
[UNCONFIRMED] The buy box thresholds (markets, asset types, size range, price
band, return floor) are not yet written down. Each one is a question for
session two, quoted with numbers.

What we know so far: the decision is fast, it happens at the inbox, and most
deals exit here. That combination is exactly why this stage is worth mapping
precisely. It's the highest-volume judgment in the firm and the one most
invisible to anyone else.

## Output format
A screening record filed to the deal folder:

    Deal:        [name, e.g. "the Maple Street building"]
    Received:    YYYY-MM-DD  ·  Source: [broker / contact]
    Facts:       [extracted, each tagged verified or asserted]
    Screen:      [each buy box check, pass or fail]
    Outcome:     ACT | PASS | NEED INFO
    Reasoning:   [why, naming the rule invoked]
    Unverified:  [every figure taken from the sender]
    Next:        [the specific next action and who owns it]

## Definition of done
- [ ] Every field populated or explicitly marked unavailable
- [ ] Every figure tagged verified or asserted, with a source
- [ ] Buy box check shown per criterion, not summarized
- [ ] Passed-deals log checked for a prior decision
- [ ] Outcome names the specific rule it rests on
- [ ] On ACT: folder created per convention, email and attachments filed
- [ ] On PASS: logged with reason and date

## Failure modes
- Treating a broker's stated cap rate or NOI as fact. This is the most common
  error, and it carries into the financial analysis, where it gets expensive.
- Screening on projected numbers instead of current, in-place numbers.
- Missing that the firm already passed on a deal, and re-screening it cold.
- [UNCONFIRMED] The owner to add the two or three that have actually bitten.

## Escalation
- Any deal outside the buy box that the sender frames as exceptional → the
  owner, always. The skill does not make exceptions to the buy box.
- Anything involving an existing relationship with the counterparty → the
  owner.
- All confidentiality agreement handling → a human, pending mapping.

## Changelog
YYYY-MM-DD · v0.1 drafted from the first mapping session. Not yet verified.
```

---

## What to notice about this example

**It stops where knowledge stops.** The confidentiality section is a list of questions rather than a plausible-looking workflow. A skill that guesses is worse than one with a visible hole, because the hole gets filled and the guess gets trusted.

**Every number carries provenance.** Broker-asserted figures stay tagged as asserted all the way through, so nothing enters the financial analysis wearing a confidence it didn't earn. A reviewer who has to check every number checks none of them properly by month three. A reviewer who only has to check the flagged ones keeps checking.

**The cheapest check runs first.** Market before price, price before returns. Most deals die on the first check, which is what makes a thirty-second screen possible.

**It's a draft and it says so.** File 05 covers what promotes it: five past deals, run blind, graded against what the firm actually did.

---

*The AI Foundation Kit by Timothy Gaull · timothygaull.com · Free to use and share. Want help running it? Request an intro call at timothygaull.com/intro-call/*
