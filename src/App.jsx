import './App.css';
import Card from './card';

const App = () => {
  return (
    <>
    <div className="main-container">
      <div></div>
      <span className="title">Food Truck Favorites</span>
      <div className="card-container">
        <Card/>
      </div>
    </div>
    </>
  )
}

export default App