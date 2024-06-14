import React, { useState } from "react";

const Header = () => {
  const [currency, setCurrency] = useState("BUSD");
  const [company, setCompany] = useState("Nvidia");
  const [supplier, setSupplier] = useState("Companies(4/8)");
  const [competitor, setCompetitor] = useState("Companies(4/8)");
  const [customer, setCustomer] = useState("Companies(4/8)");
  return (
    <div className="header">
      <div className="dropdown-flex">
        <label htmlFor="currency">Currency</label>
        <select
          className="currency-select"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="BUSD">BUSD</option>
        </select>
      </div>
      <div className="inner-dropdown">
        <div className="dropdown-flex">
          <label htmlFor="Supplier">Supplier</label>
          <select
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          >
            <option value="supplier">Companies(4/8)</option>
          </select>
        </div>
        <div className="dropdown-flex">
          <label htmlFor="Company">Company</label>
          <select
            id="currency"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="Nvidia">{company}</option>
          </select>
        </div>
        <div className="dropdown-flex">
          <label htmlFor="competitor">Competitor</label>
          <select
            id="competitor"
            value={competitor}
            onChange={(e) => setCompetitor(e.target.value)}
          >
            <option value="BUSD">{competitor}</option>
          </select>
        </div>
        <div className="dropdown-flex">
          <label htmlFor="customer">Customer</label>
          <select
            id="currency"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          >
            <option value="BUSD">{customer}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
