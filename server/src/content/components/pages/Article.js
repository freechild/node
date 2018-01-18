import React, { Component } from 'react';
import './article.scss';
import { Player, ControlBar } from 'video-react';
import "video-react/dist/video-react.css";
class Article extends Component {
    constructor(props) {
        super(props);
        
        this.button = this.button.bind(this)
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        
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
    };

    button(action){
        console.log(action);
        
        // switch(action){
        //     case play:
        //         break;
        //     case pause:    
        //         break;
        //     case load:
        //         break;
        //     default:
        //         alert('error');
        // }
    }
    
    

    componentDidMount() {
        // this.refs.player.playbackRate = 2;           
        this.refs.player.play();
    }
    play(){
        this.refs.player.play();
    }
    pause(){
        this.refs.player.pause();
    }
    load(){
        this.refs.player.load();
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
                    <button  className="mr-3" onClick={this.button}>play()</button>
                    <button  className="mr-3" onClick={this.pause}>pause()</button>
                    <button  className="mr-3" onClick={this.load}>load()</button>
                    
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
