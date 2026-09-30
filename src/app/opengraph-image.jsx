import { ImageResponse } from "next/og";

export const alt = "Legal257 – Loans, EMI calculator, GST & ITR filing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #172554 0%, #1E40AF 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#FCD34D" }}>Legal257</div>
        <div style={{ marginTop: 24, fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 950 }}>
          Business, Personal, Home &amp; Gold Loans
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#DBEAFE" }}>
          Check eligibility · EMI calculator · GST &amp; ITR filing
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignSelf: "flex-start",
            background: "#FBBF24",
            color: "#172554",
            fontSize: 30,
            fontWeight: 700,
            padding: "16px 36px",
            borderRadius: 14,
          }}
        >
          legal257.in
        </div>
      </div>
    ),
    size
  );
}
