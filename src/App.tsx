import { PageProvider } from "./context/PageContext";

import { HomeDashboard } from "./pages/HomeDashboard";

function App() {
  return (
    <>
      <PageProvider>
        <HomeDashboard />
      </PageProvider>
    </>
  );
}

export default App;
