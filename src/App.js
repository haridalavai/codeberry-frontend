import './App.css';
import Body from './components/Body';
import Sidenav from './components/Sidenav';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Socials from './components/Socials';
import { users } from './users';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div
        className=""
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Header />
        <div className="" style={{ marginTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Body />} exact />
            <Route path="/about" element={<Socials />} />
            {/* <Route path="/shop" component={Shop} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
