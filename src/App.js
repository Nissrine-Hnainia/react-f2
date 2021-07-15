import './App.css';
import ProfilePhoto from './components/Profile/ProfilePhoto';
function App() {
  // const myStyle= {
  //   backgroundColor: "wheat"
  // }
  return (
    <div className="App" style={{backgroundColor:"wheat"}} > {/* style={myStyle} */}
      <h1> Introduction to ReactJS </h1> {/* html element */}
      <ProfilePhoto />
    </div>
  );
}

{/*
  1-install react-bootstrap
  2-link bootstrap index.js or App.js
  3-Choose react-bootstrap Components 
  4-import the corresponding components in the same file where you are working 
  */}

export default App;