import AboutUs from './features/about-us';
import Hero from './features/hero';
import News from './features/news';
import Projects from './features/projects';
import MainLayout from './layouts/main-layout';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <AboutUs />
      <News />
    </MainLayout>
  );
}

export default App;
