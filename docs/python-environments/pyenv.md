# Manage Python Versions with pyenv

**Goal:** understand the difference between choosing a Python interpreter and isolating project packages.

[`pyenv`](https://github.com/pyenv/pyenv) installs and selects Python versions on Unix-like systems. It does not replace Ubuntu's OS-managed Python; it uses shell integration and shim executables.

After following the official installation and shell setup instructions, examples are:

```bash
pyenv install --list
pyenv install 3.12.7       # Illustrative patch version
pyenv versions
mkdir demo && cd demo
pyenv local 3.12.7
python --version
python -m venv .venv
source .venv/bin/activate
```

`pyenv local` writes `.python-version`, selecting the desired interpreter in that directory. You must first install the requested Python version and required build dependencies. On native Windows, choose an appropriate alternative such as uv, Conda or a Windows version manager; pyenv is chiefly a Unix tool.

**Key distinction:** `pyenv` selects **interpreter versions**; `venv` isolates **project dependencies**.
