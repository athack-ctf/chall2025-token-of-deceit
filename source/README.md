# Running This Challenge

Build
```
docker build -t athack-ctf/chall2025-token-of-deceit:latest .
```

Run
```
docker run -d --name token-of-deceit \
  --hostname token-of-deceit \
  -p 52049:2025 \
  athack-ctf/chall2025-token-of-deceit:latest
```
