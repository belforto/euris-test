import { Polar } from "react-chartjs-2";
import React from "react";
import { useState } from "react";
import { categoryStats } from "../api/getStats";
import { useEffect } from "react";
import { randomHSL } from "../api/Settings";

export default function DataVisual() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();
  const [labels, setLabels] = useState();
  const [colors, setColors] = useState();

  const transformData = async () => {
      let data= await categoryStats();
     
    console.log("dataaa",data)
    await setLabels(data.map(x => x["category"]));
    await setColors(data.map(x => randomHSL()));
    await setData(data.map(x => x["numberOfProducts"]));
  };
  useEffect(() => {
    transformData();
  }, []);

  

  const dd = {
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        label: "My dataset" // for legend
      }
    ],
    labels: labels
  };

  return (
    <div className="notification is-white mt-4">
      {visible ? (
        <Polar data={dd} />
      ) : (
        <div className="field mt-5">
          <p className="control">
            <button
              className="button is-warning"
              onClick={x => setVisible(!visible)}
            >
              Category Stats
            </button>
          </p>
        </div>
      )}
    </div>
  );
}


