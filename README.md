# codebase-2pai

Codebase / boilerplate with DDD (Domain Driven Development) and Command–query separation (CQRS) based on nodeJS

Framework : ExpressJS 

# Instalation
Clone This Repository
```
git clone https://github.com/2pai/codebase-2pai.git
```
Install Package
```
npm install
```
Clone .env file from .env.example and edit

```
cat .env.example >> .env
```
Generate Public And Private Key
##### Private Key

```
ssh-keygen -t rsa -b 4096 -m PEM -f private.pem
```
##### Public Key
```
openssl rsa -in private.pem -pubout -outform PEM -out public.pub
```
***
<br>

# Usage
  Start The Server
  ```
  npm start
  ```
  Run Test
  ```
  npm run test
  ```
  Run ESLint to fix code
  ```
  npm run eslint:fix
  ```
# Feature
**Log**


```
Winston
```
**Auth**

```
Basic Auth
JWT Token
```
**Database**

```
MongoDB
```
**Test**

```
Unit Test
Integration Test
```

---
**Author** 

&copy; Muhammad Iqbal Syamil ayasy
