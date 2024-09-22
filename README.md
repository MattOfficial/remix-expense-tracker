# Expense Tracker

This is a expense tracker project created using [`remix`](https://remix.run/docs/en/main).

## Prerequisites

1. Node >= 20
2. Any package manager of your choice (we recomend `bun`)
3. MongoDB (the DB solution used - feel free to use any alternative noSQL solution)
4. Prisma (for DB connection)

### Setup

1. Make sure you are on the correct node version. The node version required for this project is **node >= 20**. For node < 20, the app does not work properly.
   - You can check your node version by: `node -v`.
   - If you use a version manager for node like `nvm`, switch to the correct node version using this command: `nvm use 20`.
   - If you don't have node installation, get it from [here](https://nodejs.org/en/download/package-manager).
2. Clone the [repo](https://github.com/MattOfficial/remix-expense-tracker.git).
3. After cloning the repo, run the initial install command.
   ```sh
   bun i
   ```
   This project does not track `lock` files of any package managers by default, thus allowing flexibility in terms of what package manager you want to use. If you want to track the `lock` file, feel free to modify the `.gitignore` file.
4. Setup `prisma`. The `prisma` folder is checked in, but the `.env` with the database secrets is not tracked. You need to set it up using your own database details.
   1. Create a `.env` file in your root directory (just inside remix-expense-tracker folder at the same level as app, prisma, public etc).
   2. Add the following env string to your `.env` file:
      `DATABASE_URL="mongodb+srv://<db_username>:<db_password>@expense-tracker.mnyrc.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker"`
      You can get the correct string from `mongoDB` or your DB provider.
5. For authentication, add the following in your `.env` file:
   `SESSION_SECET='session_secret'`
   This is just a dummy string used for dev server. For PROD server come up with something more robust.
