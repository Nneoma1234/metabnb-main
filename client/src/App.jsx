import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HomePage } from './pages';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import GeneralLoading from './components/general-loading/GeneralLoading';
import DefaultLayout from './layouts/DefaultLayout';
import PlaceToStay from './pages/place-to-stay/PlaceToStay';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <DefaultLayout>
          <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/place-to-stay" element={<PlaceToStay />} />
              <Route path='/login' element={<Login/>} />
              {/* <Route path='/singup' element={<SignUp/>} /> */}
              <Route path='/signup' element={<SignUp/>} />
              <Route
                path="*"
                element={<GeneralLoading text="PAGE NOT FOUND" />}
              />
            </Routes>
          </Suspense>
        </DefaultLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
