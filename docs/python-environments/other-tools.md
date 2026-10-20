# Poetry and Other Environment Tools

No one tool is best for every project. Know their responsibilities before adopting several of them at once.

| Tool | Primary focus |
|---|---|
| `virtualenv` | Flexible creation of venv-like environments |
| Poetry | Project dependencies, lockfiles and packaging |
| Pipenv | Virtual environments with Pipfile / Pipfile.lock |
| Hatch | Project/build and test environments |
| PDM | Project dependency management |
| pipx | Isolated installation of Python CLI *applications* |
| tox / nox | Test your project in multiple isolated environments |
| Mamba / micromamba | Conda-compatible package/environment managers |
| mise / asdf | Manage language runtime versions |
| direnv | Load per-directory shell environment variables |

## Poetry example

After installing Poetry as described in its official docs:

```bash
poetry new demo-poetry
cd demo-poetry
poetry add requests
poetry run python -c 'import requests; print(requests.__version__)'
poetry env info --path
```

## pipx example

Install command-line apps separately from project dependencies:

```bash
pipx install black
black --version
```

**Choose by task:** developing an app? `venv` or uv. Installing a CLI? `pipx`. Testing a library against several Python versions? tox or nox.
