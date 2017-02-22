$(function(){
  console.log('running: Dice Roller');

  // dice object
  var dice = {
    numDice: 0,
    numSides: 0,
    mod: 0,
    roll: function() {
      for (var i = 0; i < dice.numDice; i++){
        var result = Math.floor(Math.random() * dice.numSides) + 1;
      }
      return result;
    }
  };

  // application object
  var diceRoller = {
    count: 0,
      numDice: $('#num-dice'),
      numSides: $('#num-sides'),
      mod: $('#mod'),
      output: $('#output'),
      roll: $('#roll'),
      initialize: function () {
          this.numDice.val(1);
          this.numSides.val(20);
          this.mod.val(0);
          this.output.empty();
      },
      clear: function () {
          this.output.empty();
      }
  };

  // Initialize the application.
  diceRoller.count = 0;
  diceRoller.initialize();

  // Application logic.
  diceRoller.roll.click(function() {
    dice.numDice = diceRoller.numDice.val();
    dice.numSides = diceRoller.numSides.val();
    dice.mod = diceRoller.mod.val();
    diceRoller.count += 1;

    var roll = dice.roll();
    var modResult = Number(roll) + Number(dice.mod);
    var modOutput;

    if (dice.mod >= 0) {
      modOutput = roll + " + " + dice.mod + " = " + modResult;
    }else {
      modOutput = roll + " - " + Math.abs(dice.mod) + " = " + modResult;
    }


    var diceOutput = dice.numDice + "d" + dice.numSides;
    var rollCount = "Roll " + diceRoller.count + ": ";
    var output = rollCount + diceOutput + "[" + roll + "]<br>" + modOutput;

    diceRoller.output.prepend('<p>' + output + '</p>');

  });

  // Clear the output area.
  $('#clear').click(function(){
    diceRoller.output.empty();
  });

  // Set state of the app back to initial state.
  $('#reset').click(function(){
    diceRoller.initialize();
  })

});
