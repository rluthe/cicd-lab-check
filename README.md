# DevOps CI/CD laboratory: template repository

Sample Node.js web app for Laboratory 9, "DevOps: from commit to an automated deployment".

- `app.js`: web server with no external dependencies (listens on `PORT`, default 8080).
- `src/site-config.js`: the settings you change in the lab (owner, version, background colour).
- `src/render.js`: builds the HTML page.
- `test/site.test.js`: automated tests (`npm test`).
- `.github/workflows/ci.yml`: GitHub Actions workflow that runs the tests on every pull request to `main`.
- `Procfile`: tells AWS Elastic Beanstalk how to start the app.

## Flow

```
feature branch ──push──► pull request ──► GitHub Actions runs "test"
                                            ✗ fails → merge blocked by the ruleset
                                            ✓ passes → merge to main
main ──► AWS CodePipeline (GitHub App connection) ──► AWS Elastic Beanstalk
```

## Run locally (optional, needs Node.js 22 or later)

```
npm test
npm start      # then open http://localhost:8080
```

## For the instructor: publishing the template

1. Create a public repository under your account, for example `devops-cicd-template`, and push these files to `main`.
2. In the repository, open **Settings > General** and tick **Template repository**.
3. Share the repository URL in Canvas > Week 11 > Laboratory. Students use **Use this template > Create a new repository**.
