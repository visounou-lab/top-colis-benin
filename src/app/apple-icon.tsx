import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1714",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 92,
        }}
      >
        <span style={{ color: "#FBF6EE" }}>T</span>
        <span style={{ color: "#C8102E" }}>C</span>
      </div>
    ),
    { ...size }
  );
}
