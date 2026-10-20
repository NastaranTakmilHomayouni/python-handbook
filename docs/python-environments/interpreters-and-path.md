# Python Installations, PATH and Imports

**Goal:** identify which Python is executing code and where modules are found.

On Ubuntu 24.04, your system may provide `/usr/bin/python3`. Avoid using `sudo pip install` to change OS-managed Python packages. Modern distributions can enforce the [externally managed environment specification](https://packaging.python.org/en/latest/specifications/externally-managed-environments/).

## Explore your installation (Ubuntu/Linux)

```bash
python3 --version
command -v python3
type -a python3
python3 -c 'import sys; print(sys.executable)'
```

`PATH` tells your **shell** where to find programs. `sys.path` tells **Python** where to search for modules.

```bash
echo "$PATH"
python3 -c 'import sys; print("\n".join(sys.path))'
```

`PYTHONPATH` changes Python's module search path, but is normally not needed for well-packaged applications. `PYTHONHOME` is advanced and should ordinarily be left unset.

## See the interpreter from within a script

```python
import sys
print('Executable:', sys.executable)
print('Python:', sys.version)
print('Prefix:', sys.prefix)
print('Base prefix:', sys.base_prefix)
```

**Try it:** run the commands before and after activating the environment in the next lesson. Record which values change.
