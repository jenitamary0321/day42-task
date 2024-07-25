// src/components/Dashboard.js
import React from 'react';
import CreateURL from './CreateURL';
import URLList from './URLList';
import Analytics from './Analytics';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <CreateURL />
      <URLList />
      <Analytics />
    </div>
  );
}

export default Dashboard;
