# react-node-login back

.env template
```bash
## Enviroment variables
APP_PORT=3000

## Morgan config
MORGAN_CONFIG=

## Database Connection
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_PORT=

DB_LOGS= # Sequelize | boolean | print SQL logs in console?
DB_SYNC= # Sequelize | boolean | sync database on startup?

# Session
SESSION_KEY= # Name of the cookie
SESSION_SECRET= # Key to encrypt sessions cookie

## CORS | add allowed domains separated by a single space
# if using localhost, remember to add the "http://" part at
# the beggining
ALLOWED_ORIGINS=
```