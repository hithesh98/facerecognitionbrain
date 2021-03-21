import './App.css';
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey: '2c8b5db4fc574f0983d5c65b488b16ed'
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
      imageURL:''
    }
  }
  onInputChange = (event)=>{
   this.setState({input: event.target.value});
  }
  onButtonSubmit = () =>{
    this.setState({imageURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err){

      }
    );
  }
  render() {
    return (
      <div className="App">
        <Particles className = 'particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
