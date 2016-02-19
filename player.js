var Player = function(id, username, chips, tableIndex, player)
{
  var username = username || "INVALID_USER"
  var password, statistics;
  var chips = chips || 0 ;
  var tableIndex = tableIndex;
  var id;
  var position = position || 0 ;

  var getUsername = function()
  {
    return username;
  }

  var getPassword = function()
  {
    return password;
  }

  var getChips = function()
  {
    return chips;
  }

  var getTableIndex = function()
  {
    return tableIndex;
  }

  var setUsername = function(user)
  {
    username = user;
  }

  var setPassword = function(pw)
  {
    password = pw;
  }

  var addChips = function(numChips)
  {
    chips += numChips;
  }
  
  var deleteChips = function(numChips) {
	chips -= numChips;
  }

  var setTableIndex = function(index)
  {
    tableIndex = index;
  }
  
  var setId = function(new_id) {
	 id = new_id;
  }
  
  var getId = function() {
  	 return id;
  }
  
  var setPosition = function(num) {
	 position = num;
  }
  
  var getPosition = function() {
     return position;
  }

  return {
		getUsername: getUsername,
		getPassword: getPassword,
        getChips: getChips,
        getTableIndex: getTableIndex,
	 	setUsername: setUsername,
		setPassword: setPassword,
        addChips: addChips,
	    deleteChips: deleteChips,
        setTableIndex: setTableIndex,
	    setId: setId,
	    getId: getId,
		id: id,
	    getPosition: getPosition,
	    setPosition: setPosition
	}
}

exports.Player = Player;
