import { ImageResponse } from "next/og";

export const alt = "Telio Software & Co.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0B0B0F", color: "#F7F8F2", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34 }}>
          <div style={{ width: 52, height: 52, background: "#C1E81B", color: "#0B0B0F", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>T</div>
          Telio Software & Co.
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
          <span>Software built around</span>
          <span style={{ color: "#C1E81B" }}>your business.</span>
        </div>
      </div>
    ),
    size,
  );
}
