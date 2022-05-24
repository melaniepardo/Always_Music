const { Client } = require('pg');// importamos el modulo
const process = require('process')
// const ingresar = require('./ingresar')
// const consultaRut = require('./consultaRut')
// const actualizar = require('./actualizar')
// const estudiantesRegistrados = require('./consultaEstudiantesRegistrados')
// const eliminar = require('./eliminar')

const argumentos = process.argv.slice(2)
const funcion = argumentos[0]
const rut = argumentos[1]
const nombre = argumentos[2]
const curso = argumentos[3]
const nivel = argumentos[3]

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

//Registrar un nuevo estudiante
async function ingresar() {
    const res = await client.query(
        "insert into estudiantes (nombre, rut, curso, nivel) values ('Brian May', '12.345.678-9', 'guitarra', '7') RETURNING *; ");
    console.log(res);
    client.end();
}
ingresar();

//Obtener por consola el registro de un estudiante por medio de su rut.

async function consultaRut(rut) {
    const res = await client.query(`SELECT * FROM estudiantes where rut = '${rut}'
`);
    console.log(`Registro con el rut: ${rut}`, res.rows[0]);
}
consultaRut('12.345.678-9')
    .then(() => client.end());

//Obtener por consola todos los estudiantes registrados.

async function estudiantesRegistrados() {
    const res = await client.query("select * from estudiantes");
    console.log("Registro: ", res.rows);
}
estudiantesRegistrados()
    //.then(() => consulta())
    .then(() => client.end());


//Actualizar los datos de un estudiante en la base de datos.

async function actualizar() {
    const res = await client.query(
        "UPDATE estudiantes SET nivel = '10' WHERE rut = '12.345.678-9' RETURNING*; "
);
    console.log('Registro modificado', res.rows[0]);
    client.end();
}
actualizar();

//Eliminar el registro de un estudiante de la base de datos.

async function eliminar() {
    const res = await client.query(
        "DELETE FROM estudiantes WHERE rut = '12.345.678-9' RETURNING*; "
    );
    console.log('Cantidad de registros afectados', res.rowCount);
    client.end();
}
eliminar();
