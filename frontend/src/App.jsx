import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/login';
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
        </Routes>
      </main>
      <Footer />
      </Router>
    </Provider>
  );
}

export default App;
