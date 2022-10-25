import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='lg:mx-32 md:mx-10'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
