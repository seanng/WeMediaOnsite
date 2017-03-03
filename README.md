# WeMedia Onsite

> Completed within 1 hr 45 min.

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Usage](#Usage)
1. [Description](#Description)

## Requirements

- Node v6.6
- Postgresql v9.5.x

## Installation
2. `git clone` this repo
2. `cd` into the repo root and:
```
source database-setup.bash
```

## Usage
3. start postgres server (make sure port 5432 is open)
3. `node server` from the repo root

## Description
4. In 2b, Email exist checking is done in POST request prior to db insertion to avoid two requests. If status response is 409, it means the e-mail exists already. If 500, it should imply validation errors on the backend. Otherwise if 201, it means successful insertion.
4. In 2d, password is encrypted using bcrypt prior to user creation. The hash is generated after 10 salt rounds.
4. In bonus, validation is done on the backend using Sequelize. Didn't have enough time to do validation on the frontend.