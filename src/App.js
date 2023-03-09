import './App.css';
import './fonts.css'
import { MainPage } from './components/pages/MainPage';
import { useWindowDimensions } from './components/atoms/WindowDimension';
import { MobilePage } from './components/pages/MobilePage';

function App() {
  const { width } = useWindowDimensions();
  return (width >= 1080) ? <MainPage/> : <MobilePage/>
}

export default App;
