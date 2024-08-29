// routes/customerRoutes.js

const express = require("express");
const CustomerController = require("../controllers/customerController");

const router = express.Router();

router.get("/", CustomerController.getAllCustomers);
router.get("/:no", CustomerController.getCustomerByNo);
router.post("/", CustomerController.createCustomer);
router.put("/:no", CustomerController.updateCustomer);
router.delete("/:no", CustomerController.deleteCustomer);

module.exports = router;
