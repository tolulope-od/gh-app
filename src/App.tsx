import * as React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from './components/Alert';
import { StoreState } from './interfaces/store.interfaces';
import Routes from './routes';
import MainLayout from './views/layouts/MainLayout';

const Loader = () => <h5>Loading...</h5>;
export default function App() {
  const { Errormessage, isError } = useSelector(
    (state: StoreState) => state.Repositories,
  );
  return (
    <React.Suspense fallback={<Loader />}>
      {isError && <Alert Errormessage={Errormessage} />}
      <Router>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Router>
    </React.Suspense>
  );
}
