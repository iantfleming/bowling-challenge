'use strict';

class Scoreboard {
  constructor() {
    this.frames = [];
    this.score = 0;
  };

  addFrame(frame) {
    for(var i = 0; i < frame.length; i++){
      this.frames = this.frames.concat(frame[i]);
      // console.log(this.frames);
    };
    return this.frames
    console.log(this.frames);
    // this.score += this._sum(frames);
    // this.score += this.frames.sum;
    sum = this.frames.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return this.score += sum;
  };


  score() {
    return this.score;
  };

  _sum(arr) {
    var s = 0;
    for(var i= 0; i<arr.length; i ++){
      s = s + arr[i];
    }
    console.log(s);
  }
};



// frames = []
// frame = [0, 5]
// frame.push([2, 7])
// for(var i = 0; i < frame.length; i++){
//   frames = frames.concat(frame[i]);
// };
//
// console.log(frames);
// a = frames.sum;
// console.log(a);
