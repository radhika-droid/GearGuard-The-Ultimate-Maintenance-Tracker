import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import KanbanBoard from './pages/KanbanBoard';
import CalendarView from './pages/CalendarView';
import EquipmentList from './pages/EquipmentList';
import TeamsPage from './pages/TeamsPage';
import RequestsPage from './pages/RequestsPage';
import ActivityPage from './pages/ActivityPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/requests" element={<KanbanBoard />} />
          <Route path="/requests-all" element={<RequestsPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/equipment" element={<EquipmentList />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
