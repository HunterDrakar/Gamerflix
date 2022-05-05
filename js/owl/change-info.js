let r = document.documentElement;
let link1 = document.getElementById('bttrailer');
let link2 = document.getElementById('btinfo');

/* Lançamento */
let lanc1 = document.querySelector('#lanc1');
let lanc2 = document.querySelector('#lanc2');
let lanc3 = document.querySelector('#lanc3');
let lanc4 = document.querySelector('#lanc4');
let lanc5 = document.querySelector('#lanc5');
let lanc6 = document.querySelector('#lanc6');
let lanc7 = document.querySelector('#lanc7');
let lanc8 = document.querySelector('#lanc8');
let lanc9 = document.querySelector('#lanc9');
let lanc10 = document.querySelector('#lanc10');

/* Ação */
let acao1 = document.querySelector('#acao1');
let acao2 = document.querySelector('#acao2');
let acao3 = document.getElementById('#acao3');
let acao4 = document.getElementById('#acao4');
let acao5 = document.querySelector('#acao5');
let acao6 = document.querySelector('#acao6');
let acao7 = document.querySelector('#acao7');
let acao8 = document.querySelector('#acao8');
let acao9 = document.querySelector('#acao9');
let acao10 = document.querySelector('#acao10');

/* Aventura */
let aventura1 = document.querySelector('#aventura1');
let aventura2 = document.querySelector('#aventura2');
let aventura3 = document.querySelector('#aventura3');
let aventura4 = document.querySelector('#aventura4');
let aventura5 = document.querySelector('#aventura5');
let aventura6 = document.querySelector('#aventura6');
let aventura7 = document.querySelector('#aventura7');
let aventura8 = document.querySelector('#aventura8');
let aventura9 = document.querySelector('#aventura9');
let aventura10 = document.querySelector('#aventura10');

/* Lançamento 1 */

lanc1.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=UxDWGW7Z67I";
    link2.href="https://br.ign.com/horizon-forbidden-west/95974/news/ps4-ps5-horizon-forbidden-west-ganha-trailer-de-historia";
    r.style.setProperty('--capa', "url('../img/capas/capa.jpg')");
    titulo.innerText = 'Horizon Forbidden West';
    descricao.innerText = "Horizon Forbidden West continues Aloy's story as she moves west to a far-future America to brave a majestic, but dangerous frontier where she'll face awe-inspiring machines and mysterious new threats. Only available for Playstation platforms.";
});

/* Lançamento 2 */

lanc2.addEventListener('click', () => {
    link1.href="https://youtu.be/JmcT2gF3bs4";
    link2.href="https://www.techtudo.com.br/noticias/2019/12/the-outlast-trials-e-o-novo-jogo-da-serie-de-terror-com-modo-cooperativo.ghtml";
    r.style.setProperty('--capa', "url('../img/capas/capa-outlast.jpg')");
    titulo.innerText = 'The Outlast Trials';
    descricao.innerText = "The Outlast Trials is a survival horror game you can play by yourself or with other players online. You'll have to survive the twisted, sadistic and bizarre experiments of the Murkoff Corporation, alone or in a group up to 4 players.";
});

/* Lançamento 3 */

lanc3.addEventListener('click', () => {
    link1.href="https://youtu.be/6tgsz7WbidU";
    link2.href="https://www.techtudo.com.br/listas/2021/09/death-stranding-directors-cut-sete-novidades-do-jogo-para-ps5.ghtml";
    r.style.setProperty('--capa', "url('../img/capas/capa-death.jpg')");
    titulo.innerText = "Death Stranding: Director's Cut";
    descricao.innerText = "In the near future, mysterious explosions have rocked the globe, setting off a series of supernatural events known as the Death Stranding. With otherworldly creatures plaguing the landscape, and mass extinction imminent, it’s up to Sam Porter Bridges to travel across the ravaged wasteland and save humanity from impending annihilation.";
});

/* Lançamento 4 */

lanc4.addEventListener('click', () => {
    link1.href="https://youtu.be/SXvQ1nK4oxk";
    link2.href="https://www.techtudo.com.br/review/red-dead-redemption-2.ghtml";
    r.style.setProperty('--capa', "url('../img/capas/capa-red_dead.jpg')");
    titulo.innerText = "Red Dead Redemption";
    descricao.innerText = "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.";
});

/* Lançamento 5 */

lanc5.addEventListener('click', () => {
    link1.href="https://youtu.be/II5UsqP2JAk";
    link2.href="https://www.techtudo.com.br/review/review-the-last-of-us-2-serie-volta-madura-e-com-enredo-que-surpreende.ghtml";
    r.style.setProperty('--capa', "url('../img/capas/capa-thelast.jpg')");
    titulo.innerText = "The Last of Us Part II";
    descricao.innerText = "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. Set five years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine: Ellie, who sets out for revenge after suffering a tragedy, and Abby, a soldier who becomes involved in a conflict between her militia and a religious cult. The game is played from a third-person perspective and allows the player to fight human enemies and cannibalistic zombie-like creatures with firearms, improvised weapons, and stealth.";
});

/* Lançamento 6 */

lanc6.addEventListener('click', () => {
    link1.href="https://youtu.be/pzlCxADSx0U";
    link2.href="https://www.techtudo.com.br/noticias/2021/11/beta-de-halo-infinite-multiplayer-ja-esta-disponivel-veja-requisitos.ghtml";
    r.style.setProperty('--capa', "url('../img/capas/capa-halo.jpg')");
    titulo.innerText = "Halo Infinite";
    descricao.innerText = "The Master Chief returns in Halo Infinite – the next chapter of the legendary franchise. When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and explore the massive scale of the Halo ring.";
});

/* Lançamento 7 */

lanc7.addEventListener('click', () => {
    link1.href="https://youtu.be/T03PxxuCfDA";
    link2.href="https://www.techtudo.com.br/review/review-spider-man-miles-morales-capricha-na-diversao-para-novos-fas-do-heroi.ghtml";
    r.style.setProperty('--capa', "url('../img/capas/capa-miles.jpg')");
    titulo.innerText = "Marvel's Spider-Man: Miles Morales";
    descricao.innerText = "The latest adventure in the Spider-Man universe will build on and expand ‘Marvel’s Spider-Man’ through an all-new story. Players will experience the rise of Miles Morales as he masters new powers to become his own Spider-Man.";
});

/* Lançamento 8 */

lanc8.addEventListener('click', () => {
    link1.href="https://youtu.be/qqiC88f9ogU";
    link2.href="https://br.ign.com/elden-ring/93206/feature/tudo-o-que-sabemos-sobre-elden-ring";
    r.style.setProperty('--capa', "url('../img/capas/capa-elden.jpg')");
    titulo.innerText = "Elden Ring";
    descricao.innerText = "Elden Ring is a fantasy, action and open world game with RPG elements such as stats, weapons and spells. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.";
});

/* Lançamento 9 */

lanc9.addEventListener('click', () => {
    link1.href="https://youtu.be/HxekztcXS8s";
    link2.href="https://square-enix-games.com/pt_BR/games/chrono-cross-radical-dreamers-edition";
    r.style.setProperty('--capa', "url('../img/capas/capa-chrono.jpg')");
    titulo.innerText = "Chrono Cross: The Radical Dreamers Edition";
    descricao.innerText = "Chrono Cross: The Radical Dreamers Edition is a remaster of Chrono Cross which includes Radical Dreamers, which was previously only released for the Satellaview in Japan.";
});

/* Lançamento 10 */

lanc10.addEventListener('click', () => {
    link1.href="https://youtu.be/9bRWIdOMfro";
    link2.href="https://www.ligadosgames.com/tudo-sobre-diablo-4/#:~:text=Diablo%20IV%20foi%20anunciado%20pela,novidades%20que%20o%20game%20trar%C3%A1.";
    r.style.setProperty('--capa', "url('../img/capas/capa-diablo.jpg')");
    titulo.innerText = "Diablo IV";
    descricao.innerText = "Endless demons to slaughter. Deep customization through Talents, Skill Points, Runes, and Legendary loot. Randomized dungeons contained in a dynamic open world. Survive and conquer darkness—or succumb to the shadows.";
});


/* Ação 1*/


acao1.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 2*/

acao2.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 3*/

acao3.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 4*/


acao4.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 5*/

acao5.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 6*/

acao6.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 7*/

acao7.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 8*/

acao8.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 9*/

acao9.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Ação 10*/

acao10.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});


/* Aventura 1*/

aventura1.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 2*/

aventura2.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 3*/

aventura3.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 4*/

aventura4.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 5*/

aventura5.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 6*/

aventura6.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 7*/

aventura7.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 8*/

aventura8.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 9*/

aventura9.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});

/* Aventura 10*/

aventura10.addEventListener('click', () => {
    link1.href="";
    link2.href="";
    r.style.setProperty('--capa', "url('../img/capas/capa-.jpg')");
    titulo.innerText = "";
    descricao.innerText = "";
});


