'use strict';

describe('Scoreboard', function(){
  var scoreboard;
  beforeEach(function(){
    scoreboard = new Scoreboard();
  });

  it('should be able to roll a game of 1s', function(){
    for (let i = 0; i < 10; i++) {
      scoreboard.addFrame([1, 1])
    };
    expect(scoreboard.score).toEqual(20);
  });
});
