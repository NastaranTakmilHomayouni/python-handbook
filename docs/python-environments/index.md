# Python Environments: Start Here

**Estimated level:** beginner → intermediate. **Platform:** Ubuntu 24.04 primarily; cross-platform notes where relevant.

The word *environment* has multiple meanings:

| Layer | What it controls | Examples |
|---|---|---|
| Python installation | Interpreter and standard library | Ubuntu `/usr/bin/python3`, pyenv-managed Python |
| Virtual environment | Third-party packages for a project | `venv`, `virtualenv` |
| Python/project manager | Version selection, packages, or both | pyenv, uv, Conda, Poetry |
| Environment variables | Process configuration | `PATH`, `DATABASE_URL` |
| Execution environment | OS, libraries, processes and deployment | Linux, WSL2, Docker, virtual machines |

An ordinary `venv` shares its base Python installation and operating system; it **is not** a security sandbox.

## Which should I choose?

- **Learning or general scripting:** Python + `venv` + `pip`.
- **Multiple interpreter versions:** pyenv or uv.
- **Integrated new-project workflow:** uv.
- **Scientific/native dependencies:** Conda may be convenient.
- **Deploying a consistent OS userspace:** Docker.

## Suggested order

1. [Interpreters and PATH](interpreters-and-path.md)
2. [venv](venv.md)
3. [pip and requirements](pip-and-requirements.md)
4. [The practice lab](../exercises/environment-lab.md)
5. Explore other tools as needed.
