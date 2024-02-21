import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "About Acme";
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: 72,
              textAlign: "center",
            }}
          >
            TanStack/Ranger
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p>Stars: 1324</p>
            <p>Forks: 23</p>
            <p>Updated at: 645.654.654</p>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
