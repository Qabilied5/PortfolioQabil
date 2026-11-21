export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  liveUrl?: string;
  repoUrl?: string;
}