### Technologies involved

- Frontend: React, tailwind
- Backend: NodeJs,Express
- Database: Sqlite
- ORM: Prisma

### How to contribute

This is simple guide for installation to pull request

#### Installation

First fork this repository and feel free to give it a star 🌟

<!-- ![fork and star](<Screenshot from 2023-10-03 15-43-35.png>) -->

Give your github username in the place of username

```bash
git clone https://github.com/<UserName>/Small-Projects.git
```

If you want to contribute to frontend

```bash
cd Small-Projects/Client

npm install
or
pnpm install
or
yarn install

```

If you want to contribute to backend

```bash
cd Small-Projects/Server

npm install
or
pnpm install
or
yarn install

```

### Create a new branch

#### Branch creation rule

Start your branch with what type of issue and issue number

**Example:** feat-todo-issue#3 (here the feat is feature and the issue number is 3)

These are the common types, with these you can start branch name

![commit types](assets/Screenshot%20from%202023-10-03%2017-42-53.png)

Those who are working with the backend
create a .env file in the root directory and add this to the file

```bash
DATABASE_URL="file:./dev.db"
```
