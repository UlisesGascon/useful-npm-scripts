# useful-npm-scripts
A collection of useful npm scripts

## :shield: Security tasks

- `npm run security` runs all the `security:*` tasks in parallel
- `npm run security:lockfile` checks the `package-lock.json` and `yarn.lock` integrity in order to prevent poisoned dependencies by using `lockfile-lint`. More info in [snyk blog | Why npm lockfiles can be a security blindspot for injecting malicious modules](https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/)
- `npm run security:gitleaks` scans the git history in order to find leaked credentials (using patterns) by running a docker image `zricethezav/gitleaks`. More info in [Github zricethezav/gitleaks](https://github.com/zricethezav/gitleaks)
- `npm run security:dependencies` runs `npm audit` and `Snyk test` in order to detect dependencies with known vulnerabilities.
- `npm run security:docker` use Snyk to scan your `Dockerfile` and detect known vulnerabilities in the base image used for production mode.
