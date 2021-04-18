# create `package.json`

$ npm init -y
Wrote to /home/sky0621/src/github.com/sky0621/study-typescript/typescript-guide/package.json:

{
  "name": "typescript-guide",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

# install `typescript`

$ npm install --save-dev ts-node typescript
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN typescript-guide@1.0.0 No description
npm WARN typescript-guide@1.0.0 No repository field.

+ ts-node@8.5.2
+ typescript@3.7.2
added 9 packages from 41 contributors and audited 9 packages in 1.712s

# create `tsconfig.json`

$ npx tsc --init
message TS6071: Successfully created a tsconfig.json file.

# exec using ts-node

$ npx ts-node src/*
Hello たろー
