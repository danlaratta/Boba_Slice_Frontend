import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import Home from './pages/Home';
import BobaMenu from './pages/BobaMenu';
import PizzaMenu from './pages/PizzaMenu';
import Navbar from './components/Navbar';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Container>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/boba' element={<BobaMenu />} />
        <Route path='/pizza' element={<PizzaMenu />} />
      </Routes>
    </Container>
  );
}

export default App;
