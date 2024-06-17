import React, { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsTable } from "react-icons/bs";
import { IoBarChart } from "react-icons/io5";

const Body = () => {
  const [activeLink, setActiveLink] = useState("Total Revenues");
  const [years, setYears] = useState("All");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="body-content">
      <div className="nav-container">
        <div className="nav-menu">
          <button className="btn-back">
            <IoChevronBackSharp />
          </button>
          <p
            className={`menu-links ${
              activeLink === "Total Revenues" ? "active" : ""
            }`}
            onClick={() => handleClick("Total Revenues")}
          >
            Total Revenues
          </p>
          <p
            className={`menu-links ${
              activeLink === "Cost of sales %" ? "active" : ""
            }`}
            onClick={() => handleClick("Cost of sales %")}
          >
            Cost of sales %
          </p>
          <p
            className={`menu-links ${
              activeLink === "Expenses %" ? "active" : ""
            }`}
            onClick={() => handleClick("Expenses %")}
          >
            Expenses %
          </p>
          <p
            className={`menu-links ${activeLink === "EBIT %" ? "active" : ""}`}
            onClick={() => handleClick("EBIT %")}
          >
            EBIT %
          </p>
          <button className="btn-forward">
            <IoChevronForwardSharp />
          </button>
        </div>
        <div className="nav-menu-dropdown">
          <div className="dropdown-year">
            <label>Years</label>
            <select
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            >
              <option value="All">All</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
            </select>
          </div>
          <div className="table-navigation">
            <label style={{ visibility: "hidden" }}>hidden</label>
            <div className="table-navigation-item">
              <button className="btn-forward">
                <BsTable />{" "}
              </button>
              <button className="btn-forward">
                {" "}
                <IoBarChart />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Company Name</th>
              <th>1991</th>
              <th>1992</th>
              <th>1993</th>
              <th>1994</th>
              <th>1995</th>
              <th>1996</th>
              <th>1997</th>
              <th>1998</th>
              <th>1999</th>
              <th>2000</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                backgroundColor: "#0F9FFC",
                color: "white",
              }}
            >
              <td>Primary Company</td>
              <td>Nvidia</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="td-color" rowSpan={4}>
                Suppliers
              </td>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr className="tr-style">
              <td className="row-color">Median</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
            </tr>
            <tr>
              <td className="td-color" rowSpan={4}>
                Competitors
              </td>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr className="tr-style">
              <td className="row-color">Median</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
            </tr>
            <tr>
              <td className="td-color" rowSpan={4}>
                Customers
              </td>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr>
              <td className="row-color">Company Name</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
              <td>0.02</td>
            </tr>
            <tr className="tr-style">
              <td className="row-color">Median</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;
