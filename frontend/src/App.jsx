import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profile';
import Transaction from './pages/Transaction';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </Provider>
  );
}

export default App;
