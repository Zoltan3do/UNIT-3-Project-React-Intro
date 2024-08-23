import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar"
import Tvshows from "./components/Tvshows"
import TrendingNow from './components/TrendingNow';
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className='bg-dark'>
      <Navbar />
      <main className="px-5 mt-5 ">
        <Tvshows />
        <section className="container mt-5 px-0 mx-0  d-flex flex-column align-items-center d-lg-block ms-lg-6  ">
          <TrendingNow term={"Avengers"} />
          <TrendingNow term={"Alien"} />
          <TrendingNow term={"Twilight"} />
        </section>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
