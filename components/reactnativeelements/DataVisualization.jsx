import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Area,
  Line,
  Tooltip,
} from "react-native-responsive-linechart";

function DataVisualization() {
  const windowWidth = Dimensions.get("window").width;
  const data = [
    { value: 50 },
    { value: 80 },
    { value: 10 },
    { value: 20 },
    { value: 90 },
    { value: 90 },
    { value: 90 },
    { value: 100 },
    { value: 30 },
    { value: 90 },
    { value: 90 },
    { value: 90 },
    { value: 120 },
    { value: 70 },
  ];

  const data2 = [
    {}
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LineChart width={windowWidth} data={data} />
      <Chart
        style={{ height: 200, width: "100%", marginTop: 100 }}
        data={data2}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 0, max: 500 }}
        yDomain={{ min: -4, max: 20 }}
      >
        <VerticalAxis
          tickCount={10}
          theme={{
            axis: { stroke: { color: "#aaa", width: 2 } },
            ticks: { stroke: { color: "#aaa", width: 2 } },
            labels: { formatter: (v) => v.toFixed(2) },
          }}
        />
        <HorizontalAxis
          tickCount={9}
          theme={{
            axis: { stroke: { color: "#aaa", width: 2 } },
            ticks: { stroke: { color: "#aaa", width: 2 } },
            labels: { label: { rotation: 50 }, formatter: Math.round },
          }}
        />
        <Area />
        <Line
          theme={{ stroke: { color: "red", width: 1 } }}
          tooltipComponent={
            <Tooltip theme={{ formatter: ({ y }) => y.toFixed(2) }} />
          }
        />
      </Chart>
    </View>
  );
}

export default DataVisualization;
