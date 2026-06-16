import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1714",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
          <span style={{ color: "#FBF6EE" }}>Top&nbsp;</span>
          <span style={{ color: "#E2231A" }}>Colis&nbsp;</span>
          <span style={{ color: "#FBF6EE" }}>Bénin</span>
        </div>
        <div style={{ display: "flex", marginTop: 22, fontSize: 32, color: "#E3A21A", fontWeight: 600 }}>
          Livraison express au Bénin · Diaspora
        </div>
      </div>
    ),
    { ...size }
  );
}
