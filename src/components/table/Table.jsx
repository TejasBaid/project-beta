import React from "react";
import "./Table.scss";

export const Table = () => {
  const items = [
    {
      name: "Mark Greene (10-A) ",
      percetage: "96.7%",
    },
    {
      name: "Lorem Ipsum (10-H)",
      percetage: "96.7%",
    },
    {
      name: "Si Amet (10-E)",
      percetage: "96.7%",
    },
    {
      name: "Dolor Sit (10-D)",
      percetage: "96.7%",
    },
    {
      name: "Mark Greene (10-A) ",
      percetage: "96.7%",
    },
    {
      name: "Lorem Ipsum (10-H)",
      percetage: "96.7%",
    },
    {
      name: "Si Amet (10-E)",
      percetage: "96.7%",
    },
    {
      name: "Dolor Sit (10-D)",
      percetage: "96.7%",
    },
    {
      name: "Mark Greene (10-A) ",
      percetage: "96.7%",
    },
    {
      name: "Lorem Ipsum (10-H)",
      percetage: "96.7%",
    },
    {
      name: "Si Amet (10-E)",
      percetage: "96.7%",
    },
    {
      name: "Dolor Sit (10-D)",
      percetage: "96.7%",
    },
  ];
  return (
    <div className="update-stock-table">
      <div className="stock-table-header">
        <p className="table-title">No.</p>
        <div className="main-header">
          <p className="table-title">Name</p>

          <p className="table-title">Percentage</p>
        </div>
      </div>
      <div className="table-content">
        <div>
          {items.map((item, index) => {
            return (
              <div className="table-row">
                <p className="t-item-name">{index + 1}.</p>
                <div className="table-data">
                  <p className="t-item-name">{item.name}</p>

                  <p className="t-item-name">{item.percetage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
