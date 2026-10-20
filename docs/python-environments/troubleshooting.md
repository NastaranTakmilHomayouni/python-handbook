# Troubleshooting Python Environments

Use the following diagnostic commands **inside the terminal where the issue occurs**:

```bash
python --version
python -c 'import sys; print(sys.executable)'
python -m pip --version
python -m pip list
python -c 'import sys; print(sys.prefix, sys.base_prefix)'
```

| Symptom | Common cause | First check |
|---|---|---|
| `ModuleNotFoundError` | Installed into another environment | `python -m pip show PACKAGE` |
| `externally-managed-environment` | Trying to install into OS-managed Python | Create a `venv` |
| VS Code import error | Wrong selected interpreter | `sys.executable` in editor |
| Notebook import error | Wrong selected kernel | `sys.executable` in cell |
| `python` vs `pip` disagree | Different executables on `PATH` | `python -m pip --version` |
| Activation fails | Wrong shell-specific script | Use matching activate command or invoke interpreter directly |
| Moved `.venv` broke | Embedded paths aren't portable | Recreate environment |

## A diagnostic script

```python
import os
import sys
print('Python:', sys.version)
print('Executable:', sys.executable)
print('Prefix:', sys.prefix)
print('Base prefix:', sys.base_prefix)
print('VIRTUAL_ENV:', os.getenv('VIRTUAL_ENV'))
```

For `venv`-style environments, `sys.prefix != sys.base_prefix` usually indicates a virtual environment. It is **not** a universal detector for Conda or every Python installation.

**Important:** avoid deleting environment directories unless you've verified the path and saved all needed project dependency information.
