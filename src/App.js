import './App.css';
import ImageSelectin from './Components/ImageSelection'
import Sample from './Components/Sample'

function App() {
  return (
    <div>
      <div className='App'>
        <div class="navbar navbar-light bg-light Header">
          <img style={{ position: "absolute", left: "50px", top: "20px", width: "150px" }} src="https://www.pearson.com/content/dam/global-store/global/images/ui/logos/pearson-logo.svg" alt="selectimg.png" />
          <div className="headerText text-justify">
            <h1 className='h1'>Image Upload Tool Prototype</h1>
          </div>
        </div>
      </div>
      <ImageSelectin />
      {/* <Sample /> */}
    </div>
  );
}

export default App;
