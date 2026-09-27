# The AI Foundation Kit

**Get how your business actually runs out of your head and into something AI can use.**

---

## What this is

A free, self-guided kit for owners and operators of businesses with roughly 5 to 200 people: shops, trades, manufacturers, professional services firms, real estate and investment firms, and anyone else whose business still runs mostly through the person at the top.

Most AI projects in a business like that stall for the same reason. The tools are fine. What's missing is a written account of how the work actually gets done. Everything you want from AI, whether that's skills that handle routine decisions, an assistant that pulls them together, or a new hire who can learn the work in weeks instead of years, sits on top of that one thing.

This kit builds it with you.

## The idea

**You can't automate what isn't written down.** And you don't have to write it. You can be interviewed for it.

The kit starts with a service delivery map. It isn't an org chart, and it isn't a flowchart of how things are supposed to work. It records every stage your work actually moves through: what triggers each stage, what comes in, what decision gets made, what comes out, where it gets filed, who signs off, and where the time goes. Once that exists, the right things to automate are obvious, because they're the decision points and the mechanical steps on the map. Until it exists, you're guessing.

You can run the kit alone and it works. Running it with someone facilitating goes faster. The hard part isn't the writing. It's asking the questions that surface judgment you can't see because it's yours.

## The sequence

**1 · Map.** Two or three sessions, 45 minutes each. You narrate real, finished work. The AI asks and writes. You end up with a stage-by-stage map where every decision point is tagged mechanical, judgment, or hybrid.

**2 · Context.** The map surfaces the facts you've been carrying in your head. What you take on and what you turn away. Your standing assumptions on pricing, margins, lead times, and defaults. Your naming conventions, and what "done" means for each thing you produce. Written down once, they become the floor every tool and every person reads from, and nobody has to re-brief anything from memory again.

**3 · Skills.** Take the highest-frequency stage on the map and turn it into a skill an AI can run. One at a time. Each one gets tested against five of your own past decisions before it's trusted.

**4 · Bank the corrections.** Every week, each place a skill got it wrong becomes one dated edit. This is the engine. Without it, every correction you make is spent once.

**5 · Then teach.** Once the above exists, you finally have a good answer to "how do I train someone to do what I do?" A skill that gives only the answer trains button-pushers. A skill that gives the answer and the reasoning trains people who can make the call. That layer sits on top of written standards, so it comes after them.

Start with intake triage for whatever arrives first in your business: a request for a quote, an order, a lead, a deal. It's concrete, it happens often, and it usually works on the first try. That early win makes committing to the second skill easy.

## What's in the kit

| File | What it's for |
|---|---|
| `SKILL.md` | The instructions an AI assistant follows to run the kit with you. |
| `references/01-service-delivery-map.md` | **Start here.** The interview protocol and the map format. |
| `references/02-context-pack.md` | The standing facts the map surfaces, written once and read by everything. |
| `references/03-skill-extraction.md` | Turning one stage on the map into a skill an AI can run, chaining skills, and apprentice mode for training. |
| `references/04-example-quote-request-triage.md` | A worked example for a small metal fabrication and repair shop. Fictional. |
| `references/05-verification-and-retro.md` | How you confirm a skill is right, and how corrections get banked every week. |
| `references/06-example-deal-intake-triage.md` | A worked example for a real estate investment firm. Fictional. |
| `LICENSE.md` | Free to use, adapt, and share with attribution (CC BY 4.0). |

## Three ways to use it

**(a) With Claude, as a skill.** In the Claude app, go to Settings > Capabilities > Skills and upload this folder as a zip. If you use Claude Code, drop the `ai-foundation-kit` folder into `~/.claude/skills/`. Then just say something like "Help me map how work moves through my business" and it will take it from there, one question at a time.

**(b) With any AI chat tool.** ChatGPT, Gemini, Copilot, or anything else that takes a long message. Open `references/01-service-delivery-map.md`, paste the whole file into a new chat, and say: "Run the service delivery map interview with me. Start with session one." When you're ready for the next step, paste the next file.

**(c) With a facilitator.** Someone runs the sessions with you, pushes on the soft answers, and turns the output into working skills. It's the same kit and the same format, just faster, because the facilitator does the part that's hardest to do on your own.

## Where to keep these files

The goal isn't moving everything onto one vendor. It's making sure nothing important is trapped inside one.

**Keep one system of record.** Whatever shared drive your business already uses is the right home. The map, the context pack, and the skills all live there as plain markdown files, next to the work they describe. Plain files are the shared floor. Every tool can read them, every person can open them, and nothing has to be re-briefed.

**Give your team one front door.** Pick the one place where people ask the AI for help, ideally somewhere the team already works and where context builds up in a shared space instead of in each person's private chat. That matters a lot the day a new hire joins.

**Make any custom-built tool portable.** If someone built you an AI tool, whether a contractor, a vendor, or a teammate, ask for three things you can keep:

1. The prompts and logic, exported as plain text.
2. The assumptions: every threshold and default the tool applies, written out.
3. The input/output contract: exactly what goes in and exactly what comes out, in a fixed format.

With those three, the tool can be rebuilt or moved to a different platform in an afternoon, and other skills can use its output. Without them, a model being retired or a builder moving on becomes a real problem.

---

*The AI Foundation Kit by Timothy Gaull · timothygaull.com*

*Free to use and share under CC BY 4.0. Timothy Gaull is an independent consultant in Nashville who helps owner-led businesses put AI to work, sharpen their brand, and build systems so the business doesn't run entirely through the owner.*

*Want help running it? Request an intro call at timothygaull.com/intro-call/*
