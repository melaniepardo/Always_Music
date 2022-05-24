// 2. Crear una función asíncrona para registrar un nuevo estudiante
async function ingresar() {
    const res = await client.query(
        "insert into estudiantes (nombre, rut, curso, nivel) values ('Brian May', '12.345.678-9', 'guitarra', '7') RETURNING *; ");
    console.log(res);
    client.end();
}
ingresar();