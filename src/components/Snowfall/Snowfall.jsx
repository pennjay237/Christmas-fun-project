import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <Snowfall
      snowflakeCount={80}
      speed={[1, 3]}
      radius={[1, 5]}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
