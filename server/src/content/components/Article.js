import React, { Component } from "react";
import './article.scss';

export default class article extends Component{
    render(){
        return(
            <article>  
                <div className="videoToCenter">
                    <video id="video" src="http://rgb2000.iptime.org:2002/out/Course_Write_Down/08/vod/08_01.mp4" className="video-js vjs-default-skin"   preload="none" width="100%" height="100%" data-setup="{}" webkit-playsinline playsinline></video>
                </div>
            </article>
        )
      }
}