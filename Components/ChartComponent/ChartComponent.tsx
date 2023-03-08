import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import {
  Background,
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
} from "victory-native";

import { typographyStylesheet } from "../../Stylesheets/Typography";
import { useTheme } from "../../Theme/Index";

type ChartProps = {
  labels: string[];
  data: any[];
};
const dataFirstHalf: ChartProps = {
  labels: ["jan", "feb", "mar", "apr", "may", "jun"],
  data: [
    { x: 0, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 2 },
    { x: 7, y: 7 },
  ],
};

const dataSecondHalf: ChartProps = {
  labels: ["jul", "aug", "sep", "oct", "nov", "dec"],
  data: [
    { x: 0, y: 10 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 5, y: 5 },
    { x: 4, y: 4 },
    { x: 7, y: 7 },
  ],
};

const ChartComponent: React.FC<any> = (props) => {
  const [data, setData] = useState<ChartProps>(dataFirstHalf);
  const [test, setTest] = useState<boolean>(false);
  const { palette } = useTheme();

  const toggleLabels = () => {
    setTest(!test);
    test ? setData(dataSecondHalf) : setData(dataFirstHalf);
  };

  return (
    <>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "row",
          display: "flex",
          paddingTop: 10,
          backgroundColor: palette.mainTint,
        }}
      >
        <Text
          style={[
            typographyStylesheet.typographyCaption,
            { marginRight: 20, color: palette.main },
          ]}
        >
          {!test ? "First" : "Last"} half of the year
        </Text>
        <Pressable
          style={{
            backgroundColor: palette.mainTint,
            borderColor: palette.main,
            marginRight: 20,
            borderWidth: 1,
            display: "flex",
            borderRadius: 6,
            height: 32,
            width: 32,
            justifyContent: "center",
          }}
          onPress={() => toggleLabels()}
        >
          {!test ? (
            <Icon
              name={"chevron-right"}
              type="entypo"
              size={20}
              color={palette.main}
            />
          ) : (
            <Icon
              name={"chevron-left"}
              type="entypo"
              size={20}
              color={palette.main}
            />
          )}
        </Pressable>
      </View>
      <View style={{ backgroundColor: palette.mainTint }}>
        <VictoryChart
          domain={{ x: [1, 6], y: [1, 6] }}
          backgroundComponent={<Background rx={10} ry={10} />}
          style={{
            background: {
              fill: palette.mainLighter,
              fillOpacity: 0.2,
            },
          }}
          theme={{
            axis: {
              style: {
                axis: {
                  stroke: "none",
                },
                grid: {
                  fill: "none",
                  stroke: palette.mainLighter,
                  strokeOpacity: 0.5,
                },
              },
            },
          }}
        >
          <VictoryGroup
            data={data.data}
            color={palette.main}
            categories={{
              x: data.labels,
            }}
            animate={{
              easing: "poly",
              duration: 2000,
              onEnter: {
                duration: 2000,
                before: () => ({ opacity: 0 }),
                after: () => ({ opacity: 1 }),
              },
              onLoad: {
                duration: 2000,
                before: () => ({ opacity: 0 }),
                after: () => ({ opacity: 1 }),
              },
              onExit: {
                duration: 2000,
                before: () => ({ opacity: 1 }),
              },
            }}
          >
            <VictoryScatter
              size={4}
              symbol="circle"
              data={data.data}
              minDomain={{ y: 0 }}
            />
            <VictoryLine data={data.data} minDomain={{ y: 0 }} />
          </VictoryGroup>
          <VictoryAxis
            orientation="left"
            dependentAxis
            tickCount={4}
            tickLabelComponent={
              <VictoryLabel
                textAnchor="end"
                verticalAnchor="end"
                style={{
                  fill: palette.mainLight,
                  fontSize: 14,
                }}
              />
            }
          ></VictoryAxis>
          <VictoryAxis
            orientation="bottom"
            categories={{ x: data.labels }}
            tickLabelComponent={
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                style={{
                  fill: palette.mainLight,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
                backgroundPadding={{ top: 6 }}
                dy={8}
                dx={6}
              />
            }
            style={{
              grid: {
                fill: "none",
                stroke: "none",
              },
            }}
          ></VictoryAxis>
        </VictoryChart>
      </View>
    </>
  );
};

export default ChartComponent;
