# pip, Requirements and Reproducibility

**Goal:** install dependencies into the *intended* interpreter and recreate them.

Inside your project environment:

```bash
python -m pip install requests
python -m pip show requests
python -m pip list
python -m pip freeze > requirements.txt
```

The `python -m pip` spelling makes the target interpreter explicit. A requirements file may contain precise or ranged versions:

```text
requests>=2.30,<3
```

Create a fresh environment and install dependencies:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

**Important:** `pip freeze` lists everything installed, including transitive dependencies. It doesn't indicate which packages your application directly depends on. Exact package pins improve consistency, but a reproducible deployment can also depend on the Python version, OS, compiled libraries and artifact availability.

## `pyproject.toml`

Modern projects commonly declare metadata and direct dependencies in `pyproject.toml`:

```toml
[project]
name = "sample-app"
version = "0.1.0"
requires-python = ">=3.12"
dependencies = ["requests>=2.30,<3"]
```

A real installable package also needs the appropriate build-system and package structure. uv and Poetry use this file to manage projects and produce their own lockfiles.

## Git hygiene

Create `.gitignore` entries:

```gitignore
.venv/
.env
__pycache__/
*.py[cod]
```

Commit your dependency *descriptions* and project source, not the virtual environment.
