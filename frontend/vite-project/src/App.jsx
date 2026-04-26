import React from 'react';
import { BrowserRouter as Router, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';

const App = () => {
  return (
    <Router>
      <div className="app-shell">
        <header className="topbar">
          <div>
            <p className="brand-kicker">Visual social app</p>
            <h1 className="brand-title">PicStream</h1>
          </div>

          <nav className="topbar-nav">
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                `nav-pill${isActive ? ' nav-pill-active' : ''}`
              }
            >
              Feed
            </NavLink>
            <NavLink
              to="/create-post"
              className={({ isActive }) =>
                `nav-pill${isActive ? ' nav-pill-active' : ''}`
              }
            >
              Create Post
            </NavLink>
          </nav>
        </header>

        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
