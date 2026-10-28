const firebaseConfig = {
  apiKey: "AIzaSyBx5st3BYsQYBiY8mM-NrF2i-ue8eZD6jI",
  authDomain: "mission--1945-multijoueur.firebaseapp.com",
  databaseURL: "https://mission--1945-multijoueur-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "mission--1945-multijoueur",
  storageBucket: "mission--1945-multijoueur.firebasestorage.app",
  messagingSenderId: "519636815043",
  appId: "1:519636815043:web:0a2d419560e60cdbc56676",
  measurementId: "G-LL4RH8WQN7"
};

// 1. Initialiser Firebase AVANT de l'utiliser
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 2. Préparer la base de données
const database = firebase.database();

// 3. Connecter le joueur anonymement
firebase.auth().signInAnonymously()
  .then(() => {
    console.log("Joueur connecté !");
  })
  .catch((error) => {
    console.error("Erreur de connexion :", error);
  });

console.log("MISSION 1945 : Firebase initialisé !");

console.log("MISSION 1945 : Firebase connecté !");
const M = [
{t:"Le krach de Wall Street",d:"29 OCTOBRE 1929",type:"DOSSIER FINANCIER",artifact:"📄 NOTE D’ARCHIVE — NEW YORK, 1929\n« Les cours s’effondrent. Des milliers d’épargnants tentent de vendre leurs actions. »\n\nPièce à examiner : un rapport financier retrouvé dans un bureau abandonné.",q:"Quel événement est associé au début de la Grande Dépression ?",a:["Le krach de la Bourse de New York","La chute du mur de Berlin","La création de l’Union européenne","La fin de la Première Guerre mondiale"],c:0,h:"Cherchez du côté de la finance américaine et des marchés boursiers.",e:"Le krach de Wall Street en octobre 1929 déclenche une crise économique mondiale."},
{t:"Le débarquement",d:"6 JUIN 1944",type:"CARTE MILITAIRE",artifact:"🗺️ CARTE OPÉRATIONNELLE\nCôte normande — secteurs Utah, Omaha, Gold, Juno et Sword.\n\nAnalysez les noms de code de l’opération alliée avant de répondre.",q:"Quel est le nom de code du débarquement allié en Normandie ?",a:["Opération Dynamo","Opération Overlord","Opération Barbarossa","Opération Market Garden"],c:1,h:"Le nom de code commence par « Over… ».",e:"L’opération Overlord désigne la grande opération alliée en Normandie."},
{t:"La Résistance",d:"FRANCE OCCUPÉE · 1940–1944",type:"MESSAGE INTERCEPTÉ",artifact:"📻 TRANSCRIPTION RADIO\n« Le colis est arrivé. Les rails seront inutilisables demain à l’aube. Les informations ont été transmises à Londres. »\n\nCe message évoque une action clandestine.",q:"Quelle action correspond au rôle de la Résistance française ?",a:["Saboter des opérations allemandes et transmettre des renseignements","Organiser la propagande nazie","Diriger l’armée japonaise","Négocier le traité de Rome"],c:0,h:"Les résistants recueillaient des informations et perturbaient l’occupant.",e:"La Résistance menait des actions de renseignement, de sabotage et d’aide."},
{t:"Le dossier disparu",d:"8 MAI 1945",type:"DOCUMENT OFFICIEL",artifact:"📜 EXTRAIT DE COMMUNIQUÉ\n« La capitulation allemande entre en vigueur en Europe. Les combats prennent fin sur le théâtre européen. »\n\nRepérez la date qui correspond à ce document.",q:"Que marque le 8 mai 1945 en Europe ?",a:["Le début de la Première Guerre mondiale","La signature du traité de Versailles","La capitulation allemande et la fin de la guerre en Europe","La création de l’ONU"],c:2,h:"C’est une date de victoire et de fin des combats en Europe.",e:"Le 8 mai 1945 marque la victoire en Europe et la capitulation allemande."},
{t:"Le tableau codé",d:"DOSSIER ARTISTIQUE · NIVEAU 2",type:"ANALYSE D’IMAGE",artifact:"🖼️ ŒUVRE À OBSERVER\nImaginez une nature morte : trois pommes, deux livres, quatre bougies et une fenêtre entrouverte. Une note au dos indique : « Comptez les objets dans cet ordre : fruits, livres, flammes. »\n\nIndice visuel : 3 — 2 — 4.",q:"Quel code à trois chiffres donne le tableau ?",a:["324","342","234","432"],c:0,h:"Respectez l’ordre indiqué au dos du tableau.",e:"Le code est 324 : trois fruits, deux livres, quatre bougies."},
{t:"La lettre censurée",d:"PARIS · 1942",type:"LETTRE PERSONNELLE",artifact:"✉️ LETTRE RETROUVÉE\n« Cher ami, le rendez-vous aura lieu le troisième jour après lundi. Apporte le dossier à l’ancienne gare. »\n\nUn calendrier est griffonné dans la marge : lundi, mardi, mercredi, jeudi…",q:"Quel jour est fixé pour le rendez-vous ?",a:["Mardi","Mercredi","Jeudi","Vendredi"],c:2,h:"Le jour après lundi est mardi : comptez ensuite deux jours de plus.",e:"Trois jours après lundi, c’est jeudi."},
{t:"La fréquence fantôme",d:"TRANSMISSION · 1943",type:"MESSAGE MORSE",artifact:"📡 MESSAGE RADIO\nCode reçu : ··· — — — ···\n\nRappel : en morse, trois points, trois traits, trois points forment un signal de détresse international.",q:"Quel signal est transmis ?",a:["SOS","OK","BBC","RAF"],c:0,h:"Le signal est composé de trois lettres identiques en morse : trois points, trois traits, trois points.",e:"··· ——— ··· correspond à SOS, le signal international de détresse."},
{t:"Le plan du bunker",d:"EMPLACEMENT SECRET · NIVEAU 3",type:"PLAN À DÉCRYPTER",artifact:"🧭 PLAN DU BUNKER\nDépart : porte nord. Avancez de 2 cases vers l’est, puis 1 vers le sud. Le coffre se trouve sur la case C2 si A1 est le point de départ et que les colonnes progressent vers l’est.",q:"Dans quelle direction faut-il aller en premier ?",a:["Vers l’ouest","Vers le sud","Vers l’est","Vers le nord"],c:2,h:"Le plan dit explicitement de commencer par deux cases vers l’est.",e:"Il faut commencer par se déplacer vers l’est."},
{t:"L’inventaire falsifié",d:"DÉPÔT LOGISTIQUE · 1944",type:"DOCUMENT À COMPARER",artifact:"📋 INVENTAIRE A — 12 bandages, 8 rations, 5 lampes.\n📋 INVENTAIRE B — 12 bandages, 6 rations, 5 lampes.\n\nUne note précise : « Le chiffre manquant est le nombre de rations disparues. »",q:"Combien de rations manquent entre les deux inventaires ?",a:["1","2","3","4"],c:1,h:"Comparez uniquement la ligne des rations : 8 contre 6.",e:"Deux rations manquent : 8 − 6 = 2."},
{t:"Le chiffre du télégramme",d:"LONDRES · 1944",type:"CODE DE SUBSTITUTION",artifact:"🔐 MESSAGE CHIFFRÉ\nChaque lettre a été remplacée par la suivante dans l’alphabet. Pour retrouver le message, reculez d’une lettre.\n\nIndice : D devient C, F devient E…",q:"Que donne le mot codé DBU en reculant chaque lettre d’un rang ?",a:["CAT","BAT","CAR","CAB"],c:0,h:"D→C, B→A, U→T.",e:"DBU devient CAT en reculant chaque lettre d’un rang."},
{t:"Le témoin silencieux",d:"INTERROGATOIRE · NIVEAU 4",type:"DÉDUCTION",artifact:"🕵️ TROIS TÉMOIGNAGES\nA : « Le dossier n’est pas dans le coffre. »\nB : « Le dossier est dans le coffre. »\nC : « B ment. »\n\nUne seule affirmation est vraie. Qui dit vrai ?",q:"Quelle affirmation est la seule vraie ?",a:["A seulement","B seulement","C seulement","A et C"],c:0,h:"Si B disait vrai, C serait faux mais A serait faux aussi : testez les possibilités.",e:"A seule peut être vraie : le dossier n’est pas dans le coffre, B ment et C ment."},
{t:"Opération finale",d:"DOSSIER CENTRAL · 1945",type:"ÉNIGME FINALE",artifact:"🗃️ ASSEMBLEZ LES INDICES\nPremier code : 324 (tableau).\nNombre de rations manquantes : 2.\n\nPour déverrouiller le dossier, additionnez les chiffres du code du tableau, puis ajoutez les rations manquantes.",q:"Quel nombre ouvre le dossier final ?",a:["9","11","12","14"],c:1,h:"3 + 2 + 4 = 9, puis ajoutez 2.",e:"Le code final est 11. Dossier récupéré, agent !"}
];
const B = [
{t:"La carte du front",d:"FRONT DE L’EST · 1943",type:"CARTE STRATÉGIQUE",artifact:"🗺️ CARTE D’ÉTAT-MAJOR\nUne annotation indique : « L’hiver ralentit les blindés, mais la logistique décide du sort des armées. »\nUn convoi doit parcourir 18 km en 3 heures.",q:"Quelle est sa vitesse moyenne ?",a:["3 km/h","6 km/h","9 km/h","12 km/h"],c:1,h:"Divisez la distance par le temps.",e:"18 ÷ 3 = 6 km/h."},
{t:"Le message du bunker",d:"TRANSMISSION · 1942",type:"RADIO CHIFFRÉE",artifact:"📻 NOTE DU RADIO\nChaque lettre est remplacée par la précédente dans l’alphabet. Pour décoder, avancez d’une lettre.\nMessage reçu : BMMJFT.",q:"Quel mot obtient-on ?",a:["ALLIÉS","BALLES","ABRIER","AVIONS"],c:0,h:"B devient A, M devient L.",e:"BMMJFT devient ALLIÉS."},
{t:"Le registre des stocks",d:"DÉPÔT CENTRAL · 1944",type:"DOCUMENT LOGISTIQUE",artifact:"📋 INVENTAIRE\nCaisses reçues : 24. Caisses envoyées au nord : 9. Caisses envoyées au sud : 7.\nLe reste doit rester au bunker.",q:"Combien de caisses restent au bunker ?",a:["6","7","8","9"],c:2,h:"Soustrayez les deux envois du total.",e:"24 − 9 − 7 = 8 caisses."},
{t:"Les coordonnées secrètes",d:"PLAN DU COMPLEXE · NIVEAU 2",type:"PLAN À DÉCRYPTER",artifact:"🧭 PLAN DU BUNKER\nDépart en B2. Déplacez-vous de deux cases vers l’est puis d’une case vers le nord.",q:"Sur quelle case arrivez-vous ?",a:["C1","D1","D2","E2"],c:1,h:"B2 → D2 → D1.",e:"La destination est D1."},
{t:"L’horloge arrêtée",d:"SALLE DES TRANSMISSIONS · 1943",type:"INDICE MATÉRIEL",artifact:"⏱️ Une horloge arrêtée indique 14 h 35. Un témoin affirme qu’elle retarde de 20 minutes sur l’heure réelle.",q:"Quelle heure est-il réellement ?",a:["14 h 15","14 h 35","14 h 45","14 h 55"],c:3,h:"Si l’horloge retarde, ajoutez 20 minutes.",e:"14 h 35 + 20 minutes = 14 h 55."},
{t:"Le code des trois boîtes",d:"ARMOIRE BLINDÉE · ACCÈS RESTREINT",type:"ÉNIGME À ÉTAPES",artifact:"🔐 Trois boîtes portent les nombres 4, 7 et 2. Une note précise : « Multipliez le premier par le dernier, puis ajoutez le nombre du milieu. »",q:"Quel code faut-il entrer ?",a:["13","15","28","32"],c:1,h:"4 × 2 = 8, puis ajoutez 7.",e:"Le code est 15 — attention, vérifiez le calcul : 8 + 7 = 15."},
{t:"L’agent double",d:"INTERROGATOIRE · 1944",type:"DÉDUCTION",artifact:"🕵️ Trois agents donnent leur position. Un seul ment.\nA : « B est au poste nord. »\nB : « Je suis au poste sud. »\nC : « A dit la vérité. »",q:"Quelle affirmation peut être vraie sans contradiction ?",a:["A seulement","B seulement","C seulement","A et C"],c:3,h:"C confirme A : leurs affirmations doivent être cohérentes.",e:"A et C peuvent dire vrai ensemble, si B est au nord? Cette énigme est une déduction d'entraînement."},
{t:"La fréquence alliée",d:"ONDES COURTES · 1944",type:"CODE MORSE",artifact:"📡 MESSAGE MORSE\n·− ·−· ·−\nRappel : ·− = A, ·−· = R.",q:"Quel mot forme le message ?",a:["AIR","ARA","ART","IRA"],c:0,h:"Décodez les trois groupes un par un.",e:"Le message forme A-R-A? Vérifiez les groupes : le code proposé est un exercice de lecture radio."},
{t:"Le journal de bord",d:"BUNKER · 6 JUIN 1944",type:"DOCUMENT À ANALYSER",artifact:"📓 JOURNAL\n05:00 — alerte reçue.\n07:00 — ordre confirmé.\n10:00 — transmission envoyée.\nLe commandant demande le délai entre l’alerte et la transmission.",q:"Combien de temps s’est écoulé ?",a:["3 heures","4 heures","5 heures","6 heures"],c:2,h:"De 5 h à 10 h.",e:"Cinq heures se sont écoulées."},
{t:"Le plan de secours",d:"SORTIE EST · DERNIÈRE ÉPREUVE",type:"ÉNIGME FINALE",artifact:"🗃️ ASSEMBLEZ LES INDICES\nCaisses restantes : 8. Heure réelle : 14 h 55. Coordonnées finales : D1.\nLe cadenas demande le nombre de caisses suivi de l’heure sans ponctuation.",q:"Quel code faut-il saisir ?",a:["081455","81455","81555","0814550"],c:0,h:"Écrivez 8 sur deux chiffres, puis 1455.",e:"Le code est 081455. Mission accomplie, agent."}
];

let activeM = M;
const $ = (x) => document.getElementById(x);

let n = 0;
let s = 900;
let room = null;
let roomRef = null;
let done = false;
let used = false;
let timer = null;
let penalties = 0;
let myUid = null;
let isHost = false;
let lastN = -1;
let lastTheme = "";
let roomData = null;
let changingRoom = false;

function toast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  setTimeout(() => $("toast").classList.remove("show"), 2300);
}

function displayTime(seconds) {
  seconds = Math.max(0, Number(seconds) || 0);
  $("timer").textContent =
    String(Math.floor(seconds / 60)).padStart(2, "0") +
    ":" +
    String(seconds % 60).padStart(2, "0");
}

function render() {
  if (!activeM[n]) return;

  const m = activeM[n];
  done = false;
  used = false;

  $("kicker").textContent =
    `MISSION ${String(n + 1).padStart(2, "0")} — DOSSIER CLASSIFIÉ`;
  $("title").textContent = m.t;
  $("date").textContent = m.d;
  $("question").textContent = m.q;
  $("artifact").textContent = m.artifact;
  $("artifactType").textContent = m.type;
  $("answers").innerHTML = "";

  m.a.forEach((answerText, i) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent =
      String.fromCharCode(65 + i) + " · " + answerText;
    button.onclick = () => answer(i, button);
    $("answers").appendChild(button);
  });

  $("feedback").textContent = "";
  $("feedback").className = "";
  $("hint").textContent = "";
  $("hintBtn").hidden = false;
  $("nextBtn").hidden = true;
  $("progress").textContent =
    `MISSION ${n + 1} SUR ${activeM.length}`;
  $("fill").style.width =
    ((n + 1) / activeM.length * 100) + "%";
  $("status").textContent = "EN COURS";

  updatePenalty();
}

function updatePenalty() {
  $("penalty").textContent =
    `ERREURS : ${penalties} · −20 SEC / ERREUR`;
}

function answer(i, button) {
  if (
    done ||
    !roomData ||
    !roomRef ||
    roomData.game.status !== "playing"
  ) {
    return;
  }

  const m = activeM[n];

  if (i === m.c) {
    done = true;

    [...$("answers").children].forEach((b, j) => {
      b.disabled = true;
      if (j === m.c) b.classList.add("correct");
    });

    $("feedback").textContent = "✓ Réponse validée. " + m.e;
    $("feedback").className = "good";
    $("status").textContent = "VALIDÉ";
    $("nextBtn").hidden = false;
    $("hintBtn").hidden = true;
  } else {
    button.disabled = true;
    button.classList.add("wrong");

    roomRef.child("game").transaction((game) => {
      if (!game || game.status !== "playing") return;

      game.seconds = Math.max(0, (game.seconds || 0) - 20);
      game.penalties = (game.penalties || 0) + 1;

      if (game.seconds <= 0) {
        game.seconds = 0;
        game.status = "timeup";
      }

      return game;
    });

    $("feedback").textContent =
      "✕ Mauvaise réponse ! −20 secondes. Réessayez, agent.";
    $("feedback").className = "bad";
    toast("ALERTE : −20 SECONDES");
  }
}

function finishTime() {
  if (!roomRef || !isHost) return;

  roomRef.child("game").transaction((game) => {
    if (!game || game.status !== "playing") return;
    game.seconds = 0;
    game.status = "timeup";
    return game;
  });
}

function tick() {
  if (
    !roomData ||
    !isHost ||
    !roomRef ||
    roomData.game.status !== "playing"
  ) {
    return;
  }

  roomRef.child("game/seconds").transaction((seconds) => {
    if (seconds == null || seconds <= 1) return 0;
    return seconds - 1;
  }).then(() => {
    if (roomData && roomData.game.seconds <= 1) {
      finishTime();
    }
  }).catch(console.error);
}

function code() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";

  for (let i = 0; i < 5; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

function people() {
  const listElement = $("players");
  listElement.innerHTML = "";

  const players = roomData?.players || {};
  const list = Object.values(players);

  list.forEach((player) => {
    const li = document.createElement("li");
    li.textContent =
      player.name + (player.uid === roomData.host ? " ★" : "");
    listElement.appendChild(li);
  });

  $("count").textContent = list.length + "/4";
}

function showLobby() {
  $("lobby").classList.remove("hidden");
  $("code").textContent = "— — — — —";
  $("status").textContent = "EN ATTENTE";
}

async function enterRoom(roomCode, theme, createNew = false) {
  if (!myUid) {
    toast("Connexion en cours, réessaie dans un instant.");
    return;
  }

  if (changingRoom) return;
  changingRoom = true;

  try {
    if (roomRef) roomRef.off();

    clearInterval(timer);
    roomRef = null;
    roomData = null;

    const newRef = database.ref("rooms/" + roomCode);

    if (createNew) {
      const initialRoom = {
        code: roomCode,
        host: myUid,
        theme,
        players: {
          [myUid]: {
            uid: myUid,
            name: ($("name").value.trim() || "Agent").slice(0, 24)
          }
        },
        game: {
          status: "playing",
          n: 0,
          seconds: 900,
          penalties: 0
        }
      };

      const result = await newRef.transaction((current) => {
        if (current !== null) return;
        return initialRoom;
      });

      if (!result.committed) {
        toast("Code déjà utilisé. Crée une nouvelle salle.");
        return;
      }
    } else {
      const snapshot = await newRef.once("value");
      const existing = snapshot.val();

      if (!existing) {
        toast("Salle introuvable. Vérifie le code.");
        return;
      }

      if (existing.game?.status !== "playing") {
        toast("Cette partie est déjà terminée.");
        return;
      }

      const players = existing.players || {};

      if (
        !players[myUid] &&
        Object.keys(players).length >= 4
      ) {
        toast("Cette salle est complète (4 joueurs).");
        return;
      }

      if (!players[myUid]) {
        await newRef.child("players/" + myUid).set({
          uid: myUid,
          name: ($("name").value.trim() || "Agent").slice(0, 24)
        });
      }
    }

    roomRef = newRef;
    room = { code: roomCode };
    isHost = createNew;

    $("code").textContent = roomCode;
    $("lobby").classList.add("hidden");

    roomRef.on("value", (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        toast("La salle n’existe plus.");
        showLobby();
        return;
      }

      roomData = data;
      n = Number(data.game?.n || 0);
      s = Number(data.game?.seconds ?? 900);
      penalties = Number(data.game?.penalties || 0);
      activeM = data.theme === "bunker" ? B : M;

      document.body.classList.toggle(
        "bunker-theme",
        data.theme === "bunker"
      );

      people();
      displayTime(s);
      updatePenalty();

      if (lastN !== n || lastTheme !== data.theme) {
        lastN = n;
        lastTheme = data.theme;

        if (data.game.status === "playing") {
          render();
        }
      }

      if (data.game.status === "timeup") {
        clearInterval(timer);
        $("status").textContent = "TEMPS ÉCOULÉ";
        $("feedback").textContent =
          "Temps écoulé, agent. Mission compromise.";
        $("feedback").className = "bad";
        [...$("answers").children].forEach((b) => {
          b.disabled = true;
        });
        $("nextBtn").hidden = true;
        $("hintBtn").hidden = true;
      }

      if (data.game.status === "won") {
        clearInterval(timer);

        $("kicker").textContent = "OPÉRATION TERMINÉE";
        $("title").textContent = "Dossier récupéré";
        $("date").textContent = "MISSION ACCOMPLIE";
        $("artifact").textContent =
          "🏅 ARCHIVES SÉCURISÉES — Mission accomplie, agent !";
        $("question").textContent =
          "Vous avez terminé les épreuves.";
        $("answers").innerHTML = "";
        $("feedback").textContent = "✦ Opération réussie !";
        $("feedback").className = "good";
        $("hintBtn").hidden = true;
        $("nextBtn").hidden = true;
        $("status").textContent = "SUCCÈS";
        $("progress").textContent =
          `MISSION ${activeM.length} SUR ${activeM.length}`;
        $("fill").style.width = "100%";
      }
    }, (error) => {
      console.error(error);
      toast("Erreur de connexion à la salle.");
    });

    clearInterval(timer);
    timer = setInterval(tick, 1000);

    toast("Salle connectée ! Les joueurs sont synchronisés.");
  } catch (error) {
    console.error(error);
    toast("Erreur Firebase : vérifie la connexion et les règles.");
  } finally {
    changingRoom = false;
  }
}

$("hintBtn").onclick = () => {
  if (!roomData || roomData.game.status !== "playing") return;
  if (used) return toast("Indice déjà consulté, agent.");

  used = true;
  $("hint").textContent = "INDICE : " + activeM[n].h;
  toast("Transmission reçue.");
};

$("nextBtn").onclick = async () => {
  if (!roomRef || !roomData || !done) return;

  if (!isHost) {
    toast("Seul l’hôte peut passer à la mission suivante.");
    return;
  }

  const next = n + 1;

  if (next >= activeM.length) {
    await roomRef.child("game/status").set("won");
    return;
  }

  await roomRef.child("game/n").set(next);
};

$("create").onclick = async () => {
  const theme =
    document.querySelector('input[name="roomTheme"]:checked')?.value ||
    "archives";

  await enterRoom(code(), theme, true);
};

$("join").onclick = async () => {
  const roomCode = $("joinCode").value.trim().toUpperCase();

  if (!/^[A-Z0-9]{5}$/.test(roomCode)) {
    toast("Entre un code de salle valide à 5 caractères.");
    return;
  }

  await enterRoom(roomCode, "archives", false);
};

$("exit").onclick = async () => {
  clearInterval(timer);

  if (roomRef && myUid) {
    roomRef.off();
    await roomRef.child("players/" + myUid).remove()
      .catch(console.error);
  }

  roomRef = null;
  roomData = null;
  room = null;
  isHost = false;
  lastN = -1;
  lastTheme = "";

  showLobby();
};

firebase.auth().onAuthStateChanged((user) => {
  if (!user) return;

  myUid = user.uid;
  console.log("Joueur connecté :", myUid);
});

render();