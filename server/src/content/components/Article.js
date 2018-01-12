import React, { Component } from "react";
import './article.scss';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';

export default class article extends Component{
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
          console.log('onPlayerReady', this)
          
        });
    }
    componentWillUnmount() {
        console.log(1)
        if (this.player) {
            this.player.dispose()
        }
    }
    render(){
        return(
            <article>  
                <div className="videoToCenter">
                    <video ref={ node => this.videoNode = node } className="video-js" src="http://rgb2000.iptime.org:2002/out/Course_Write_Down/08/vod/08_01.mp4"></video>
                    {/* <video id="video" src="http://rgb2000.iptime.org:2002/out/Course_Write_Down/08/vod/08_01.mp4" className="video-js vjs-default-skin"   preload="none" width="100%" height="100%" data-setup="{}" webkit-playsinline playsinline></video> */}
                </div>
            </article>
        )
      }
}