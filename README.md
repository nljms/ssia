![ServerlessStack](https://res.cloudinary.com/practicaldev/image/fetch/s--yIpLwIuB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/iryz7lvob2dpqkfih8o0.png)

# SSiA (Serverless Stack in Action) ![ssia](https://view-count.nljms.dev/github/projects/ssia?email=neiljames97@gmail.com)

A demo application for a CRUD application using [serverless stack](https://sst.dev/), and [electrodb](https://www.npmjs.com/package/electrodb).

# Project structure

I introduced a new package, which is inside the `packages` folder, wherein the dynamo and electrodb configuration is abstracted away to the services.

```bash
├── README.md
├── package.json
├── packages # directory of packages that can be added along in the future
│ └── database
│ ├── common
│ │ ├── clients.ts
│ │ ├── constants.ts
│ │ ├── index.ts
│ │ └── interfaces.ts
│ ├── index.ts
│ ├── package.json # package name defined (@sstia/ddb)
│ ├── schemas
│ │ ├── index.ts
│ │ ├── players.ts
│ │ └── teams.ts
│ └── storages
│ ├── PlayerStorage.ts
│ ├── TeamStorage.ts
│ └── index.ts
├── services
│ ├── functions
│ │ ├── create.ts
│ │ ├── get.ts
│ │ ├── list.ts
│ │ └── update.ts
│ ├── package.json
│ ├── test
│ │ └── sample.test.ts
│ └── tsconfig.json
├── sst.json
├── stacks
│ ├── MyStack.ts
│ └── index.ts
├── tsconfig.json
├── vitest.config.ts
└── yarn.lock
```

> If you wanted to learn more about creating or transitioning into monorepo, you can read about [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
