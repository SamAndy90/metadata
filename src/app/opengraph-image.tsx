import { fetchRepo } from "@/utils";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params, // read [repository] route slug
}: {
  params: { repository: string };
}) {
  // TODO: Fetch data
  const repo = await fetchRepo(params.repository);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 42,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 64,
        }}
      >
        {/* TODO: Add content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
            }}
          >
            TanStack Watch
          </h1>
          <p>Last updated: TanStack/{repo.name}</p>
          <p>Updated at: {repo.pushed_at.getTime()}</p>
        </div>
      </div>
    ),
    { ...size }
  );
}
