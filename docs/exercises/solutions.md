# Lab Solutions (Ubuntu)

Run these commands from your own terminal. No destructive operations are required.

```bash
mkdir -p ~/Projects/env-lab/{a,b,c}
python3 -m venv ~/Projects/env-lab/a/.venv
python3 -m venv ~/Projects/env-lab/b/.venv
~/Projects/env-lab/a/.venv/bin/python -m pip install requests
~/Projects/env-lab/a/.venv/bin/python -m pip show requests
~/Projects/env-lab/b/.venv/bin/python -m pip show requests || echo 'Not installed in B (expected)'
~/Projects/env-lab/a/.venv/bin/python -c 'import sys; print(sys.executable)'
~/Projects/env-lab/b/.venv/bin/python -c 'import sys; print(sys.executable)'
~/Projects/env-lab/a/.venv/bin/python -m pip freeze > ~/Projects/env-lab/a/requirements.txt
python3 -m venv ~/Projects/env-lab/c/.venv
~/Projects/env-lab/c/.venv/bin/python -m pip install -r ~/Projects/env-lab/a/requirements.txt
~/Projects/env-lab/c/.venv/bin/python -c 'import requests; print(requests.__version__)'
```

### Concept answers

- `PATH` controls shell executable lookup; `sys.path` controls Python import lookup.
- Environments contain machine-specific paths and installed artifacts, and should generally be regenerated.
- Activation is optional: call `.venv/bin/python` directly.
- `.env` normally stores configuration values; `.venv` is an isolated Python environment directory.
