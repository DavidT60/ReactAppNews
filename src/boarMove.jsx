import React, { useEffect } from 'react';
import './userSetting.css';
import { useState } from 'react';
import { Component } from 'react';

//Touch Actions//


import losoSetting from './btsO.svg'
// import buttonSetting from './buttonSetting.svg'
// Componets Setting Imports//
import {SettingDefault, SettingOne, SettingTow, SettingThree, SettingFour,  SettingFive, SettingSix,  SettingSeven, SettingEight} from './settingAction/settingOne'
import {ComponentSocialmdia} from './genralCompoDisplayer.jsx'

let sayReferencesElement = React.createRef();
let closerBar = React.createRef();
let varRecomendation = React.createRef();




class SectionSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            currentTIme: new Date().getTime()
        }

        // Methods //
        this.returner = this.returner.bind(this)

    }


    // Render component //
    returner(param) {
        // console.log(param)
        let validor = param.data
        switch (validor) {
            case '1':
                return <SettingOne/>;
            case '2':
                return <SettingTow/>;
            case '3':
                return <SettingThree/>;
            case '4':
                return <SettingFour/>;
            case '5':
                return <SettingFive/>;
            case '6':
                return <SettingSix/>;
            case '7':
                return < SettingSeven/>;
            case '8':
                return <SettingEight/>;
            default:
                return <SettingDefault/>
                
        }
    }


    render() {
        return (
            <div>
                {this.returner(this.props.dataLoader.dataActon)}
            </div>
        )
    }
}





// setState
let dataStored = { data: false, statusBar: false }
let cachetDataSaved = []
// let actionSettingData = []
function SettingUseUi(props) {
    const [action, setAction] = useState({ currentPostionOpen: false, dataActon: dataStored.data });
    console.log(action)

    useEffect(() => {
        if (action.currentPostionOpen) {
            console.log("call API")
        }
        if (action.dataActon) {
            if(cachetDataSaved.includes(dataStored.data)) return
            cachetDataSaved.push(dataStored.data)
            // call api http://www.myApiCall[dataStored.data].com

            console.log(`call API Setting Section ${dataStored.data}`)
        }
    }, [action])




    // Action Touach ------//
    function actionSwipeMove(e){
        // console.log([...e.changedTouches])
        //  console.log("Swiping")
        //  console.log(`Direction left or right ${Math.floor(e.changedTouches[0].pageX)}`)
        //  console.log(`Direcction Top or bottom ${Math.floor(e.changedTouches[0].pageY)}`)
        
        //  let rightAndLEft = `${Math.floor(e.changedTouches[0].pageX)}`
        //  let topAndBOtton = `${Math.floor(e.changedTouches[0].pageY)}`

         let direction = e.changedTouches[0].pageX > 0 ?   "RIGHT" :  "LEFT"       
         if(direction === "RIGHT" ){
            console.log(action)
            sayReferencesElements()
         }
    }



    // Function Component //
    function sayReferencesElements() {
        // console.log('Close Setting or Open Setting')
        setAction({ currentPostionOpen: !action.currentPostionOpen, dataActon: dataStored.data })
        dataStored.statusBar = false
        props.data(action)
        console.log(action.currentPostionOpen)
    }

    function callCompinentType(event) {
        // Target name//
        // console.log(action)
        dataStored.data = event.target.attributes.name.value
        setAction({currentPostionOpen: false, dataActon: dataStored })
        dataStored.statusBar = true
    }

    return (
        <div>
            <SectionSetting dataLoader={action}  defaultValueLi={callCompinentType}/>
            <div className='setting-user-uiOpenClose' onClick={sayReferencesElements}  onTouchMove={(e)=> actionSwipeMove(e)} ref={closerBar}>
             {dataStored.statusBar? '←' : <img src={losoSetting} alt="setting" />}
             </div>
            <div className='box-validor'>
                <div className='box-user-data-avatar' >
                  <img src='https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg'alt="setting" className='back-banner-img' />
                    <div className='box-user-data-avatar-img' >
                        <img src='https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg'alt="setting" className='avatra-banner-setting-bar' />
                    </div>
                    <div className='box-user-data-avatar-name' >
                        <p><span>User Name</span></p>
                 </div>
              </div>
            </div>
            <h4>Options</h4>
            <ul className='data-li-user-setting'>
                <li className='setting-li' name='1' data-action-list onClick={callCompinentType}>My Account</li>
                <li className='setting-li' name='2' data-action-list onClick={callCompinentType}>User Profile</li>
                <li className='setting-li' name='3' data-action-list onClick={callCompinentType}>Privacy & Safety</li>
                <li className='setting-li' name='4' data-action-list onClick={callCompinentType}>Notifications</li>
                <li className='setting-li' name='5' data-action-list onClick={callCompinentType}>Help & Support</li>
                <li className='setting-li' name='6' data-action-list onClick={callCompinentType}>Lenguage</li>
                <li className='setting-li' name='7' data-action-list onClick={callCompinentType}>General</li>
                <li className='setting-li' name='8' data-action-list onClick={callCompinentType}>Log Out</li>
            </ul>
        </div>
    )
}



function DisplayContentUser(){
  return(
    <div>
        <p id='pTIme'>TIME</p>
        <ul className='golabal-bar-actions' ref={varRecomendation }>
            <li className='contents'>CURRENT</li> 
            <li className='contents'>LAST DAYS</li> 
            <li className='contents'>LAST WEEKS</li> 
            <li className='contents'>LAST MOSHT</li>
        </ul>
    </div>
 
    )
}





function ShoeBarMove(props) {
    return (
        <div>
            {props.contentuser}
            <div className='setting-user-ui2200' >
                {props.settingofComponent
                }
            </div>
        </div>
    )

}


function DialogBox(props) {
    // action shoe or hidden compoents..//
    function data(boooleanData) {
        console.log(boooleanData)
        boooleanData.currentPostionOpen ? sayReferencesElement.current.classList.add('closeSetting') : sayReferencesElement.current.classList.remove('closeSetting')
        boooleanData.currentPostionOpen ? sayReferencesElement.current.classList.remove('data-setting') : sayReferencesElement.current.classList.add('data-setting')

        // add class list close or  add class list open// 
        boooleanData.currentPostionOpen ? closerBar.current.classList.remove('setting-user-uiOpen') : closerBar.current.classList.add('setting-user-uiOpen')

        boooleanData.currentPostionOpen ? varRecomendation.current.classList.remove('golabal-bar-actions-close') : varRecomendation.current.classList.add('golabal-bar-actions-close')

    }

    // Afther the render the component//
    useEffect(() => {
        // //Top Search//
        // var url = 'https://newsapi.org/v2/everything?' +
        // 'q=Tesla&' +
        // 'from=2022-05-09&' +
        // 'sortBy=popularity&' +
        // 'apiKey=dd9b14d3788b4b90989154d0d4acc02e';

        // var req = new Request(url);

        // fetch(req)
        // .then(response => response.json())
        // .then(data => {
        //     console.log("Loading...")
        //     console.log(data);
        // });


        //Top & 7 categories News//
        // var url = 'https://newsapi.org/v2/top-headlines?' +
        //   'country=us&' +
        //   'apiKey=dd9b14d3788b4b90989154d0d4acc02e';
        // var req = new Request(url);
        // fetch(req).then(response => response.json())
        // .then(data => {
        //     console.log("Loading...")
        //     console.log(data);
        //     container[0].containerNews = data
        //   })
        })




    return (
        <div className='class-bosy--entery'>
          <div className="container-ui-display">
           <ComponentSocialmdia/>
          </div>
             <div className='closeSetting' ref={sayReferencesElement}>
                <ShoeBarMove settingofComponent={<SettingUseUi dayOpened={Date.now()} data={data}/>} contentuser={<DisplayContentUser/>}/>
             </div>
        </div>
    )
}

export default DialogBox;


