import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<ProjectDetail />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
