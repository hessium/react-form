import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import StepOne from './steps/StepOne';

const App = () => (
    <div className="app">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/step1' element={<StepOne />}/>
        </Routes>
    </div>
);

export default App;
