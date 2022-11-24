# Coen de Waal portfolio website

This application was created as a typescript create react app.
You can run important tasks from the package.json scripts.

## Local development

```
npm i
npm start
```

## API

The backend generates a blog.spec.json file which the frontend uses to generate a typescript model representation of the backend, but using the openapi-typescript dependency.

To create the models run:

```
npm run openapi
```

## Styles

tailwindcss is used for atomic styling.
You can use tailwind utility classes anywhere in the project, tree shaking is used to generate only the classes included in the project.

## Testing

Component unit testing: Cypress
e2e testing: Cypress
