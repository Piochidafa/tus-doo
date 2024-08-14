import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from './App.jsx'
import Home from './Pages/Home.jsx';
import { TodoUnit } from './Pages/TodoUnit.jsx';

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='*' element={<h1>404 Nao achei DOG</h1>} />
            <Route path='/hm' element={<Home/>} />
            <Route path='/unidade' element={<TodoUnit titulo={"perereca"} descricao={"descricao phoda"}/>}/>
        </Routes>
    </BrowserRouter>
  </PrimeReactProvider>
)
