import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main/Main';
import { NotFound } from '../pages/NotFound/NotFound';
import { UserProfile } from '../pages/UserProfile/UesrProfile';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        {/* <Route exact path="/seller/:idSeller" element={<SellerProfile />} />
        <Route path="/ad/:adId" element={<AdDetails />} /> */}
        <Route path="/user/:userId" Component={UserProfile} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};