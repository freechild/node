import React, { Component } from 'react';
import './article.scss';
import { Player, ControlBar } from 'video-react';
import "video-react/dist/video-react.css";
class Article extends Component {
    constructor(props) {
        super(props);
        
        this.button = this.button.bind(this)        
    }
    // constructor(props, context) {
    //     super(props, context);
    
    //     this.state = {
    //       source: sources['bunnyMovie'],
    //     };
    
    //     this.changeCurrentTime = this.changeCurrentTime.bind(this);
    //     this.seek = this.seek.bind(this);
    //     this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    //     this.changeVolume = this.changeVolume.bind(this);
    //     this.setMuted = this.setMuted.bind(this);
    // }
    state = {
        source: sources['bunnyMovie'],
        video : null,
        buttons : null,
        video_current_time : null,
        video_duration : null,
        // video_curTime : this.refs.player.currentTime
    };

    button(action){
        let API_video = this.state.video        
        let defineButton = action.target.getAttribute('data-type')
        switch(defineButton){
            case 'play':
                // const { player } = this.refs.player.getState();
                console.log(this.state.video.isPlaying() );
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
    
    componentWillMount() {

    }

    componentDidMount() {        
        this.setState({
            video:this.refs.player,
            buttons : this.button, 
        }, () => {
            let API_video = this.state.video;
            API_video.play();
        });
        // API_video.play();
        // API_video.on("timeupdate",function(){
        //     console.log('tt');            
        // })
    }

    componentWillReceiveProps(){
        let API_video = this.state.video;
        console.log('1');
        
        // if(API_video.)    
    }

    componentDidUpdate(prevProps, prevState){
        
    }
    // play(){
    //     this.refs.player.play();
    // }
    // pause(){
    //     this.refs.player.pause();
    // }
    // load(){
    //     this.refs.player.load();
    // }
    handleValueChange(){
        // let video = this.refs.player;
        return "00:00"
    }
    render(){
        return(
            <article>  
                <div className="videoToCenter">
                <Player
                    ref="player"                                    
                >
                    <source src={this.state.source} />
                </Player>
                    {/* <video id="video" src="http://rgb2000.iptime.org:2002/out/Course_Write_Down/08/vod/08_01.mp4" className="video-js vjs-default-skin"   preload="none" width="100%" height="100%" data-setup="{}" webkit-playsinline playsinline></video> */}
                </div>
                <div className="py-3">
                    <button  className="mr-3" data-type="play" onClick={this.button}>play()</button>
                    <button  className="mr-3" data-type="pause" onClick={this.button}>pause()</button>
                    <button  className="mr-3" data-type="load" onClick={this.button}>load()</button>
                    <input 
                        value="00" 
                        onChange={this.handleValueChange}
                    />
                </div>
            </article>
        )
    }
}

export default Article;


const sources = {
    sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};
