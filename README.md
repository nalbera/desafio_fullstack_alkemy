# Challenge FullStack Alkemy 📋
## Objetivos del proyecto
Desarrollar una aplicación para administración de presupuesto personal. La misma debe
permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.
## Requerimientos técnicos
Deberás desarrollar una API en Node.js junto a cualquiera de los siguientes frameworks,
en sus versiones estables:<br>
    - Express
    - Adonis
    - Koa

Los datos mostrados deben ser persistidos en una base de datos relacional. El esquema de
datos puede armarse según se considere apropiado en base a los requerimientos del
negocio.<br>
La API deberá exponer URLS que devuelvan datos en JSON.<br>
Estos datos en JSON deberán ser consumidos por un cliente, a través de peticiones AJAX.<br>
El cliente puede ser armado con React.js.<br>
El trabajo realizado se subirá a un repositorio.<br>
## Secciones
### Home
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los
ingresos y egresos de dinero cargados, y un listado de los últimos 10 registrados.
### ABM de operaciones (ingresos y egresos)
La aplicación deberá contener:<br>
<ul>
    <li>Formulario de registro de operació. El mismo deberá contener:</li>
    <ul>
        <li>Concepto</li>
        <li>Monto</li>
        <li>Fecha</li>
        <li>Tipo (ingreso o egreso)</li>
    </ul>
    <li>Listado de operaciones registradas según su tipo (ingreso o egreso).</li>
    <li>Desde el listado, se debe poder modificar o eliminar una operación registrada
previamente. No debe ser posible modificar el tipo de operación (ingreso o
egreso) una vez creada.</li>
</ul>

## BoilerPlate
El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=user-postgres
DB_PASSWORD=password-postgres
DB_HOST=localhost
DB_NAME=personal_budget
DB_DIALECT=postgres
DB_PORT=5432
```
Reemplazar `user-postgres` y `password-postgres` con sus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en el archivo .gitignore, ya que contiene información sensible (sus credenciales).

Adicionalmente creamos desde pgAdmin una base de datos llamada `personal_budget`

### Endpoints
- GET - /current-balance:
    - Este endpoint devuelve el balance entre los ingresos y egresos de dinero
- GET - /last-ten:
    - Devuelve un listado con los últimos 10 movimientos realizados
- GET - /list-status:
    - Este endpoint recibe en su `querystring` el tipo de operación y devuelve un listado de operaciones por su tipo
- POST - /budget:
    - Crea una nueva entrada con los siguientes datos `date, description, amount, "typeId"`
- PATCH - /budget/:id:
    - Permite modificar los datos de una entrada específica
- DELETE - /budget/:id
    - Elimina una determinada entrada
- GET - /all
    - Endpoint de prueba para listar todas las entradas

### Tecnologías
#### Backend
- `Express`
- `Express Validator`
- `Cors`
- `Dotenv`
- `Morgan`
- `Nodemon`
- `Pg - Postgres`
- `Sequelize`

#### Frontend
- `React`
- `React Router Dom`
- `SweetAlert2`
### Correr el proyecto en producción (api)⚙️
```
npm start
```
### Correr el proyecto en desarrollo (api)⚙️
```
npm run dev
```
### Correr el proyecto en desarrollo (client)⚙️
```
npm start
```
### Aclaraciones
- Antes de ejecutar el proyecto deberá correr la api `npm run dev` o `npm start` y ejecutar desde pgAdmin los siguientes comandos:
```
INSERT INTO public.types(
	id, description)
	VALUES (1, 'Income');

INSERT INTO public.types(
	id, description)
	VALUES (2, 'Bills');
```
