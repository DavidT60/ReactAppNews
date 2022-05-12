import './userSettingSection.css';
import { Component } from 'react';
import React from 'react';


let closerBarSetting = React.createRef();


///* user-action-setting */

export class SettingDefault extends Component{
    constructor(props){
        super(props)
        this.state = {
            status: false
        }
    }
    render() { 
        return ( 
         <div className='cover-size-data'>
          
        </div> 
        );
    }
}



export class SettingOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false

        }

    }   
    render() { 
        return (
         <div className='user-action-setting'  ref={closerBarSetting}>
            <h1>1 Hello 👋</h1>
        </div> 
        );
    }
}




export class SettingTow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false

        }

    }   
    render() { 
        return (
         <div className='user-action-setting' ref={closerBarSetting}>
            <h1>2 Hello 👋</h1>
        </div> 
        );
    }
}



export class SettingThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false

        }

    }   
    render() { 
        return (
         <div className='user-action-setting' ref={closerBarSetting}>
            <h1>3 Hello 👋</h1>
        </div> 
        );
    }
}
 


export class SettingFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false

        }

    }   
    render() { 
        return ( 
        <div className='user-action-setting' ref={closerBarSetting}>
            <h1>4 Hello 👋</h1>
        </div> 
        );
    }
}
 





export class SettingFive extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }   
    render() { 
        return (
         <div className='user-action-setting' ref={closerBarSetting}>
            <h1>5 Hello 👋</h1>
        </div>
         );
    }
}
 




export class SettingSix extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }   
    render() { 
        return (
         <div className='user-action-setting' ref={closerBarSetting}>
            <h1>6 Hello 👋</h1>
        </div> 
        );
    }
}
 



export class SettingSeven extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
           

    render() {     
    return (
         <div className='user-action-setting' ref={closerBarSetting}>
            <h1>7 Hello 👋</h1>
        </div> 
        );
    }
}



export class SettingEight extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }   
    render() { 
        return (
         <div className='user-action-setting' ref={closerBarSetting}>
            <h1>8 Hello 👋</h1>
        </div> 
        );
    }
}
 

 
