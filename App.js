import './App.css';
import Calculator from './components/calculator';
import useWindowSize from './useWindowSize';

function App() {
  
  const {width}  = useWindowSize();
  return(
    <div>
      { width > 500 &&(
        <>
      <Calculator/>
      </>
      )}
    </div>
  )
}

export default App;