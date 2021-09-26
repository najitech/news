import React from 'react';



const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/charts', name: 'Charts', component: Charts }
];

export default routes;
