import React, { Component } from 'react';
import './article.scss';
// import { increment, decrement } from '../../actions';
// import { Player, ControlBar } from 'video-react';
import videojs from 'video.js'

import "video.js/dist/video-js.css";

class Article extends Component {
    constructor(props) {
        super(props);
        this.button = this.button.bind(this);       
    }

    state = {
        video : null,
        buttons : null,
        video_current_time : 0,
        video_duration : 0,        
    };

    button(action){
        let API_video = this.state.video        
        let defineButton = action.target.getAttribute('data-type')
        switch(defineButton){
            case 'play':
                API_video.play();
                break;
            case 'pause':
                API_video.pause();
                break;
            case 'load':
                API_video.load();
                break;
            default:
                console.log(defineButton);                
        }
    }

    componentDidMount(){
        this.mountVideoPlayer();   

    }

    componentWillMount() {

    }
    componentWillReceiveProps(){
        let API_video = this.state.video        
        console.log(this.state);
        
        // if(API_video.)    
    }

    componentDidUpdate(prevProps, prevState){
        
    }

    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextState) != JSON.stringify(this.state));
    }
    // componentWillUpdate(nextProps, nextState){
    //     console.log("componentWillUpdate: " + JSON.stringify(nextState));
    // }

    mountVideoPlayer(){
        let src = 'http://media.w3.org/2010/05/sintel/trailer.mp4';
        let options = videoJsOptions;
        let API_video = videojs(this.videoNode,options)
        this.setState({
            video:API_video,
            buttons : this.button, 
        }, () => {
            let that = this
            API_video.on("timeupdate",function(){
                that.videoTimeUpdate(API_video);                 
            })
        });
        // this.setState((prevState, props) => ({
        //     video: API_video,
        //     buttons : this.button, 
        // }));
        // console.log(this.state);
        
    }
    
    videoTimeUpdate(player){
        let duration = player.duration();
        let time = player.scrubbing() ? player.getCache().currentTime : player.currentTime();
        this.setState({
            video_current_time:time,
            video_duration : duration, 
        })
    }

    render(){
        return(
            <article>  
                <div className="videoToCenter">
                    <video ref={ node => this.videoNode = node } className="video-js"></video>
                </div>
                
                <div className="py-3">
                    <button  className="mr-3" data-type="play" onClick={this.button}>play()</button>
                    <button  className="mr-3" data-type="pause" onClick={this.button}>pause()</button>
                    <button  className="mr-3" data-type="load" onClick={this.button}>load()</button>
                    <button type="button"
                        onClick={ this.props.onIncrement }>
                        +
                    </button>
                    <button type="button"
                            onClick={ this.props.onDecrement }>
                            -
                    </button>
                    <input
                        value={this.state.video_current_time}
                    />
                    
                </div>
            </article>
        )
    }
}


// let mapDispatchToProps = (dispatch) => {
//     return {
//         onIncrement: () => dispatch(increment()),
//         onDecrement: () => dispatch(decrement())
//     }
// }

// Buttons = connect(undefined, mapDispatchToProps)(Buttons);

const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
        src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
        type: 'video/mp4'
    }]
}

export default Article;