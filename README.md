# Chall - Token Of Deceit

> Exploiting the lack of verification of JWT tokens to achieve privilege escalation.

## Type

- [ ] **OFF**line
- [X] **ON**line

## Designer

- Isabella Guddemi

## Description

In this challenge, participants will need to exploit a vulnerability in the JWT authentication system to escalate their
privileges. The app uses JWT tokens to authenticate users, with roles encoded in the token payload. However, due to a
flaw in the signature verification process, the app allows an attacker to tamper with the JWT token without invalidating
its signature.
Participants will need to exploit this flaw to modify the user’s role to "admin", granting them access to privileged
resources and the hidden flag.

## Category

- `web`