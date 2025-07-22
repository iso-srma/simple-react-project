import React from "react";
import Button from "./button";
function App() {
  return (  
    <div className="App">
      <h1 style={{backgroundColor:"red"}}>Use ful website </h1>
      <p style={{backgroundColor:"green"}}>Here i listed you some useful webiste that you use in your daily life </p>
<Button name="google" link="https://google.com" />
<Button name="facebook" link="https://facebook.com" />
<Button name="youtube" link="https://youtube.com" />
<Button name="linkedin" link="https://linkedin.com" />
<Button name="github" link="https://github.com" />
<Button name="newsportal" link="https://ekantipur.com" />
<Button name="portfolio" link="https://yourportfolio.com" />

    </div>
  );

}
export default App;