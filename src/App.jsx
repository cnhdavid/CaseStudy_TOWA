import 'bulma/css/bulma.min.css';
import Layout from './components/layout/Layout';
import Grid from './components/grid/Grid';
import useApi from './hooks/useApi';
// import { mockData } from './data/mockData';

const STARTERS = ["turtwig", "chimchar", "piplup"];

function App() {
  const { items: starters, loading, error } = useApi(STARTERS);

  return (
    <Layout>
      {loading && <p className="has-text-white has-text-centered">Loading...</p>}
      {error && <p className="has-text-danger has-text-centered">Failed to load data.</p>}
      {!loading && !error && <Grid items={starters} />}
    </Layout>
  );
}

export default App;
