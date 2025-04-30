import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../screens/Home'
import HomeV2 from '../screens/HomeV2'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<HomeV2 />} />
      </Routes>
    </BrowserRouter>
  )
}
