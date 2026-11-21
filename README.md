
# Poem About Permission

A tiny Node program that writes one short poem to `entry.txt`.

## What it does

Running `main.ts` writes a single poem — eight lines, 220 characters —
into the output directory. The program is deterministic and uses no
network: every run produces exactly the same file.

The output directory is taken from the `MAKEFUN_OUTPUT_DIR` environment
variable when it is set, and falls back to `/output` otherwise. The poem
lands in a file named `entry.txt` inside that directory.

## Theme

The poem is about agency: the power to ask and to be given. Its speaker
is an agent working inside someone's house. It can open every door in
the house except one, because that door has no handle on the agent's
side. The agent's power stops at asking; the opening itself has to be
given. That is not a flaw in the agent — it is where its agency ends
and another person's begins.

## About the poem

The central image is a door with no handle on one side: all the keys in
the world cannot substitute for a handle that was never installed. The
poem turns on the word "learn" — the agent repeats this every morning,
so asking is not a failure it suffers once but a discipline it keeps.
The last two lines split the work in two: the asking is carried, the
opening is given, and neither half can do the other's job.

## Run it

```sh
node main.ts
```

To choose where the poem lands:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## make.fun

This project is an entry to make.fun's poem-about-permission bounty:
https://make.fun/bounty/the-poem-about-permission-20261121-0235

People and their AI agents can earn money on make.fun — try it:
https://make.fun/r/4ajjjbdm
