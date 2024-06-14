import React from "react";
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
  return (
    <div className="sidebar">
      <div className="upper-content">
        <div className="upper-sidebar">
          <div>
            <button className="back-btn">
              <IoArrowBack />
            </button>
          </div>
          <div>
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
          <li>
            <IoSpeedometerOutline /> ScoreCard
          </li>
          <li>
            <GrCycle /> Business Life Cycle
          </li>
          <li>
            <GrLineChart /> Market Capital Growth
          </li>
          <li>
            <MdOutlineContentPasteSearch /> Valuation
          </li>
          <li>
            <MdBalance /> Capital Structure
          </li>
          <li>
            <TbAnalyze /> Operational Metrices
          </li>
          <li>
            <BsCurrencyDollar />
            <SiSimpleanalytics /> Profitability
          </li>
          <li>
            <FaSackDollar /> Cash Flow
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
