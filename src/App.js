import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Header } from './components/shared';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
