import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main/Main';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};