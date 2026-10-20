# Docker and Python Execution Environments

**Goal:** understand when virtual environments are not enough.

`venv` isolates packages, **not** the underlying operating system. Docker containers package an application with a selected OS userspace and system-level libraries; Linux containers normally share a kernel with the host or a Linux VM.

Create these files in a scratch directory:

`main.py`:

```python
print('Hello from Python in Docker!')
```

`Dockerfile`:

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY main.py .
CMD ["python", "main.py"]
```

Run with Docker installed:

```bash
docker build -t python-hello .
docker run --rm python-hello
```

In many single-purpose Python containers, a separate `.venv` is unnecessary because the container has a dedicated application environment. Docker is *not* the same as a full virtual machine and does not guarantee absolute isolation.

**Discussion:** which problems can a `venv` solve that Docker also solves, and which OS-level dependencies require something more than `venv`?
