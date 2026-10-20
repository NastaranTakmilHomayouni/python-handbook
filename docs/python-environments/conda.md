# Conda Environments

**Goal:** create environments containing their own Python version and potentially non-Python packages.

[`conda`](https://docs.conda.io/) is common in scientific computing. Install a Conda distribution such as [Miniforge](https://github.com/conda-forge/miniforge) first.

```bash
conda create -n data-lab python=3.12
conda activate data-lab
conda install -c conda-forge numpy pandas
python -c 'import numpy; print(numpy.__version__)'
conda env list
conda deactivate
```

Export a human-readable environment definition as `environment.yml`:

```yaml
name: data-lab
channels:
  - conda-forge
dependencies:
  - python=3.12
  - numpy
  - pandas
```

Create from it:

```bash
conda env create -f environment.yml
```

Some newer Conda versions also offer `conda create --file environment.yml`. Mixing `conda install` and `pip install` requires care because they resolve packages differently. Prefer installing Conda dependencies first, then any pip-only packages.

**Think:** why might scientific software that needs native libraries benefit from Conda?
