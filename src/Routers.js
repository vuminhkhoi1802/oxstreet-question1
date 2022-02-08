import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProduct from './component/ListProduct';
import Detail from './component/Detail'
export const Routers =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListProduct />} />
        <Route exact path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}