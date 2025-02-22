import React from "react";
import { Svg, Path } from "react-native-svg";
import { ImageSourcePropType } from "react-native";

interface IconProps {
  size?: number;
  color?: string;
  rotation?: number;
}

export const ArrowDownLeft: React.FC<IconProps> = ({
  size = 24,
  color = "green",
  rotation = 0,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 21 21"
    style={{ transform: [{ rotate: `${rotation}deg` }] }} // Correct transform syntax
  >
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 13.5v-7h-7m7 0l-8 8"
    />
  </Svg>
);

export const ArrowUpRight: React.FC<IconProps> = ({
  size = 24,
  color = "green",
  rotation = 0,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ transform: [{ rotate: `${rotation}deg` }] }} // Correct transform syntax
  >
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 17H7m0 0V7m0 10L17 7"
    />
  </Svg>
);

export interface CallInfo {
  id: number;
  name: string;
  text: string;
  time: string;
  imagePath: ImageSourcePropType;
  callIcon: React.FC<IconProps>;
  icon: string;
}

// Calls Info Data
const callsInfo: CallInfo[] = [
  {
    id: 1,
    name: "Fatouma Ali Doualeh",
    text: "Today,",
    time: "15:42",
    imagePath: require("../assets/images/Profile/photo1.jpg"),
    callIcon: ArrowDownLeft,
    icon: "call",
  },
  {
    id: 2,
    name: "Bahdon Abdi Soubaneh",
    text: "Yesterday,",
    time: "10:30",
    imagePath: require("../assets/images/Profile/photo2.jpg"),
    callIcon: ArrowUpRight,
    icon: "call",
  },
  {
    id: 3,
    name: "Hamza Abdi Soubaneh",
    text: "17 February,",
    time: "20:02",
    imagePath: require("../assets/images/Profile/photo3.jpg"),
    callIcon: ArrowDownLeft,
    icon: "call",
  },
  {
    id: 4,
    name: "Hodan Abdi Soubaneh",
    text: "15 February,",
    time: "17:32",
    imagePath: require("../assets/images/Profile/photo4.jpg"),
    callIcon: ArrowUpRight,
    icon: "call",
  },
  {
    id: 5,
    name: "Macktireh Abdi Soubaneh",
    text: "Yesterday,",
    time: "10:02",
    imagePath: require("../assets/images/Profile/photo5.jpg"),
    callIcon: ArrowDownLeft,
    icon: "call",
  },
  {
    id: 6,
    name: "Ismael Abdi Soubaneh",
    text: "10 February,",
    time: "00:02",
    imagePath: require("../assets/images/Profile/photo6.jpg"),
    callIcon: ArrowUpRight,
    icon: "call",
  },
  {
    id: 7,
    name: "Soumaya Abdi Soubaneh",
    text: "19 February,",
    time: "08:02",
    imagePath: require("../assets/images/Profile/photo7.jpg"),
    callIcon: ArrowDownLeft,
    icon: "call",
  },
  {
    id: 8,
    name: "Ali Barkad",
    text: "8 January,",
    time: "18:15",
    imagePath: require("../assets/images/Profile/photo8.jpg"),
    callIcon: ArrowUpRight,
    icon: "call",
  },
  {
    id: 9,
    name: "Chady Osman",
    text: "18 January,",
    time: "20:02",
    imagePath: require("../assets/images/Profile/photo9.jpg"),
    callIcon: ArrowUpRight,
    icon: "call",
  },
  {
    id: 10,
    name: "Shamis Habane",
    text: "28 January,",
    time: "20:02",
    imagePath: require("../assets/images/Profile/photo10.jpg"),
    callIcon: ArrowDownLeft,
    icon: "call",
  },
];

export default callsInfo;
