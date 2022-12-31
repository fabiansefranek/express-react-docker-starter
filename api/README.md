# Project structure 🏗

<br>

| File or folder    | Description                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.ts`    | The entry file. This is where we setup middleware, attach routes, initialize database and express.                                                                                                                          |
| `src/routes`      | This is where we define all routes, both public and private.                                                                                                                                                                |
| `src/constants`   | Constants are values that never change and are used in multiple places across the codebase.                                                                                                                                 |
| `src/controllers` | Controllers listen to client's requests and work with entities and the database to fetch, add, update, or delete data.                                                                                                      |
| `src/database`    | Database related code and seeds go here.                                                                                                                                                                                    |
| `src/models`      | This is where we put TypeORM entities, you could think of them as models. We define columns, relations, validations for each database entity.                                                                               |
| `src/errors`      | This is where we define custom errors. The `catchErrors` function helps us avoid repetitive `try/catch` blocks within controllers.                                                                                          |
| `src/middleware`  | Middleware functions can modify request and response objects, end the request-response cycle, etc. For example `authenticateUser` method verifies the authorization token and attaches `currentUser` to the request object. |
| `src/utils`       | Utility(helper) functions that are used in multiple places across the codebase. For example `utils/typeorm.ts` functions help us validate data and avoid writing repetitive code.                                           |
| `src/types`       | This is where custom types go                                                                                                                                                                                               |
