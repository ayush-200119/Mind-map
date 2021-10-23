import React from 'react'
import Card from './Card';

function App()
{
    return (
        <React.StrictMode>
        <div>
        <Card heading="Topic" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" link="https://www.google.co.in"/>
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" link="https://www.google.co.in"/>
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" link="https://www.google.co.in"/>
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" link="https://www.google.co.in"/>
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" link="https://www.google.co.in"/>
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" link="https://www.google.co.in"/>
    </div>
      </React.StrictMode>);
}

export default App;