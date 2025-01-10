import { Route, Routes } from 'react-router';
import Layout from '@/components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="country/:name" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
