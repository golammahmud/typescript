"use strict";
var player = /** @class */ (function () {
    function player(name, age) {
        this.name = name;
        this.age = age;
    }
    player.prototype.display = function () {
        console.log(this.name + " " + this.age);
    };
    return player;
}());
var p1 = new player("jhon", 35);
var p2 = new player("doe", 45);
p1.display();
p2.display();
var players = [];
players.push(p1);
players.push(p2);
