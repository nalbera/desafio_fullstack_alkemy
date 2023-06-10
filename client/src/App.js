import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/home/Home';
import { NewBudget } from './components/newBudget/NewBudget';
import { ListStatus } from './components/listStatus/ListStatus';
import { ModifyBudget } from './components/modifyBudget/ModifyBudget';
import { Register } from './components/register/Register';

function App() {
   
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new-budget' element={<NewBudget />} />
            <Route path='/list-status/:idStatus' element={<ListStatus />} />
            <Route path='/modify-budget' element={<ModifyBudget />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
