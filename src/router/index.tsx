import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../screens/Home'
import HomeV2 from '../screens/HomeV2'
import HomeV3 from '../screens/HomeV3'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="/v3" element={<HomeV3 />} />
      </Routes>
    </BrowserRouter>
  )
}
