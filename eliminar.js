//6. Crear una función asíncrona para eliminar el registro de un estudiante de la base de
//datos.
const { Client } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: 'espinoza',
    port: 5432,
}

const client = new Client(config);

async function eliminar() {
    const res = await client.query(
        "DELETE FROM estudiantes WHERE rut = '12.345.678-9' RETURNING*; "
    );
    console.log('Registro de estudiante eliminado', res.rowCount);
    client.end();
}
eliminar();

module.exports = eliminar