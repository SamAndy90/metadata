import { fetchRepo } from "@/utils";
import { GithubIcon } from "lucide-react";
import { Metadata } from "next";

// TODO: Add generateMetadata export that fetches current repository and returns its title and description.

export const generateMetadata = async ({
  params,
}: {
  params: { repository: string };
}) => {
  const repo = await fetchRepo(params.repository);
  const metadata: Metadata = {
    title: repo.name,
    description: repo.description,
  };
  return metadata;
};

export default async function Detail({
  params,
}: {
  params: { repository: string };
}) {
  const r = await fetchRepo(params.repository);

  return (
    <div className="max-w-5xl w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="mb-3 text-5xl font-semibold">TanStack/{r.name} </h2>
        <a href={r.html_url} target="_blank" rel="noopener noreferrer">
          <GithubIcon size={48} />
        </a>
      </div>
      <p className="m-0 opacity-75">{r.description}</p>
    </div>
  );
}
