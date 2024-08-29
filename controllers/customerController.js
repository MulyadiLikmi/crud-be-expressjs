// controllers/customerController.js

const CustomerService = require("../services/customerService");

const CustomerController = {
  getAllCustomers: async (req, res) => {
    try {
      const customers = await CustomerService.getAllCustomers();
      res.json(customers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getCustomerByNo: async (req, res) => {
    const { no } = req.params;
    try {
      const customer = await CustomerService.getCustomerByNo(no);
      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json(customer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createCustomer: async (req, res) => {
    const { nama, alamat, kota } = req.body;
    try {
      const newCustomer = await CustomerService.createCustomer(
        nama,
        alamat,
        kota
      );
      res.status(201).json(newCustomer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateCustomer: async (req, res) => {
    const { no } = req.params;
    const { nama, alamat, kota } = req.body;
    try {
      const updatedCustomer = await CustomerService.updateCustomer(
        no,
        nama,
        alamat,
        kota
      );
      if (!updatedCustomer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json(updatedCustomer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteCustomer: async (req, res) => {
    const { no } = req.params;
    try {
      const deletedCustomer = await CustomerService.deleteCustomer(no);
      if (!deletedCustomer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json(deletedCustomer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = CustomerController;
