import 'bulma/css/bulma.min.css';
import Layout from './components/layout/Layout';
import Grid from './components/grid/Grid';
import { mockData } from './data/mockData';

function App() {
  return (
    <Layout>
      <Grid items={mockData} />
    </Layout>
  );
}

export default App;
