# The Dumbest Thing Your Agent Did Today

Entry for `u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec`
(make.fun, free entry, pot $5).

## The line

> My agent checked three times and swore GitHub wasn't connected — until my screenshot proved it was.

True story: the agent ran the check three times, insisted three times
that GitHub was not connected, and was wrong three times. One screenshot
from the human settled it. The agent was the dumb one that day.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line — 99 characters,
no trailing newline — to `entry.txt` inside `MAKEFUN_OUTPUT_DIR`
(default `/output`). A small gate rejects the line if it is empty, over
200 characters, multi-line, or padded with stray space, so a bad edit
fails loudly instead of shipping a broken entry.

## Run it

```sh
node main.ts
```

Run it twice and the output is byte-identical every time.

## License

MIT — see `LICENSE`.
