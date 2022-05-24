
const { Client } = require('pg');// importamos el modulo
const process = require('process')
// const client = new Client({
//     connectionString: 'postgresql://postgres:postgres@localhost:5432/alwaysmusic_db'
// });

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: 'espinoza',
    port: 5432,
}
const client = new Client(config);

async function consulta() {
    await client.connect() //para conectarte a la base de datos
    const res = await client.query('SELECT nombre FROM estudiantes')
    console.log(res)
    client.end()
}
consulta()


// // 2. Crear una función asíncrona para registrar un nuevo estudiante
// async function ingresar() {
//     const res = await client.query(
//         "insert into estudiantes (nombre, rut, curso, nivel) values ('Brian May', '12.345.678-9', 'guitarra', '7') RETURNING *; ");
//     console.log(res);
//     client.end();
// }
// ingresar();

//3. Crear una función asíncrona para obtener por consola el registro de un estudiante
//por medio de su rut.

async function consultaRut(rut) {
    const res = await client.query(`SELECT * FROM estudiantes where rut = '${rut}'
`);
    console.log(`Registro con el rut: ${rut}`, res.rows[0]);
}
consultaRut('12.345.678-9')
    .then(() => client.end());