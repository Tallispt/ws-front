import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { colors } from "../../style/color";

const PlotContainer = ({ meanValues, regressionValues, channel, xLabel }) => {
  const colorsArray = [colors.red, colors.green, colors.teal300, colors.yellow];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fullData = [];
    for (let i = 0; i < channel.length; i++) {
      fullData.push({
        name: `${channel[i]}`,
        x: regressionValues[0][channel[i]],
        y: meanValues[`${channel[i]}_av`],
        mode: "markers",
        type: "scatter",
        error_y: {
          type: "data",
          array: meanValues[`${channel[i]}_std`],
          visible: true,
        },
        marker: {
          color: colorsArray[i],
        },
      });
      fullData.push({
        name: `${channel[i]} fitting`,
        x: regressionValues[0][channel[i]],
        y: regressionValues[1][channel[i]],
        mode: "lines",
        type: "scatter",
        marker: {
          color: colorsArray[i],
        },
      });
      setData(fullData);
    }
  }, []);

  return (
    <Box w="100%" h="100%">
      <Plot
        useResizeHandler
        data={data}
        layout={{
          autosize: true,
          xaxis: {
            title: xLabel,
          },
          yaxis: {
            title: `Relative intencity of ${channel}`,
          },
          margin: {
            l: 50,
            r: 50,
            b: 50,
            t: 50,
            pad: 4,
          },
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default PlotContainer;
