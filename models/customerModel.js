// models/customerModel.js

class Customer {
  constructor(no, nama, alamat, kota) {
    this.no = no; // Customer number, auto-incremental (primary key)
    this.nama = nama; // Name of the customer
    this.alamat = alamat; // Address of the customer
    this.kota = kota; // City of the customer
  }
}

module.exports = Customer;
