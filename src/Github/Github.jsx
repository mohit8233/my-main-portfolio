import React, { useEffect, useState } from 'react';

const Github = () => {
  const username = "mohit8233";
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("updated");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    // fetch profile
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then(data => {
        setProfile(data);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoadingProfile(false));

    // fetch repos
    fetch(`https://api.github.com/users/${username}/repos?sort=${sortBy}&per_page=50`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then(data => {
        setRepos(data);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoadingRepos(false));
  }, [username, sortBy]);

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(filterText.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(filterText.toLowerCase()))
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      HTML: '#e34c26',
      CSS: '#1572B6',
      React: '#61dafb',
      Vue: '#4FC08D',
      Go: '#00ADD8',
      Rust: '#dea584',
      PHP: '#4F5D95'
    };
    return colors[language] || '#6b7280';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6">
      {error && (
        <div className="w-full max-w-4xl mb-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700 animate-pulse">
            {error}
          </div>
        </div>
      )}

      {loadingProfile ? (
        <div className="animate-pulse bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-full max-w-2xl mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-2xl mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="flex space-x-4">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      ) : profile && (
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center w-full max-w-2xl mb-8 transform transition-all duration-300 hover:shadow-xl">
          <div className="relative group">
            <img 
              src={profile.avatar_url} 
              alt={`${profile.login} avatar`} 
              className="w-32 h-32 rounded-2xl object-cover mb-4 transition-transform duration-300 group-hover:scale-105 ring-4 ring-gray-100"
            />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-semibold mb-1 text-center">
            {profile.name || profile.login}
          </h1>
          
          <p className="text-blue-600 font-medium mb-2">@{profile.login}</p>
          
          {profile.bio && (
            <p className="text-gray-600 mb-4 text-center max-w-md leading-relaxed">
              {profile.bio}
            </p>
          )}
          
          {(profile.location || profile.company || profile.blog) && (
            <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-gray-600">
              {profile.location && (
                <div className="flex items-center space-x-1">
                  <span>📍</span>
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.company && (
                <div className="flex items-center space-x-1">
                  <span>🏢</span>
                  <span>{profile.company}</span>
                </div>
              )}
              {profile.blog && (
                <div className="flex items-center space-x-1">
                  <span>🔗</span>
                  <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Website
                  </a>
                </div>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="text-center group cursor-default">
              <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-200">
                {profile.followers}
              </div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-200">
                {profile.following}
              </div>
              <div className="text-sm">Following</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-200">
                {profile.public_repos}
              </div>
              <div className="text-sm">Repositories</div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Repositories ({filteredRepos.length})</h2>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search repositories..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-0 sm:min-w-64"
              />
              
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="updated">Recently Updated</option>
                <option value="created">Recently Created</option>
                <option value="pushed">Recently Pushed</option>
                <option value="full_name">Name</option>
              </select>
              
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {loadingRepos ? (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-3'}`}>
              {Array(6).fill(null).map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-50 p-4 rounded-lg">
                  <div className="h-6 w-1/3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="flex space-x-4">
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No repositories found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 gap-4' 
                : 'space-y-3'
            }`}>
              {filteredRepos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${
                    viewMode === 'list' ? 'p-4' : 'p-4 sm:p-5'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <div className={`flex ${viewMode === 'list' ? 'items-center' : 'justify-between items-start'} mb-2`}>
                        <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200 flex items-center">
                          {repo.name}
                          {repo.fork && <span className="ml-2 text-xs text-gray-500">🍴</span>}
                        </h3>
                        {repo.language && (
                          <span 
                            className="text-sm font-medium px-3 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          >
                            {repo.language}
                          </span>
                        )}
                      </div>
                      
                      {repo.description && (
                        <p className={`text-gray-600 mb-3 leading-relaxed ${
                          viewMode === 'list' ? 'line-clamp-1' : 'line-clamp-2'
                        }`}>
                          {repo.description}
                        </p>
                      )}
                    </div>
                    
                    <div className={`flex ${viewMode === 'list' ? 'items-center space-x-6 ml-4' : 'justify-between items-center'} text-gray-500 text-sm`}>
                      <div className={`flex ${viewMode === 'list' ? 'space-x-4' : 'space-x-4'}`}>
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center space-x-1 hover:text-yellow-500 transition-colors duration-200">
                            <span>⭐</span>
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                            <span>🔄</span>
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1">
                          <span>🕒</span>
                          <span>{formatDate(repo.updated_at)}</span>
                        </div>
                      </div>
                      
                      {viewMode === 'grid' && (
                        <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                          →
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Github;