import React , {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import AgeDetection from './components/AgeDetection/AgeDetection.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import './App.css';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Clarifai from 'clarifai';

 const app = new Clarifai.App({
  apiKey: 'cac51409614642bcadcc5350b86fc1c5'
 });

const parameters = {
          particles: {
              number: {
                  value :150,
                    density: {
                      enable : true ,
                      value_area : 1000
                      }
                  },
              size : {
                  value : 3.9
              },
              move : {
                  speed : 12.6 
              }
            },
           
        }
        
        class App extends Component {
          constructor() {
            super();
            this.state = {
              input: '',
              imgURL: '',
              AgeDetect: ''
            };
          }
          onInputChange = event => {
            this.setState({ input: event.target.value });
          };
        
          onClickEvent = () => {
            this.setState({ imgURL: this.state.input });
            app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
              response => {
                const A =
                  response.outputs[0].data.regions[0].data.face.age_appearance
                    .concepts[0].name;
        
                this.setState({ AgeDetect: A });
              },
              function(err) {
                // there was an error
              }
            );
          };
        

  render(){
    console.log(this.state);
  return (
   <div className="App">
      <Particles className='particles'
          params={parameters} />
     <Navigation />
     <Logo />
    <ImageLinkForm onInputChange={this.onInputChange} onClickEvent={this.onClickEvent} />
    <FaceRecognition imgURL={this.state.imgURL} />
    <AgeDetection AgeDetect={this.state.AgeDetect}/>
     </div>
  );
}
}

export default App;