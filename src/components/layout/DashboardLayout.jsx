import { useState } from 'react'
import Sidebar from './Sidebar'
import RightPanel from './RightPanel'
import './DashboardLayout.css'

const DashboardLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <main className={`main-workspace ${sidebarCollapsed ? 'sidebar-collapsed' : ''} ${rightPanelCollapsed ? 'right-panel-collapsed' : ''}`}>
        {children}
      </main>

      <RightPanel collapsed={rightPanelCollapsed} onToggle={() => setRightPanelCollapsed(!rightPanelCollapsed)} />
    </div>
  )
}

export default DashboardLayout
