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
        // style={{
        //   fontSize: "42px",
        //   background: "white",
        //   width: "100%",
        //   height: "100%",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   flexDirection: "column",
        //   padding: "64px",
        // }}
        className="text-5xl bg-white h-full flex flex-col justify-center items-center p-16 w-full"
      >
        {/* TODO: Add content */}
        <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   gap: "40px",
          //   textAlign: "center",
          //   width: "100%",
          //   color: "black",
          // }}
          className="flex flex-col justify-center items-center gap-10 text-center w-full text-black"
        >
          <h1
            // style={{
            //   fontSize: "72px",
            // }}
            className="text-7xl"
          >
            TanStack Watch
          </h1>
          <p>Last updated: TanStack/{repo.name}</p>
          <p>Updated at: {repo.pushed_at.toUTCString()}</p>
        </div>
      </div>
    ),
    { ...size }
  );
}
