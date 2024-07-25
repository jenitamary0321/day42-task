// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function Analytics() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get('/api/url/analytics');
        const analyticsData = res.data;
        setData({
          labels: analyticsData.dates,
          datasets: [
            {
              label: 'URLs Created',
              data: analyticsData.counts,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        alert('Error fetching analytics.');
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <Bar data={data} />
    </div>
  );
}

export default Analytics;
