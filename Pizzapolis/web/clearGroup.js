/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clearGroup(groupName) {
    var element = document.getElementsByName(groupName);
    for (var i = 0; i < element.length; i++) {
        element[i].checked = false;
    }
}