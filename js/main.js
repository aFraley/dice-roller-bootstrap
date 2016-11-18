$(function(){
  console.log('running: Dice Roller');

  // Model
  //============================================================================
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
  }

  var count = 0;

  // Controller
  //============================================================================
  function initialState(){
    $('#num-dice').val(1);
    $('#num-sides').val(20);
    $('#mod').val(0);
  }
  initialState();   // Initialize the state of the app.

  // Set the state of the app.
  $('#roll').click(function() {
    dice.numDice = $('#num-dice').val();
    dice.numSides = $('#num-sides').val();
    dice.mod = $('#mod').val()
    count += 1;

    var roll = dice.roll();
    var modResult = Number(roll) + Number(dice.mod);

    if (dice.mod >= 0) {
      var modOutput = roll + " + " + dice.mod + " = " + modResult;
    }else {
      var modOutput = roll + " - " + Math.abs(dice.mod) + " = " + modResult;
    }


    var diceOutput = dice.numDice + "d" + dice.numSides;
    var rollCount = "Roll " + count + ": ";
    var output = rollCount + diceOutput + "[" + roll + "]<br>" + modOutput;

    $('#output').append(output, '<br>');

  });

  // Clear the output area.
  $('#clear').click(function(){
    $('#output').text('');
  });

  // Set state of the app back to initial state.
  $('#reset').click(function(){
    initialState();
  })

});
