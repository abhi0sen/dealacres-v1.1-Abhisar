"use client";
import React, { useState } from "react";
import ServiceLayout from "./ServiceLayout";
import styles from "./estateservice.module.css";
import data from "./dummyData";

const EstateService = () => {
  let [limit, setLimit] = useState(7);
  const filteredData = data["EstateService"].slice(0, limit);

  let toggleDisplay = () => {
    if (limit == -1) {
      setLimit(7);
    } else {
      setLimit(-1);
    }
  };
  return (
    <div>
      <div className={styles.EstateService}>
        <h2>Explore Our Real Estate Service</h2>
        <div className={styles.Services}>
        {filteredData.map((dt, index) => (
          <ServiceLayout
          key={index}
            color={dt.color}
            bgColor={dt.bgColor}
            service={dt.service}
            icon={dt.source}
          />
          ))}
          </div>
      </div>

      <div className="text-center">
        <button className={styles.MoreService} onClick={toggleDisplay}>
          {limit == -1 ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default EstateService;
