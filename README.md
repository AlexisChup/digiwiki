# DigiWiki

## Folder Structure

```
📂skeleton-docker-react-symfony
┣📦apps
┃┣ 📂back-symfony
┃┣ 📂front-react
┃┣ 📂logs
┃┣ 📂nginx
┃┗ 📂php-fpm
┣ 📜.env
┣ 📜.gitignore
┣ 📜Makefile
┗ 📜README.md
```

## Requirement

- Windows: WSL2 & Docker Desktop
- Linux / Max: Docker

## Installation

- `git clone https://github.com/AlexisChup/skeleton-docker-react-symfony.git`

## Usage

### Start containers the 1st time or when you have added libs

- `make runbuild`
- Wait few minutes, the 1st build might take some times
- Generate the SSL keys
- - Run `docker exec -it php-fpm sh`
- - Run `php bin/console lexik:jwt:generate-keypair`
- Load Fixtures
- - Run `php bin/console doctrine:fixtures:load`
- Open browser at [http://localhost:9090](http://localhost:9090)

### Start containers other times

- Run containers: `make run`
- Wait about few seconds until containers are started
- Open browser at [http://localhost:9090](http://localhost:9090)

### Stop containers

- Run `make stop`

## Architecture

### Back Symfony

#### Load fixtures

1. Run `docker exec -it php-fpm sh`
2. Run `php bin/console doctrine:fixtures:load`

#### Make entity and save in in database

1. Run `docker exec -it php-fpm sh`
2. Run `php bin/console make:entity`
3. Run `php bin/console make:migration`
4. Run `php bin/console doctrine:migrations:migrate`

#### Persisting Objects to the Database

1. Run `docker exec -it php-fpm sh`
2. Run `php bin/console make:entity`
3. Run `php bin/console make:controller XXXXController`

#### Miscellaneous

See [SymfonyDoc](https://symfony.com/doc/current/doctrine.html) for more

### Front React

#### Libs

- react-bootstrap
- react-icons
- react-redux
- react-router-dom
- react-toastify

#### Install new libs

1. Run `docker exec -it front-react sh`
2. Run `npm install my-lib`
