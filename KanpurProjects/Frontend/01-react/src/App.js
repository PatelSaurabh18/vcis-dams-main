// import Page from './Components/DataPages/Page'
import "./App.css";
import MultipleProp from "./Components/AllProps/MultipleProp";
import Optionalprops from "./Components/AllProps/Optionalprops";
import PropsSpread from "./Components/AllProps/PropsSpread";
import Parent from "./Components/AllProps/ChildrenProps";
import OtherProps from "./Components/AllProps/OtherTypes";
import InValidProps from "./Components/AllProps/InvalidProps";


function App() {
  const arr = ["saurabh","aditya"];

  const x = {a:"React" , b:"Angular"};
  return (
    <>
    <MultipleProp x="saurabh" y="patel"/>
    <Optionalprops person="Saurabh Patel"/>
    <PropsSpread {...x}/>
    {/* <Parent Children={arr}/> */}
    <parent> <span> I'm a child!</span> </parent>
    <parent> 
      <div>
        <h1> HEllo Heading</h1>
       <p> Uper ek heading hai ye ek para hai</p>
      </div>

      <div>
      <h1> HEllo Heading</h1>
      <p> Uper ek heading hai ye ek para hai</p>
      </div>
    </parent>
    <OtherProps/>
    <InValidProps/>
    </>
  );
}

export default App;
