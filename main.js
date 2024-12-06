
// Initialisation des variables
var gameData = {
    jus: 0,
    jusParClic: 1,
    jusParClicCout: 100,
    jusParSeconde: 0,
    

    
    prixAnchois: 2e2, // fish
    nbrAnchois: 0,
    prixCrabe: 2.2e3, // crab
    nbrCrabe: 0,
    prixHomard: 2.5e4, // lobster
    nbrHomard:0,
    prixtTortue: 2.8e5, // seaturle
    nbrTortue: 0,
    prixDauphin: 3e6, // dolphin
    nbrDauphin: 0,
    prixRequin: 4e7, // shark
    nbrRequin: 0,
    prixBaleine: 5.5e8, // whale
    nbrBaleine: 0,
    prixDragonDeMerFeuillu: 1.3e9, // dragon
    nbrDragonDeMerFeuillu: 0,
    prixSousMarin: 2.7e10, // submarine
    nbrSousMarin : 0,
    
};

// Affichage des nombres trop grands
function e(n) {
    if (typeof n === 'undefined' || n === null) {
        return "0";
    }
    if (n > 1e6) {
        return n.toExponential(3);
    } else {
        return n.toLocaleString();
    }
}

// Affichage des boutons au lancement du site (refresh)
function afficherMessage() {
    document.getElementById("jusProduit").innerHTML = e(gameData.jus) + " jus de poisson";
    document.getElementById("buyClic").innerHTML = "Améliorer le clic (niveau actuel " + e(gameData.jusParClic) + " : prix " + e(gameData.jusParClicCout) + " jus";
    document.getElementById("buyAnchois").innerHTML = "Acheter un anchois (niveau actuel " + e(gameData.nbrAnchois) + " : prix " + e(gameData.prixAnchois) + " jus";
    document.getElementById("buyCrabe").innerHTML = "Acheter un crabe (niveau actuel " + e(gameData.nbrCrabe) + " : prix " + e(gameData.prixCrabe) + " jus";
    document.getElementById("buyHomard").innerHTML = "Acheter un homard (niveau actuel " + e(gameData.nbrHomard) + " : prix " + e(gameData.prixHomard) + " jus";
    document.getElementById("buyTortue").innerHTML = "Acheter un tortue (niveau actuel " + e(gameData.nbrTortue) + " : prix " + e(gameData.prixtTortue) + " jus";
    document.getElementById("buyDauphin").innerHTML = "Acheter un dauphin (niveau actuel " + e(gameData.nbrDauphin) + " : prix " + e(gameData.prixDauphin) + " jus";
    document.getElementById("buyRequin").innerHTML = "Acheter un requin (niveau actuel " + e(gameData.nbrRequin) + " : prix " + e(gameData.prixRequin) + " jus";
    document.getElementById("buyBaleine").innerHTML = "Acheter une baleine (niveau actuel " + e(gameData.nbrBaleine) + " : prix " + e(gameData.prixBaleine) + " jus";
    document.getElementById("buyDragon").innerHTML = "Acheter un dragon (niveau actuel " + e(gameData.nbrDragonDeMerFeuillu) + " : prix " + e(gameData.prixDragonDeMerFeuillu) + " jus";
    document.getElementById("buySousMarin").innerHTML = "Acheter un sous-marin (niveau actuel " + e(gameData.nbrSousMarin) + " : prix " + e(gameData.prixSousMarin) + " jus";

}

document.addEventListener('DOMContentLoaded', function() {
    var savegame = JSON.parse(localStorage.getItem("OceanClickerSave"));
    if (savegame !== null) {
        Object.assign(gameData, savegame);
    }
    afficherMessage();
});

// Produire du jus par clic
function produireJusClic() {
    gameData.jus += gameData.jusParClic;
    document.getElementById("jusProduit").innerHTML = e(gameData.jus) + " jus de poisson";
}


// Produire du jus automatiquement chaque seconde
function produireJus() {
    if (gameData.jusParSeconde != 0) {
        gameData.jus += gameData.jusParSeconde;
        document.getElementById("jusProduit").innerHTML = e(gameData.jus) + " jus de poisson";
    }
}

// Acheter une augmentation de jus par clic
function buyClic() {
    if (gameData.jus >= gameData.jusParClicCout) {
        gameData.jus -= gameData.jusParClicCout;
        gameData.jusParClic += 1;
        gameData.jusParClicCout = Math.floor(100 * Math.pow(1.1,gameData.jusParClic))
        afficherMessage();
    }
}

// Acheter des producteurs de jus automatiques
function buyAnchois() {
    if (gameData.jus >= gameData.prixAnchois) {
        gameData.jus -= gameData.prixAnchois;
        gameData.jusParSeconde += 1;
        gameData.nbrAnchois += 1;
        gameData.prixAnchois = Math.floor(2e2 * Math.pow(1.12,gameData.nbrAnchois));
        afficherMessage();
    }
}

function buyCrabe() {
    if (gameData.jus >= gameData.prixCrabe) {
        gameData.jus -= gameData.prixCrabe;
        gameData.jusParSeconde += 5;
        gameData.nbrCrabe += 1;
        gameData.prixCrabe = Math.floor(2.2e3 * Math.pow(1.12,gameData.nbrCrabe));
        afficherMessage();
    }
}

function buyHomard() {
    if (gameData.jus >= gameData.prixHomard) {
        gameData.jus -= gameData.prixHomard;
        gameData.jusParSeconde += 32;
        gameData.nbrHomard += 1;
        gameData.prixHomard = Math.floor(2.5e4 * Math.pow(1.12,gameData.nbrHomard));
        afficherMessage();
    }
}
function buyTortue() {
    if (gameData.jus >= gameData.prixtTortue) {
        gameData.jus -= gameData.prixtTortue;
        gameData.jusParSeconde += 176;
        gameData.nbrTortue += 1;
        gameData.prixtTortue = Math.floor(2.8e5 * Math.pow(1.12,gameData.nbrTortue));
        afficherMessage();
    }
}

function buyDauphin() {
    if (gameData.jus >= gameData.prixDauphin) {
        gameData.jus -= gameData.prixDauphin;
        gameData.jusParSeconde += 921;
        gameData.nbrDauphin += 1;
        gameData.prixDauphin = Math.floor(3e6 * Math.pow(1.12,gameData.nbrDauphin));
        afficherMessage();
    }
}

function buyRequin() {
    if (gameData.jus >= gameData.prixRequin) {
        gameData.jus -= gameData.prixRequin;
        gameData.jusParSeconde += 4777;
        gameData.nbrRequin += 1;
        gameData.prixRequin = Math.floor(4e7 * Math.pow(1.12,gameData.nbrRequin));
        afficherMessage();
    }
}

function buyBaleine() {
    if (gameData.jus >= gameData.prixBaleine) {
        gameData.jus -= gameData.prixBaleine;
        gameData.jusParSeconde += 28148;
        gameData.nbrBaleine += 1;
        gameData.prixBaleine = Math.floor(5.5e8 * Math.pow(1.12,gameData.nbrBaleine));
        afficherMessage();
    }
}

function buyDragon() {
    if (gameData.jus >= gameData.prixDragonDeMerFeuillu) {
        gameData.jus -= gameData.prixDragonDeMerFeuillu;
        gameData.jusParSeconde += 163472;
        gameData.nbrDragonDeMerFeuillu += 1;
        gameData.prixDragonDeMerFeuillu = Math.floor(1.3e9 * Math.pow(1.12,gameData.nbrDragonDeMerFeuillu));
        afficherMessage();
    }
}

function buySousMarin() {
    if (gameData.jus >= gameData.prixSousMarin) {
        gameData.jus -= gameData.prixSousMarin;
        gameData.jusParSeconde += 9376175;
        gameData.nbrSousMarin += 1;
        gameData.prixSousMarin = Math.floor(2.7e10 * Math.pow(1.12,gameData.nbrSousMarin));
        afficherMessage();
    }
}


// Reconnaissance des dessins











// Reset

function reset() {
    localStorage.removeItem("OceanClickerSave");
    gameData = {
        jus: 0,
    jusParClic: 1,
    jusParClicCout: 100,
    jusParSeconde: 0,
    

    
    prixAnchois: 2e2, // fish
    nbrAnchois: 0,
    prixCrabe: 2.2e3, // crab
    nbrCrabe: 0,
    prixHomard: 2.5e4, // lobster
    nbrHomard:0,
    prixtTortue: 2.8e5, // seaturle
    nbrTortue: 0,
    prixDauphin: 3e6, // dolphin
    nbrDauphin: 0,
    prixRequin: 4e7, // shark
    nbrRequin: 0,
    prixBaleine: 5.5e8, // whale
    nbrBaleine: 0,
    prixDragonDeMerFeuillu: 1.3e9, // dragon
    nbrDragonDeMerFeuillu: 0,
    prixSousMarin: 2.7e10, // submarine
    nbrSousMarin : 0,
    
    };
    afficherMessage();
}


// Boucles
var mainGameLoop = window.setInterval(produireJus, 1000);

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("OceanClickerSave", JSON.stringify(gameData));
}, 5000);
