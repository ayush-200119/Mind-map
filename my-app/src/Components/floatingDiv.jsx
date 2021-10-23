import React from "react";
import Card from './Card';
import 'semantic-ui-css/semantic.min.css';
import HeaderExamplePage from "./TrackTitle";
import VerticalLine from "./verticalLine";
import TrackDetails from "../TrackDetails"

function FloatingDiv()
{
    return (
       
       <div className="grandparent"> 
        <div className="parent">
                <HeaderExamplePage heading="Track Title"/>
        <div className="cards">
             {/* <Card  
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                link="https://www.google.co.in"
                level="1"
                />
             <VerticalLine />
             <Card 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                link="https://www.google.co.in"
                level="2"
                />
             <VerticalLine />
             <Card 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                link="https://www.google.co.in"
                level="3"
                />
             <VerticalLine />
             <Card 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                link="https://www.google.co.in"
                level="4"
                />
             <VerticalLine />
             <Card 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                link="https://www.google.co.in"
                level="5"
                />
             <VerticalLine />
             <Card 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                link="https://www.google.co.in"
                level="6"
                />*/}
               {TrackDetails.map((track,index)=>{
                   if(index!==5){
                    return (
                    <div className="vlAndTrack">
                       <Card key={track.id} description={track.description} link={track.link} level={track.level} /> 
                        <VerticalLine />
                    </div>
                    );
                   }else{
                    return (
                    <div className="vlAndTrack">
                       <Card key={track.id} description={track.description} link={track.link} level={track.level} /> 
                        {/* <VerticalLine /> */}
                    </div>
                    );
                   }
                    
               })}
         
               </div>
        </div>
     </div>
    );
 }

 export default FloatingDiv;