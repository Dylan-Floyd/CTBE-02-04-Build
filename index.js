function getMethod(reqString) {
  const rows = reqString.split('\n\r');
  return rows[0].split(' ')[0];
}

module.exports = { getMethod };
