// import React, { useEffect } from 'react';
// import { useState } from 'react';
import './mediaBoxes.css';
import { Component } from 'react';

// import dotenv from'C:/Users/david_tr3gr23/my-app/src/private/.env'
// dotenv.config()


function ConinetComponentFunction(props) {
    return (
        <div className="container-ui-display" key={Math.random()}>
        {props.data.articles.map((element, index)=>{
           return( 
            <div className="genralBoxDisplayer" key={Math.random()}>
                <img src={element['urlToImage']?element['urlToImage']:'https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG'}  className="imgArticule" alt={element['author']} key={Math.random()}/>
                <h6 className='mews-tatle' key={Math.random()}>{element['title']}</h6>
                <div className='container-Content'key={Math.random()}>
                    <samp className="description-boxes" key={Math.random()}>{element["description"]}<a href={element['url']} key={Math.random()}>...</a></samp>
                </div>
            </div>
           )
        })}
    </div>
    )
}



export class ComponentSocialmdia extends Component {
    constructor(props){
       super(props)
         this.state = {
                articules:'',
                status: false,
            }
    this.tarker = this.tarker.bind(this)
    
    }

    tarker(data){
        console.log('Traker..')
    }
   
    componentDidMount(){                        //Top & 7 categories News//
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        `apiKey=dd9b14d3788b4b90989154d0d4acc02e`;
        let req = new Request(url);
       fetch(req).then(response => response.json())
        .then(data => {
            console.log("Loading...")
            this.setState({
                articules: data,
                status: true,
            })                    
        }).catch(error => {
            console.log(error)
           })
        
    }

 render(){
   return(
       this.state.articules.articles? <ConinetComponentFunction data={this.state.articules} key={Math.random()}/>:<div>Loading......</div>
    )
 }
}


