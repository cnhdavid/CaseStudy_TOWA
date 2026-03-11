import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Layout from './components/layout/Layout';
import Grid from './components/grid/Grid';
import SearchBar from './components/ui/SearchBar';
import useApi from './hooks/useApi';
// import { mockData } from './data/mockData';

const STARTERS = ["turtwig", "chimchar", "piplup"];

function App() {
  const { items: starters, loading, error } = useApi(STARTERS);
  const [query, setQuery] = useState("");

  const filteredItems = query.length >= 3
    ? starters.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : starters;

  return (
    <Layout>
      {loading && <p className="has-text-white has-text-centered">Loading...</p>}
      {error && <p className="has-text-danger has-text-centered">Failed to load data.</p>}
      {!loading && !error && (
        <>
          <SearchBar value={query} onChange={setQuery} />
          <Grid items={filteredItems} centered={query.length >= 3} />
        </>
      )}
    </Layout>
  );
}

export default App;
