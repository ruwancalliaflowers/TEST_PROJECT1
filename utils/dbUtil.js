const INSERT_REGION = `INSERT INTO region (id, name, short_code, created_at, province_id, warehouse_id) VALUES (:id, :name, :short_code, now(), :province_id, :warehouse_id)`;
const DELETE_REGION = `DELETE FROM region WHERE id = :id`;
const SELECT_ALL_REGION = `SELECT * FROM region`;

module.exports = {
    INSERT_REGION,
    DELETE_REGION,
    SELECT_ALL_REGION
}