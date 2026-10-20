# Selecting Python in VS Code and Jupyter

**Goal:** identify the interpreter your editor or notebook actually executes.

## VS Code

1. Create `.venv` in the project.
2. Open the project in VS Code (with the Python extension installed).
3. Use **Python: Select Interpreter** in the Command Palette.
4. Select `.venv/bin/python` on Linux/macOS or `.venv\Scripts\python.exe` on Windows.

Debug an import mismatch:

```python
import sys
print(sys.executable)
```

If the path is not the expected one, change the selected interpreter or terminal environment.

## Jupyter kernels

A Jupyter notebook kernel has its own interpreter. To register a project environment (after creating/activating it):

```bash
python -m pip install ipykernel
python -m ipykernel install --user --name handbook-env --display-name 'Python (handbook-env)'
```

Select that kernel in the notebook, then execute:

```python
import sys
print(sys.executable)
```

A notebook's kernel and the environment where JupyterLab itself is launched can be different.
