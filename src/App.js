import React from 'react';
import { Navigate, Route, Router, Routes, useParams, useSearchParams } from 'react-router-dom';
import Layout from './layout';
import Gmail from './comp/Gmail';
import Docs from './comp/Docs';
import SSTrack from './comp/SS-track';
import Verdebooks from './comp/Verdebooks';
import ClickHR from './comp/ClickHR';
import CalendarComponent from './comp/GoogleCalender';
import Caiif from './comp/Caiif';
import Campaigns from './comp/Campaigns';
import Deals from './comp/Deals';
import Admin from './comp/Admin/Admin';

const App = () => {
  const role = "ADMIN";
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Gmail />} />
          <Route path='/:token' element={<Gmail />} />
          <Route path='/deals' element={<Deals />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/sstrack' element={<SSTrack />} />
          <Route path='/verdebooks' element={<Verdebooks />} />
          <Route path='/click HR' element={<ClickHR />} />
          <Route path='/calender' element={<CalendarComponent />} />
          <Route path='/caiif' element={<Caiif />} />
          <Route path='/campaigns' element={<Campaigns />} />
          <Route path='/admin' element={role === "ADMIN" ? <Admin /> : <Navigate to="/deals" />} />
          <Route path='*' element={<Navigate replace={true} to="/deals" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;