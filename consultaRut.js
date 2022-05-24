async function consultaRut(rut) {
    const res = await client.query(`SELECT * FROM estudiantes where rut = '${rut}'
`);
    console.log(`Registro con el rut: ${rut}`, res.rows[0]);
}
consultaRut('12.345.678-9')
    .then(() => client.end());

module.exports = consultaRut