import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

const Body = () => {
  return (
    <div className="body-content">
      <div className="nav-container">
        <div className="nav-menu">
          <button className="btn-back">
            <IoChevronBackSharp />
          </button>
          <p>Total Revenues</p>
          <p>Cost of sales %</p>
          <p>Expenses %</p>
          <p>EBIT %</p>
          <button className="btn-forward">
            <IoChevronForwardSharp />
          </button>{" "}
        </div>
        <div className="nav-menu-dropdown">
          <div className="dropdown-flex">
            <label>Years</label>
            <select>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
            </select>
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
            <tr>
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
              <td rowSpan={4}>Suppliers</td>
              <td>Company Name</td>
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
              <td>Company Name</td>
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
              <td>Company Name</td>
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
              <td>Median</td>
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
              <td rowSpan={4}>Competitors</td>
              <td>Company Name</td>
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
              <td>Company Name</td>
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
              <td>Company Name</td>
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
              <td>Median</td>
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
              <td rowSpan={4}>Customers</td>
              <td>Company Name</td>
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
              <td>Company Name</td>
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
              <td>Company Name</td>
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
              <td>Median</td>
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
