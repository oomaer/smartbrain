import React , {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import AgeDetection from './components/AgeDetection/AgeDetection.js';
import GenderDetection from './components/GenderDetection/GenderDetection.js';
import RegionDetection from './components/RegionDetection/RegionDetection.js';
import SettingUpImage from './components/SettingUpImage/SettingUpImage.js';
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
            RegionDetect:'',
            route : 'SignIn',
            isSignedIn : false
            };
          }
      onInputChange = event => {
          this.setState({ input: event.target.value });
        };
        
      onClickEvent = () => {
          this.setState({ imgURL: this.state.input });
            app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
              response => {
                const Data =
                     response.outputs[0].data.regions[0].data.face
                const Age = Data.age_appearance.concepts[0].name;
                const Gender = Data.gender_appearance.concepts[0].name;
                const Region = Data.multicultural_appearance.concepts[0].name;
                this.setState({ AgeDetect: Age });
                this.setState({ GenderDetect: Gender });
                this.setState({ RegionDetect: Region });
              },
              function(err) {
                // there was an error
              }
             );
             
            
          };
   onRouteChange = (route) =>{
     if(route === 'SignIn'){
       this.setState({ isSignedIn : false });
     }
     else if (route === 'home'){
       this.setState({isSignedIn: true });
     }
    this.setState({route: route}) 
   };
   componentWillMount() {
        document.title = 'Artificial Intelligence'
          };
        

  render(){
  const { isSignedIn , route , imgURL , AgeDetect , GenderDetect , RegionDetect } = this.state
  return (
   <div className="App">
      <Particles className='particles'
          params={parameters} />
     <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
     {route === 'home'
     ?<div><Logo />
     <ImageLinkForm onInputChange={this.onInputChange} onClickEvent={this.onClickEvent} />
     <SettingUpImage imgURL={imgURL} />
     <AgeDetection AgeDetect={AgeDetect} />
     <GenderDetection GenderDetect={GenderDetect}/>
     <RegionDetection RegionDetect={RegionDetect}/>
     </div>
    :( route === "SignIn"
        ?<SignIn onRouteChange={this.onRouteChange}/>
        :<SignUp onRouteChange={this.onRouteChange}/>  
    )
    }
     </div>
  );
}
}

export default App;