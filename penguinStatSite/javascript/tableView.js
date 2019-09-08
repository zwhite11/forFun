/**
 * Functions for showing and hiding different tables
 */


 /**
  * removes the currently selected table
  */
function removeCurrent(){
    var currentTable = document.getElementsByClassName("current")[0];
    currentTable.classList.remove("current");
    currentTable.style.display = "none";

    var currentLink = document.getElementsByClassName("currentLink")[0];
    currentLink.classList.remove("currentLink");
}

/**
 * show the table for overall stats
 */
function showAll(){
    removeCurrent();
    var allTable = document.getElementById("all");
    allTable.style.display = "block";
    allTable.classList.add("current");
    document.getElementById("allLink").classList.add("currentLink");
}

/**
 * show the table for stats from home games
 */
function showHome(){
    removeCurrent();
    var homeTable = document.getElementById("home");
    homeTable.style.display = "block";
    homeTable.classList.add("current");
    document.getElementById("homeLink").classList.add("currentLink");
}

/**
 * show the table for stats from away games
 */
function showAway(){
    removeCurrent();
    var awayTable = document.getElementById("away");
    awayTable.style.display = "block";
    awayTable.classList.add("current");
    document.getElementById("awayLink").classList.add("currentLink");
}

/**
 * show the table for stats from wins
 */
function showWins(){
    removeCurrent();
    var winsTable = document.getElementById("wins");
    winsTable.style.display = "block";
    winsTable.classList.add("current");
    document.getElementById("winsLink").classList.add("currentLink");
}

/**
 * show the table for stats from losses
 */
function showLosses(){
    removeCurrent();
    var lossesTable = document.getElementById("losses");
    lossesTable.style.display = "block";
    lossesTable.classList.add("current");
    document.getElementById("lossesLink").classList.add("currentLink");
}



/**
  * removes the currently selected team table
  */
 function removeCurrentOppTable(){
    var currentTable = document.getElementsByClassName("currentOpp")[0];
    currentTable.classList.remove("currentOpp");
    currentTable.style.display = "none";

    var currentLink = document.getElementsByClassName("currentOppLink")[0];
    currentLink.classList.remove("currentOppLink");
}


/**
 * show the table for Burnie
 */
function showBurnie(){
    removeCurrentOppTable();
    var burnieTable = document.getElementById("burnie");
    burnieTable.style.display = "block";
    burnieTable.classList.add("currentOpp");
    document.getElementById("burnieLink").classList.add("currentOppLink");
}

/**
 * show the table for Wynyard
 */
function showWynyard(){
    removeCurrentOppTable();
    var wynyardTable = document.getElementById("wynyard");
    wynyardTable.style.display = "block";
    wynyardTable.classList.add("currentOpp");
    document.getElementById("wynyardLink").classList.add("currentOppLink");
}

/**
 * show the table for Latrobe
 */
function showLatrobe(){
    removeCurrentOppTable();
    var latrobeTable = document.getElementById("latrobe");
    latrobeTable.style.display = "block";
    latrobeTable.classList.add("currentOpp");
    document.getElementById("latrobeLink").classList.add("currentOppLink");
}

/**
 * show the table for Ulverstone
 */
function showUlverstone(){
    removeCurrentOppTable();
    var ulverstoneTable = document.getElementById("ulverstone");
    ulverstoneTable.style.display = "block";
    ulverstoneTable.classList.add("currentOpp");
    document.getElementById("ulverstoneLink").classList.add("currentOppLink");
}

/**
 * show the table for Somerset
 */
function showSomerset(){
    removeCurrentOppTable();
    var somersetTable = document.getElementById("somerset");
    somersetTable.style.display = "block";
    somersetTable.classList.add("currentOpp");
    document.getElementById("somersetLink").classList.add("currentOppLink");
}

/**
 * show the table for Devonport
 */
function showDevonport(){
    removeCurrentOppTable();
    var devonportTable = document.getElementById("devonport");
    devonportTable.style.display = "block";
    devonportTable.classList.add("currentOpp");
    document.getElementById("devonportLink").classList.add("currentOppLink");
}

/**
 * show the table for Smithton
 */
function showSmithton(){
    removeCurrentOppTable();
    var smithtonTable = document.getElementById("smithton");
    smithtonTable.style.display = "block";
    smithtonTable.classList.add("currentOpp");
    document.getElementById("smithtonLink").classList.add("currentOppLink");
}