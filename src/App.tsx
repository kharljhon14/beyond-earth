import Hero from './features/hero';
import Projects from './features/projects';
import MainLayout from './layouts/main-layout';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Projects />
    </MainLayout>
  );
}

export default App;
