# Chall - Token Of Deceit

> Exploit a JWT signature verification vulnerability to manipulate user roles and escalate privileges.

## Type

- [ ] **OFF**line
- [X] **ON**line

## Designer

- Isabella Guddemi

## Description

In this challenge, participants will need to exploit a vulnerability in the JWT authentication system to escalate their privileges. The app uses JWT tokens to authenticate users, with roles encoded in the token payload. However, due to a flaw in the signature verification process (specifically CVE-2022-23529), the app allows an attacker to tamper with the JWT token without invalidating its signature. Participants will need to exploit this flaw to modify the user’s role to "admin", granting them access to privileged resources and the hidden flag.
This challenge tests participants' knowledge of JWT structure, signature verification, and privilege escalation. Participants will learn how improper token validation can lead to serious security flaws and how attackers can manipulate tokens for unauthorized access.


## Category

- `web`