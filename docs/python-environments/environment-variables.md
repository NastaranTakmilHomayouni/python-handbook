# Environment Variables vs Virtual Environments

**Goal:** distinguish process configuration from installed Python packages.

An environment variable is a name/value string available to a process. A *virtual environment* is a directory and interpreter configuration for packages. `.env` (file) and `.venv` (directory) are not the same.

## Linux

```bash
export APP_MODE=development
echo "$APP_MODE"
APP_MODE=production python3 -c 'import os; print(os.getenv("APP_MODE"))'
unset APP_MODE
```

## Windows PowerShell

```powershell
$env:APP_MODE = 'development'
python -c "import os; print(os.getenv('APP_MODE'))"
Remove-Item Env:APP_MODE
```

## From Python

```python
import os
mode = os.getenv('APP_MODE', 'development')
print(mode)
```

## `.env` configuration file

A `.env` file is **not automatically loaded by Python**. A package such as `python-dotenv` can load it:

```bash
python -m pip install python-dotenv
```

```python
import os
from dotenv import load_dotenv
load_dotenv()
print(os.getenv('APP_MODE', 'development'))
```

```dotenv
APP_MODE=development
```

**Security:** don't commit real `.env` secrets, don't print secrets in logs, and don't assume environment variables are encrypted. Commit `.env.example` with placeholders instead.
