# Posting to Express with Prisma

Let's build an application with a database to track our hobbies. The frontend React is provided so that we can focus on the backend Express.

```no-highlight
createdb hobbies_development
```

## Part 0.5

Investigate the provided files - React client and Express server

- How does the frontend React expect to interact with the data?

## Part 1

Set up the backend server of the application so that we can view all of our hobbies (index page)

A Hobby should have:

- Name (required)
- Description (optional)

Remember that the backend consists of:

1. Prisma Migrations
2. Express Routers

## Part 1.5

Insert some Hobby records in the database through the server `yarn console`

## Part 2

The React frontend has a form to allow users to add a new hobby. Build the backend needed to persist the data submitted via the form

- Validations (bonus)
