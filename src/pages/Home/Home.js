import Sidebar from '../../parts/Sidebar/Sidebar';
import Header from '../../parts/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';

import { PageContainer, Aside, Main } from '../../styles/GlobalStyles';

function Home() {
  return (
    <PageContainer>
      <Aside className="aside">
        <Sidebar />
      </Aside>
      <Main className="main">
        <Header />
        <Dashboard />
      </Main>
    </PageContainer>
  );
}

export default Home;
