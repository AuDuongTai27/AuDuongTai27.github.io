export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

export async function fetchGithubRepos(username: string = "AuDuongTai27"): Promise<GithubRepo[]> {
  const cacheKey = `github_repos_${username}`;
  const cacheTimeKey = `github_repos_time_${username}`;
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTime = localStorage.getItem(cacheTimeKey);

  // Cache trong 15 phút để tránh bị dính Rate Limit của GitHub API
  if (cachedData && cachedTime && Date.now() - Number(cachedTime) < 15 * 60 * 1000) {
    try {
      return JSON.parse(cachedData);
    } catch {
      // Skip cache parse error
    }
  }

  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

  if (!response.ok) {
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    throw new Error(`Lỗi kết nối GitHub API (${response.status})`);
  }

  const data: GithubRepo[] = await response.json();

  // Lọc lấy các repository chính chủ (bỏ repos fork từ người khác nếu muốn, ở đây lấy không phải fork)
  const repos = data.filter((repo) => !repo.fork);

  try {
    localStorage.setItem(cacheKey, JSON.stringify(repos));
    localStorage.setItem(cacheTimeKey, String(Date.now()));
  } catch {
    // Quota exceeded
  }

  return repos;
}
