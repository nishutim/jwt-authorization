import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './router/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { checkAuth } from './store/reducers/auth/thunk-creators';

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
        <div>Loading...</div>}
    </div>
  );
}

export default App;
