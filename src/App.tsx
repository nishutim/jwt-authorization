import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import { checkAuth } from './store/reducers/auth/thunk-creators';
import AppRouter from './router/AppRouter';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const [initialized, setInitialized] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth())
      .then(() => setInitialized(true));
  }, []);

  return (
    <div className='appWrapper'>
      {initialized ?
        <AppRouter />
        :
        <Preloader />}
    </div>
  );
}

export default App;
