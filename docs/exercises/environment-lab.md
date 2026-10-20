# Lab: Prove Your Environments Are Isolated

**Prerequisites:** Ubuntu 24.04, `python3`, `python3-venv`, and a terminal. **Time:** approximately 20–30 minutes.

## Challenge A — Create two projects

1. Create `~/Projects/env-lab/a` and `~/Projects/env-lab/b`.
2. Create a `.venv` independently within each project.
3. Install `requests` only in project A's `.venv`.
4. Show, using `python -m pip show requests`, that B doesn't have it.
5. Print `sys.executable` from each interpreter and compare paths.

## Challenge B — Reproduce A

1. Export A's installed packages to `requirements.txt`.
2. Create a third virtual environment in a new directory C.
3. Install the requirements into C.
4. Verify that C can import `requests`.

## Challenge C — Explain the system

Answer in your own words:

- What does `PATH` do, compared with `sys.path`?
- Why shouldn't `.venv/` be committed to Git?
- Can environment activation be skipped? If so, how?
- How is `.env` different from `.venv`?

**Success criteria:** A and C import Requests; B does not. All three interpreters show different executable paths.

Continue to [solutions](solutions.md) only after attempting the lab.
