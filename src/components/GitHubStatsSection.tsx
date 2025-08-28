import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaCalendarAlt } from 'react-icons/fa';

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
  languages: { [key: string]: number };
  contributions: Array<{ date: string; count: number }>;
}

const GitHubStatsSection: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const username = "BreizhHardware"; // à adapter si besoin
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        // Infos utilisateur REST
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        });
        const userData = await userRes.json();

        // Repos pour stars/forks REST
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        });
        const reposData = await reposRes.json();

        // Calculs REST
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);
        // Langages
        const langCount: { [key: string]: number } = {};
        reposData.forEach((repo: any) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });
        const totalRepos = userData.public_repos;

        // GraphQL pour contributions
        const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);
  const fromDate = lastYear.toISOString(); // format complet ISO 8601
  const toDate = today.toISOString();
        const graphQLQuery = {
          query: `
            query {
              user(login: "${username}") {
                contributionsCollection(from: \"${fromDate}\", to: \"${toDate}\") {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                      }
                    }
                  }
                }
              }
            }
          `
        };
        const graphQLRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(graphQLQuery),
        });
        const graphQLData = await graphQLRes.json();
        const calendar = graphQLData.data.user.contributionsCollection.contributionCalendar;
        const totalCommits = calendar.totalContributions;
        // Flatten days
        const contributions: Array<{ date: string; count: number }> = [];
        calendar.weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            contributions.push({ date: day.date, count: day.contributionCount });
          });
        });

        setStats({
          totalRepos,
          totalStars,
          totalForks,
          totalCommits,
          languages: langCount,
          contributions,
        });
      } catch (e) {
        setStats(null);
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  const topLanguages = stats ? Object.entries(stats.languages).sort((a, b) => b[1] - a[1]).slice(0, 5) : [];

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mx-auto mb-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center justify-center gap-3">
          {t('github.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('github.description')}
        </p>
      </div>

      {stats && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaCode className="text-3xl text-blue-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalRepos}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('github.repositories')}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaStar className="text-3xl text-yellow-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalStars}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('github.stars')}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaCodeBranch className="text-3xl text-green-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalForks}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('github.forks')}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaCalendarAlt className="text-3xl text-purple-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalCommits !== -1 ? stats.totalCommits : "N/A"}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('github.commits')}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              {t('github.languages')}
            </h3>
            <div className="space-y-4">
              {topLanguages.map(([language, percentage], index) => (
                <div key={language} className="animate-slideInLeft" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{language}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full progress-fill transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${percentage}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              {t('github.activity')}
            </h3>
            {stats.contributions && (
              <div className="grid grid-cols-12 gap-1 max-w-3xl mx-auto">
                {stats.contributions.map((day, i) => {
                  let color = 'bg-gray-200 dark:bg-gray-700';
                  if (day.count > 10) color = 'bg-green-500';
                  else if (day.count > 5) color = 'bg-green-400';
                  else if (day.count > 2) color = 'bg-green-300';
                  else if (day.count > 0) color = 'bg-green-200';
                  return (
                    <div
                      key={day.date}
                      className={`w-3 h-3 rounded-sm ${color} animate-fadeInUp`}
                      style={{ animationDelay: `${i * 2}ms` }}
                      title={`${day.date}: ${day.count} commit${day.count > 1 ? 's' : ''}`}
                    />
                  );
                })}
              </div>
            )}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {t('github.legend')}<br/>
                {t('github.totalCommits')} : {stats.totalCommits}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubStatsSection;