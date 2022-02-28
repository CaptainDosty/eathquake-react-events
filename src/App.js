import './App.css';
import Home from './Home';   import Details from './Details';   import { Route, Routes } from 'react-router';
function App() {
  return (
<Routes>    <Route exact path="/" element={<Home/>} />    <Route path="/Details/:eventId" element={<Details/>} />           </Routes>  );
}

export default App;
