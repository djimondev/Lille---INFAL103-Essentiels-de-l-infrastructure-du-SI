# GIT-FLOW

Git-Flow is workflow allowing to work with features, bugfixes, releases and keep a clean workflow.

## First approach

Please read [this](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20est%20un%20workflow%20Git,de%20d%C3%A9veloppement%20continu%20et%20DevOps)

## With the CLI git-flow-avh

### Installation

See the wiki to get updated [installation instructions](https://github.com/petervanderdoes/gitflow-avh/wiki/Installation)

### Some commands

```bash
git flow init # to init your repository with git-flow

# to create a new feature
git flow feature start "#id" # to start a new feature
#... git add and git commit -m
git flow feature publish # to push modifications on the repo
git flow feature finish # to merge modifications on develop

# to create a new bugfix
git flow bugfix start "#id" # to start a new bugfix
#... git add and git commit -m
git flow bugfix publish # to push modifications on the repo
git flow bugfix finish # to merge modifications on develop

# to create a new release
git flow release start "1.x.x" # to start a new release with the version identifier
#... git add and git commit -m
git flow release publish # to push modifications on the repo
git flow release finish # to merge on main

# to create a new hotfix
git flow hotfix start "1.x.x-1" # to start a new hotfix with the version identifier
#... git add and git commit -m
git flow hotfix publish # to push modifications on the repo
git flow hotfix finish # to merge on main and then on develop

```

Please refer to [semantic versioning](https://semver.org/lang/fr/#gestion-s%C3%A9mantique-de-version-200) to create you releases versions numbers
