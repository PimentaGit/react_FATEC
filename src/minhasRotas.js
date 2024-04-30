import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from ".Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";

export default function MinhasRotas() {
    return(
        <BrouwserRouter>
        <Routes>
            <Routes path="/" element={<Home />} />
            <Routes path="/atv01" element={<Atv01 />} />
            <Routes path="/atv02" element={<Atv02 />} />
        </Routes>
        </BrouwserRouter>
    )
}
