import React from "react";

import './index.css';

import Image1 from '../../../../../../static/imagesClone/img1.png';
import Image2 from '../../../../../../static/imagesClone/img4.png';
import Image3 from '../../../../../../static/imagesClone/img13.png';
import Image4 from '../../../../../../static/imagesClone/img10.png';
import Image5 from '../../../../../../static/imagesClone/img7.png';
import Image6 from '../../../../../../static/imagesClone/img17.png';
import Image7 from '../../../../../../static/imagesClone/img12.png';
import Image8 from '../../../../../../static/imagesClone/img24.png';
import Image9 from '../../../../../../static/imagesClone/img6.png';


export default function ImagesComponent(){
    return (
        <div className="images-container">
            <div className="column">
                <div className="image-container">
                    <img src={Image1} alt="" />
                </div>
                <div className="image-container">
                    <img src={Image2} alt="" />
                </div>
            </div>
            <div className="column">
                <div className="image-container">
                    <img src={Image3} alt="" />
                </div>
                <div className="image-container">
                    <img src={Image4} alt="" />
                </div>
                <div className="image-container">
                    <img src={Image5} alt="" />
                </div>
            </div>
            <div className="column">
            <div className="image-container">
                    <img src={Image8} alt="" />
                </div>
                <div className="image-container">
                    <img src={Image9} alt="" />
                </div>
                <div className="image-container">
                    <img src={Image6} alt="" />
                </div>
                <div className="image-container">
                    <img src={Image7} alt="" />
                </div>
            </div>
            
        </div>
    )
}