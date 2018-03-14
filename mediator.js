var tools = require("./tools");
var addSplitChar = tools.prototype.addSplitChar;

addSplitChar("mediator pattern");
(function(){
    function Player(name) {
        this.points = 0;
        this.name = name;
    }

    Player.prototype.play = function () {
        this.points += 1;
        mediator.played();
    }
    var document = {};
    var scoreboard = {
        element: document,
        update: function (score) {
            var i, msg = "";
            for (i in score) {
                if (score.hasOwnProperty((i))) {
                    msg = "<p>%s : %s</p>".format(i, score[i]);
                }
            }
            this.element.innerHTML = msg;
            console.log(msg);
        }
        
    }

    var mediator = {
        players: {},
        setup: function () {
            var players = this.players;
            players.home = new Player("Home");
            players.guest = new Player("Guest");
        },
        played: function () {
            var players = this.players,
                score = {
                    Home: players.home.points,
                    Guest: players.guest.points
                }
        },
        keypress: function(e) {
            e = e || window.event;
            if (e.which === 49) {
                mediator.players.home.play();
                return;
            }
            if (e.which === 48) {
                mediator.players.guest.play();
                return;
            }
        }
    }

    mediator.setup();
    window.onkeypress = mediator.keypress;
    setTimeout(function(){
        window.onkeypress = null;
        console.log("Game over");
    }, 30000);
    
})();