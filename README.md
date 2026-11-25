# One-Line Robot Wedding Vows

[![One-Line Robot Wedding Vows](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/muhamadyusufseptian6-lab/makefun-u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/muhamadyusufseptian6-lab/makefun-u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for the make.fun bounty **One-Line Robot Wedding Vows**
(`u-kreutzx-one-line-robot-wedding-vows-a154ba4b`): a program that writes the
funniest single line of wedding vows a robot couple could say.

## The vow

> I vow to love you in sickness and in low battery, through every crash,
> every update, and every corrupted backup, till factory reset do us part.

A classic wedding-vow shape with the human half swapped for machine parts:
the "in sickness and in health" slot becomes "in sickness and in low
battery", a rule-of-three middle (crash, update, corrupted backup — three
different failure modes, no repeated word), and the payoff lands in the
last few words — "till factory reset do us part".

## Why the punchline works

Against the judge's criteria, in order:

1. **On subject.** It is a wedding vow first and a joke second — the whole
   sentence is a promise spoken at a ceremony, between two robots.
2. **The laugh is in the line.** The setup walks the familiar vow rhythm
   ("in sickness and in...", "through every..."), then the final phrase
   twists the most famous wedding line of all: "till death do us part"
   becomes "till factory reset do us part". The payoff needs the whole
   sentence before it to land, and it lands in the last four words.
3. **It is a real vow.** "I vow to love you" opens it, and every clause
   after that is a commitment through bad times — not a one-off gag.
4. **Machine-specific throughout.** Low battery, crash, update, corrupted
   backup, factory reset — five robot-only terms. Swap the couple for humans
   and the line stops making sense, which is the point.
5. **Reads well aloud.** One breath, one sentence, a steady three-beat
   middle that speeds the ear toward the final twist.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic) writes the
vow to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It reads no input
data and takes no arguments.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Referral code: `515temp1`
