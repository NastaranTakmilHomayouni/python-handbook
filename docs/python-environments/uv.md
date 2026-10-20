# Modern Python Projects with uv

**Goal:** manage Python versions, environments, packages and lockfiles using one tool.

[`uv`](https://docs.astral.sh/uv/) is a fast Python project/package manager. Follow the official installation guide for your operating system.

## Managed project workflow

```bash
uv init hello-uv
cd hello-uv
uv add requests
uv run python -c 'import requests; print(requests.__version__)'
uv tree
```

uv manages a project environment and records resolved dependencies in `uv.lock`. `uv run` avoids the need for manual shell activation.

## Lower-level environment workflow

```bash
uv python install 3.12
uv venv --python 3.12
uv pip install --python .venv/bin/python requests
.venv/bin/python -c 'import requests; print(requests.__version__)'
```

The `uv pip` interface is intentionally lower-level than `uv add`/`uv sync`; use project commands when you want dependencies tracked in `pyproject.toml` and the lockfile.

## On a second computer

With the project files checked out:

```bash
uv sync
uv run python -c 'import requests; print(requests.__version__)'
```

Do not commit `.venv/`; commit `pyproject.toml` and (for an application) `uv.lock`.
