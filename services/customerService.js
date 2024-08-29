// services/customerService.js

const pool = require("../db");

const CustomerService = {
  getAllCustomers: async () => {
    const result = await pool.query("SELECT * FROM customer ORDER BY no ASC");
    return result.rows;
  },

  getCustomerByNo: async (no) => {
    const result = await pool.query("SELECT * FROM customer WHERE no = $1", [
      no,
    ]);
    return result.rows[0];
  },

  createCustomer: async (nama, alamat, kota) => {
    const result = await pool.query(
      "INSERT INTO customer (nama, alamat, kota) VALUES ($1, $2, $3) RETURNING *",
      [nama, alamat, kota]
    );
    return result.rows[0];
  },

  updateCustomer: async (no, nama, alamat, kota) => {
    const result = await pool.query(
      "UPDATE customer SET nama = $1, alamat = $2, kota = $3 WHERE no = $4 RETURNING *",
      [nama, alamat, kota, no]
    );
    return result.rows[0];
  },

  deleteCustomer: async (no) => {
    const result = await pool.query(
      "DELETE FROM customer WHERE no = $1 RETURNING *",
      [no]
    );
    return result.rows[0];
  },
};

module.exports = CustomerService;
