import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Calendar } from './pages/Calendar'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { FileManager } from './pages/FileManager'
import { News } from './pages/News'
import { WofficeCrm } from './pages/Projects/WofficeCrm'
import { WofficeTimeline } from './pages/Projects/WofficeTimeline'
import { TeamView } from './pages/Projects/TeamView'
import { TaskKanbanView } from './pages/Projects/TaskKanbanView'
import { Antennes } from './pages/Antennes'
import { Payment } from './pages/Payment'
import { Discussions } from './pages/Discussions'
import { Login } from './pages/Login'
import { useState } from 'react'
import { CreateNewMember } from './pages/Members/CreateMember'
import { NavBarProvider } from './components/NavBarContext'

function App() {
  const [isConnected, setConnected] = useState(true)
  return !isConnected ? (
    <Login isConnected={isConnected} setConnected={setConnected} />
  ) : (
    <div className="App">
      <NavBarProvider>
        <Navbar />
        <main>
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="members/create" element={<CreateNewMember />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="projects/woffice-crm" element={<WofficeCrm />} />
            <Route
              path="projects/woffice-timeline"
              element={<WofficeTimeline />}
            />
            <Route
              path="projects/task-kanban-view"
              element={<TaskKanbanView />}
            />
            <Route path="projects/team" element={<TeamView />} />
            <Route path="file" element={<FileManager />} />
            <Route path="news" element={<News />} />
            <Route path="antennes" element={<Antennes />} />
            <Route path="payment" element={<Payment />} />
            <Route path="discussions" element={<Discussions />} />
          </Routes>
        </main>
        <Sidebar />
      </NavBarProvider>
    </div>
  )
}

export default App
