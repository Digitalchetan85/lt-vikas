import './App.css';
import Footer from './Components/Includes/Footer';
import VirtualTour from './Components/Includes/VirtualTour';
import ProjectHighlights from './Components/Includes/ProjectHighlights';
import Overview from './Components/Includes/Overview';
import MasterPlan from './Components/Includes/MasterPlan';
import AboutDevelopers from './Components/Includes/AboutDevelopers';
import Amenities from './Components/Includes/Amenities';
import FixedIcons from './Components/Includes/FixedIcons';
import Location from './Components/Includes/Location';
import MainSlider from './Components/Includes/MainSlider';
import Gallery from './Components/Includes/Gallery';
import Pricing from './Components/Includes/Pricing';
import HeaderBar from './Components/Includes/HeaderBar';
import SideForm from './Components/Includes/SideForm';

function App() {
  return (
    <>
      <HeaderBar />
      <MainSlider />
      <ProjectHighlights />
      <Overview />
      <MasterPlan />
      <Pricing />
      <Gallery />
      <Amenities />
      <VirtualTour />
      <Location />
      <AboutDevelopers />
      <FixedIcons />
      <SideForm />
      <Footer />
    </>
  );
}

export default App;
