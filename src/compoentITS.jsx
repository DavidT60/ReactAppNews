import React from "react";
import { Component } from "react";
import './compoentITS.css';



// compoennt ITS //
import DialogBox from './boarMove'

// React UI ..//
class Entery extends Component{
    constructor(props){
        super(props);
        this.typingactionActive = this.typingactionActive.bind(this)
        this.state = {
            active: false,
            currentTIme: new Date().getTime()
        }
    }

    // SetState  active//
    typingactionActive(){
       return this.setState({
            active: !this.state.active,
            currentTIme: new Date().getTime()
        })

    }

   
    render(){
        return(
            <div>
              <div className="class-bosy--entery">
                 <DialogBox/>
               </div>
            </div>
        )
    }

}

export default Entery;