import './App.css';
import { Card } from './components/card/Card';
import { HomePage } from './components/homepage/HomePage';
import {MatchPage} from './components/matchpage/MatchPage'
import { GlobalStyle } from './GlobalStyle';



function App() {
  return (
    <div>    
      <GlobalStyle/>
      <Card/>    
    </div>
  );
}

export default App;
