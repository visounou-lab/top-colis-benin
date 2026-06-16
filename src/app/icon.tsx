import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1714",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 19,
        }}
      >
        <span style={{ color: "#FBF6EE" }}>T</span>
        <span style={{ color: "#E2231A" }}>C</span>
      </div>
    ),
    { ...size }
  );
}
