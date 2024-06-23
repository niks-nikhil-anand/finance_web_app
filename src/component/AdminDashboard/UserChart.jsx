"use client"
import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const UserChart = () => {
  const [userStatuses, setUserStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();

        // Count occurrences of each status and role
        const statusCounts = data.reduce((acc, user) => {
          const status = user.status;
          const role = user.role;

          // Count status
          if (!acc.status[status]) {
            acc.status[status] = 0;
          }
          acc.status[status]++;

          // Count role
          if (!acc.role[role]) {
            acc.role[role] = 0;
          }
          acc.role[role]++;

          return acc;
        }, { status: {}, role: {} });

        setUserStatuses(statusCounts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-8">Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Role Distribution</h2>
        <Bar
          data={{
            labels: Object.keys(userStatuses.role),
            datasets: [
              {
                label: 'Role',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: Object.values(userStatuses.role),
              },
            ],
          }}
          options={{
            scales: {
              x: {
                type: 'category',
              },
            },
          }}
        />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Status Distribution</h2>
        <Pie
          data={{
            labels: Object.keys(userStatuses.status),
            datasets: [
              {
                data: Object.values(userStatuses.status),
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#FF9900',
                  '#4CAF50',
                  '#FF5733',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#FF9900',
                  '#4CAF50',
                  '#FF5733',
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default UserChart ;
