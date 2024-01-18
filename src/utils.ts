import { Metadata } from 'next';
import { z } from 'zod';

export const RepositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.string(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  pushed_at: z.coerce.date()
});

export const fetchAll = async () => {
  const response = await fetch('https://api.github.com/orgs/TanStack/repos', {
    next: { revalidate: 24 * 60 * 60 }
  })
    .then(r => r.json())
    .then(z.array(RepositorySchema).parse);

  return response.sort(
    (lhs, rhs) => lhs.pushed_at.getTime() - rhs.pushed_at.getTime()
  );
};

export const fetchRepo = async (name: string) => {
  return fetch(`https://api.github.com/repos/TanStack/${name}`, {
    next: { revalidate: 24 * 60 * 60 }
  })
    .then(r => r.json())
    .then(RepositorySchema.parse);
};
