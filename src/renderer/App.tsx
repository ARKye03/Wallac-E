import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
/* import icon from '../../assets/icon.svg'; */
import './TailCss/output.css';
import routes from './routes.json';
import Sidebar from './components/sidebar';
import Hulk from './Hulk';

function Hello() {
  return (
    <div className="relative top-0 flex-col justify-center text-center">
      <h1 className="text-5xl hover:text-blue-300 cursor-default transition duration-300">
        Welcome to Wallace
      </h1>
      Here lies the Hulk and the Wall-E
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav className="absolute left-0 top-0 h-full w-16">
        <Sidebar />
      </nav>
      <Routes>
        <Route path={routes.Home} element={<Hello />} />
        <Route path={routes.Hulk} element={<Hulk />} Component={Hulk} />
        <Route path={routes.Graph} element={<Sidebar />} />
      </Routes>
    </Router>
  );
}
