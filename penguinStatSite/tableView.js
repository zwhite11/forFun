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