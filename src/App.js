import Style from './App.module.css';
import DashBoard from './pages/dashboard/dashboard.js';
import Menu from './components/menu/menu.js';

function App() {
  return (
    <main className={`${Style.dFlex}`}>
      <Menu />
      <DashBoard/>
    </main>
  );
}

export default App;
