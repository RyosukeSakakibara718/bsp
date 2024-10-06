import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

// ChartJS登録
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
  // 与えられたデータ
  const projects = {
    summary: {
      graph: [
        {
          target_month: '2024-08',
          achievement_cost: 120000,
          estimate_cost: 1248060,
        },
        {
          target_month: '2024-09',
          achievement_cost: 1260000,
          estimate_cost: 738245,
        },
        {
          target_month: '2024-10',
          achievement_cost: 240000,
          estimate_cost: 1482418,
        },
        {
          target_month: '2024-11',
          achievement_cost: 240000,
          estimate_cost: 1482418,
        },
        {
          target_month: '2024-12',
          achievement_cost: 240000,
          estimate_cost: 1482418,
        },
        {
          target_month: '2025-01',
          achievement_cost: 240000,
          estimate_cost: 1482418,
        },
      ],
    },
  };

  const getCumulativeData = (data) => {
    return data.reduce((acc, current, index) => {
      const sum = (index === 0) ? current : acc[index - 1] + current;
      acc.push(sum);
      return acc;
    }, []);
  };

  // achievement_cost と estimate_cost の累積データを生成
  const cumulativeAchievementCost = getCumulativeData(projects.summary.graph.map(item => item.achievement_cost));
  const cumulativeEstimateCost = getCumulativeData(projects.summary.graph.map(item => item.estimate_cost));

  // グラフデータの準備
  const data = {
    labels: projects.summary.graph.map(item => item.target_month),
    datasets: [
      {
        label: '実績原価',
        data: cumulativeAchievementCost,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.0, // 線の滑らかさ
      },
      {
        label: '予定原価',
        data: cumulativeEstimateCost,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0, // 線の滑らかさ
      },
    ],
  };

  // オプション設定
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '累積原価',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
