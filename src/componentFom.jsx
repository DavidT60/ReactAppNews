import React from "react";
import { Component } from "react";
import './form.css'
import SimpleReactValidator from 'simple-react-validator';


let active = {
    active: false,
    currrentTIme: new Date().getTime()
}


let wrongAction = React.createRef();
let loaderNocompleted = React.createRef();

class FomUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.validatorFrom = new SimpleReactValidator();
        this.typingaction =  this.typingaction.bind(this)
        this.sayForm = this.sayForm.bind(this)
    }
     
    // Make the validation fo eact action
    validing(dataFrom, wrongaction){
        let valider  = dataFrom.map((datafromVakue, index, array)=>{
        let confrim = true
        let complete = []
        
        for(let data in datafromVakue ){
         
            if(data === "fName"){
                //console.log('fName')
                let input = dataFrom[index][data]['target'].target.value
                if(input === ''){
                    confrim = false
                    dataFrom[index][data]['target'].target.classList.add('data-iputs-noValid')
                }
                dataFrom[index][data]['target'].target.classList.remove('data-iputs-noValid')
                complete.push(data)

               // console.log("PASSING")
               // console.log(confrim)
            }


            if(data === "sName"){
                //console.log("SName")
                let input = dataFrom[index][data]['target'].target.value
                if(input === ''){
                    confrim = false
                    dataFrom[index][data]['target'].target.classList.add('data-iputs-noValid')
                }
                dataFrom[index][data]['target'].target.classList.remove('data-iputs-noValid')
                complete.push(data)

               //  console.log("PASSING")
              //  console.log(confrim)                
            }

               
            if(data === 'eMail'){
                    //console.log('EMAIL')
                    let input = dataFrom[index][data]['target'].target.value
                    if(input.includes('@') && input.includes('gmail') && input.includes('.com') && input[0] !== '@' && input[0] !== '.'  && input[0] !== ' '){
                        dataFrom[index][data]['target'].target.classList.remove('data-iputs-noValid')
                        complete.push(data)
                        // console.log("PASSING")
                        // console.log(confrim)
                    }
                    else{
                    dataFrom[index][data]['target'].target.classList.add('data-iputs-noValid')
                    confrim = false
                }
            }


            if(data === 'pWord'){
                    //console.log('PASSWORD')
                    let input = dataFrom[index][data]['target'].target.value
                    // password formatvalidation letter Upprcase and number
                    if(input.length >= 8 && input.match(/[A-Z]/g) && input.match(/[0-9]/g )){
                        dataFrom[index][data]['target'].target.classList.remove('data-iputs-noValid')
                        wrongaction.style.color = "white"
                        complete.push(data)
                    }else{
                    dataFrom[index][data]['target'].target.classList.add('data-iputs-noValid')
                    confrim = false
                    wrongaction.style.color = "red"

                  }
                }


            if(data === 'cpWord'){
                    // password formatvalidation letter Upprcase and number
                    if( dataFrom[index]['pWord']['target'].target.value === dataFrom[index]['cpWord']['target'].target.value){
                        dataFrom[index][data]['target'].target.classList.remove('data-iputs-noValid');
                        complete.push(data)
                    }else{
                    dataFrom[index][data]['target'].target.classList.add('data-iputs-noValid');
                    confrim = false
                    }
                
                }

                
            }

            console.log("Opeing Confrim....")
            if(confrim){
                return{
                    isValid: confrim,
                    data: dataFrom,
                    domDone: complete
                }
            }else{
                return{
                    isValid: confrim,
                    data: 'NO VALIED DATA'
                }
            }
            
        })
       
        return valider
    } 
   


    validator(senderStatevalidaton, wrongaction){
        let actionValiding = this.validing(senderStatevalidaton, wrongaction)
        if(!actionValiding[0].isValid) return// interrup the function to the data not valied
        if(actionValiding[0].domDone.length === 5){
            console.log("VALID")
            /// TextContent
            wrongaction.style.color = "green"
            // chilldrens of the element
            let elements = loaderNocompleted.current.children.length
            for(let i = 0; i < elements; i++){
                loaderNocompleted.current.children[i].classList.remove('data-iputs-noValid')
            }
            actionValiding[0].domDone = []

             // display ui 
             active.active = !active.active
             this.props.passing(active)
        }else{
            console.log("NOT VALID")
            // chilldrens of the element
            let elements = loaderNocompleted.current.children.length
            for(let i = 0; i < elements; i++){
                loaderNocompleted.current.children[i].classList.add('data-iputs-noValid')
            }

            actionValiding[0].domDone = []
        }
        
    }


    // Tigger Action
    typingaction(eventAction){
        console.log("......")
        eventAction.preventDefault();
        
        // set the state value
        this.setState((state)=>{
            return {
                [eventAction.target.name] : {value: eventAction.target.value, target: eventAction}
            }
        })
    }
    
    //send from
    sayForm(){
        console.log(this.state)
        let senderStatevalidaton = [this.state] 
        this.validator(senderStatevalidaton, wrongAction.current)
    }

    //  from user acces
    render() { 
        return (
           <div className="box-principal"> 
                <div className="box-containner">
                    <h1>Registration From</h1>
                    <form ref={loaderNocompleted}>
                        <input name="fName"  className="data-iputs" type="text" placeholder="First Name" maxLength={20} onChange={this.typingaction} />
                        <input name="sName"  className="data-iputs" type="text" placeholder="Last Name  -Optional" maxLength={20}  onChange={this.typingaction} />
                        <input name="eMail"  className="data-iputs" type="text" placeholder="Email" onChange={this.typingaction} />
                        <label ref={wrongAction}>Password (8 characters minimum and Uppercase Letter including numbers ):</label> 
                        <input name="pWord"  className="data-iputs" type="password" placeholder="Password" minLength={8} onChange={this.typingaction}  required/>
                        <input name="cpWord" className="data-iputs" type="password" placeholder="Confirm Password" minLength={8}  onChange={this.typingaction} required />
                    </form>
                    <button name="actionSend" className="dessing-all-button" onClick={this.sayForm}>Register</button>
              </div>
           </div>
          );
    }
}
 
export default FomUser;


