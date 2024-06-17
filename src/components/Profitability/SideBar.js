import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GrCycle } from "react-icons/gr";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { MdBalance } from "react-icons/md";
import { TbAnalyze } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";

const Sidebar = () => {
  const [active, setActive] = useState("Profitability");

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <div className="sidebar">
      <div className="upper-content">
        <div className="upper-sidebar">
          <div>
            <button className="back-btn">
              <IoArrowBack />
            </button>
          </div>
          <div className="benchmark">
            <h1>Benchmark</h1>
          </div>
        </div>
        <div className="sidebar-para">
          <p>
            compare peroformance of companies against supplier, competitors and
            customers
          </p>
        </div>
      </div>
      <div className="lower-content">
        <p className="content-menu">Content Menu</p>
        <ul>
          <li
            className={active === "ScoreCard" ? "active" : ""}
            onClick={() => handleClick("ScoreCard")}
          >
            <IoSpeedometerOutline /> ScoreCard
          </li>
          <li
            className={active === "Business Life Cycle" ? "active" : ""}
            onClick={() => handleClick("Business Life Cycle")}
          >
            <GrCycle /> Business Life Cycle
          </li>
          <li
            className={active === "Market Capital Growth" ? "active" : ""}
            onClick={() => handleClick("Market Capital Growth")}
          >
            <GrLineChart /> Market Capital Growth
          </li>
          <li
            className={active === "Valuation" ? "active" : ""}
            onClick={() => handleClick("Valuation")}
          >
            <MdOutlineContentPasteSearch /> Valuation
          </li>
          <li
            className={active === "Capital Structure" ? "active" : ""}
            onClick={() => handleClick("Capital Structure")}
          >
            <MdBalance /> Capital Structure
          </li>
          <li
            className={active === "Operational Metrices" ? "active" : ""}
            onClick={() => handleClick("Operational Metrices")}
          >
            <TbAnalyze /> Operational Metrices
          </li>
          <li
            className={active === "Profitability" ? "active" : ""}
            onClick={() => handleClick("Profitability")}
          >
            <BsCurrencyDollar />
            <SiSimpleanalytics /> Profitability
          </li>
          <li
            className={active === "Cash Flow" ? "active" : ""}
            onClick={() => handleClick("Cash Flow")}
          >
            <FaSackDollar /> Cash Flow
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
