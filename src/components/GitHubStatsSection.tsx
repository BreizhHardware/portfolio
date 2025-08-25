import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaCalendarAlt } from 'react-icons/fa';

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
  languages: { [key: string]: number };
}

const GitHubStatsSection: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Données statiques en attendant l'API GitHub
  const mockStats: GitHubStats = {
    totalRepos: 25,
    totalStars: 47,
    totalForks: 12,
    totalCommits: 580,
    languages: {
      'C++': 35,
      'Python': 25,
      'JavaScript': 20,
      'C': 15,
      'Go': 5
    }
  };

  useEffect(() => {
    // Simulation du chargement
    setTimeout(() => {
      setStats(mockStats);
      setLoading(false);
    }, 1500);
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
          <FaGithub className="text-gray-800 dark:text-gray-200" />
          Statistiques GitHub
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Mon activité open source et contributions
        </p>
      </div>

      {stats && (
        <div className="space-y-8">
          {/* Stats principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaCode className="text-3xl text-blue-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalRepos}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Repositories</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaStar className="text-3xl text-yellow-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalStars}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Stars</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaCodeBranch className="text-3xl text-green-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalForks}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Forks</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover text-center">
              <FaCalendarAlt className="text-3xl text-purple-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stats.totalCommits}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Commits</p>
            </div>
          </div>

          {/* Langages les plus utilisés */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              Langages les plus utilisés
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

          {/* GitHub Graph simulé */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              Activité des 12 derniers mois
            </h3>
            <div className="grid grid-cols-12 gap-1 max-w-3xl mx-auto">
              {Array.from({ length: 365 }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7
                      ? 'bg-green-500'
                      : Math.random() > 0.5
                      ? 'bg-green-300'
                      : Math.random() > 0.3
                      ? 'bg-green-200'
                      : 'bg-gray-200 dark:bg-gray-700'
                  } animate-fadeInUp`}
                  style={{ animationDelay: `${i * 2}ms` }}
                  title={`Jour ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Plus sombre = Plus d'activité
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubStatsSection;
