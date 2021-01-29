## IoT temperature sensors

IoT temperature sensors administration in React using backend API from a dockerized service.

All API interactions must be authenticated using a Simple OAuth2 with Username/Password and Bearer (JWT token). The JWT token is taken from the login at endpoint http://127.0.0.1/auth/login.
The frontend client implements an administration page for managing all temperature sensors of a logged user.

<kbd><img src="https://github.com/girls-incode/temperature_control_api/blob/master/admin-api-react-login.jpg" alt="" /></kbd>
<br/><br/>
<kbd><img src="https://github.com/girls-incode/temperature_control_api/blob/master/admin-api-react-table-list.jpg" alt="" /></kbd>
<br/><br/>
###  Endpoints

> GET: /api/v1/sensors/, /api/v1/sensors/{sensor_id}

> POST: /api/v1/sensors/

> PUT: /api/v1/sensors/{sensor_id}

> PATCH: /api/v1/sensors/{sensor_id}

> DELETE: /api/v1/sensors/{sensor_id}

### Run

#### `yarn start`

#### `yarn run test`

#### `yarn build`

### Tech Stack
- [x] React
- [x] Typescript
- [x] Redux Saga
- [x] Elastic EUI
- [x] Enzyme
- [x] Jest
