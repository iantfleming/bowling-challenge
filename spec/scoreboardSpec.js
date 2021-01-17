'use strict';

describe('Scoreboard', function(){
  var scoreboard;
  beforeEach(function(){
    scoreboard = new Scoreboard();
  });

  it('should be able to roll a game of 0s (gutter game)', function(){
    for (let i = 0; i < 10; i++) {
      scoreboard.addFrame([1, 0])
    };
    expect(scoreboard.score).toEqual(10);
  });
});
