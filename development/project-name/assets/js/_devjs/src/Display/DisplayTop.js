//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
// import Effects from './Effects/Effects.js';
// import ScaleTop from '../Display/Layout/Size/ScaleTop.js';
// import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.js';
// import HoverEffectSVGArrowTop from '../Display/Effects/03_effects/HoverEffectSVGArrowTop.js';
// import TopTime from '../Display/UI/TopTime.js';
// import Position from './Layout/Postion/Position.js';

// import WebGLinit from './WebGLinit.js';

import Canvas from "../Visual/Canvas";

'use strict';

export default class DisplayTop {

  constructor(){

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

    // アニメーションループスタート
    // gb.in.up.loop();
    
  }

  onLoad() {

    gb.in.canvas = new Canvas({
      output: document.getElementById('webgl-output')
    });

    gb.in.canvas.init();


  }

  static run() {

		// window.console.log('static_Run');

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}