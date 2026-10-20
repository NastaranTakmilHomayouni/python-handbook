# Create a Virtual Environment with `venv`

**Goal:** isolate project packages without modifying OS-managed Python.

## Ubuntu 24.04

```bash
sudo apt update
sudo apt install python3 python3-venv python3-pip
mkdir -p ~/Projects/venv-lab
cd ~/Projects/venv-lab
python3 -m venv .venv
source .venv/bin/activate
python -m pip install requests
python -m pip show requests
python -c 'import sys; print(sys.executable)'
```

When activated, `.venv/bin` is placed near the start of your shell's `PATH`. Activation is **optional**:

```bash
.venv/bin/python -m pip list
.venv/bin/python -c 'import sys; print(sys.executable)'
```

Deactivate with `deactivate`.

## Windows and macOS

| Shell | Create | Activate |
|---|---|---|
| Ubuntu / macOS Bash or Zsh | `python3 -m venv .venv` | `source .venv/bin/activate` |
| Windows PowerShell | `py -m venv .venv` | `.\.venv\Scripts\Activate.ps1` |
| Windows CMD | `py -m venv .venv` | `.venv\Scripts\activate.bat` |
| Linux Fish | `python3 -m venv .venv` | `source .venv/bin/activate.fish` |

PowerShell's execution policy can block activation; invoking `.venv\Scripts\python.exe` directly is an alternative.

## What is inside `.venv`?

- `bin/` (Linux/macOS) or `Scripts/` (Windows) contains Python and scripts.
- `lib/.../site-packages/` (typical Unix layout) contains installed packages.
- `pyvenv.cfg` records environment configuration.

Do **not** commit `.venv/` or copy it between machines. Recreate it with a compatible interpreter and project dependency information.

**Checkpoint:** can you explain why `.venv/bin/python -m pip install requests` works even when the environment is not activated?
!!! tip "Best Practice"
    Always create a separate virtual environment
    for each Python project.

!!! warning "Important"
    Avoid installing Python packages globally
    using sudo pip on Ubuntu.

!!! note "Remember"
    A virtual environment isolates Python packages,
    but it does not provide full operating-system isolation.


