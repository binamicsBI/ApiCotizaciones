function getFechaFormateada() {
  const fecha = new Date();

  const pad = (n) => (n < 10 ? '0' + n : n);

  return `${pad(fecha.getDate())}-${pad(fecha.getMonth() + 1)}-${fecha.getFullYear()}`;
}

module.exports = {
  getFechaFormateada
};
