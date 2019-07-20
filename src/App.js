import React , {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import AgeDetection from './components/AgeDetection/AgeDetection.js';
import GenderDetection from './components/GenderDetection/GenderDetection.js';
import RegionDetection from './components/RegionDetection/RegionDetection.js';
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
            AgeDetect: '',
            GenderDetect:'',
            RegionDetect:''
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
             app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
              response => {
                const B =
                  response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name;
          
               this.setState({ GenderDetect: B });
              },
              function(err) {
                // there was an error
              });
              app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
                response => {
                  const C =
                    response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name;
              
                 this.setState({ RegionDetect: C });
                },
                function(err) {
                  // there was an error
                });
          };
   componentWillMount() {
        document.title = 'Age Guess App'
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
    <GenderDetection GenderDetect={this.state.GenderDetect}/>
    <RegionDetection RegionDetect={this.state.RegionDetect}/>

     </div>
  );
}
}

export default App;