
const texts = {
  whatIs20plus20Title: {
    en: 'INFO & TIMETABLE',
    pt: 'INFO & HORÁRIOS'
  },
  whatIs20plus20Description: {
    en: `<strong>WHAT IS 20+20 FEST?</strong>

A small, unique music event, uniting artists and people from Italy, Portugal and elsewhere.

Proudly independent and DIY, by music fans for music fans. A new start (for a new decade). A different night for different times.


<strong>LINKS</strong>

<a href="https://www.facebook.com/20plus20/"><img class="social" src="img/fb.png" alt="Facebook"/></a> &nbsp;&nbsp;&nbsp; <a href="https://www.instagram.com/20plus20_fest/"><img class="social" src="img/ig.png" alt="Instagram"/></a>


<strong>TIMETABLE</strong>

Doors: 19:00
Start: 20:00
Stage times TBA
`,
    pt: `<strong>O QUE É 20+20 FEST</strong>

Um evento musical pequeno e único, unindo artistas e pessoas da Itália, Portugal e outros lugares.

Orgulhosamente independente e DIY, por fãs de música para fãs de música. Um novo começo (para uma nova década). Uma noite diferente para tempos diferentes.

<strong>LINKS</strong>

<a href="https://www.facebook.com/20plus20/"><img class="social" src="img/fb.png" alt="Facebook"/></a> &nbsp;&nbsp;&nbsp; <a href="https://www.instagram.com/20plus20_fest/"><img class="social" src="img/ig.png" alt="Instagram"/></a>

<strong>HORÁRIOS</strong>

Portas: 19:00
Início: 20:00
Stage times TBA
`
  },
  lineUpTitle: {
    en: `ARTISTS`,
    pt: `ARTISTAS`
  },
  lineUpDescription: {
    en: `<strong><a href="https://www.facebook.com/giardinidimiro/">GIARDINI DI MIRÒ</a> (Italy)</strong>

<img src="img/gdm.jpg"/>

Twenty years of career, more than a thousand concerts all over the world, Giardini di Mirò are a reference name in the Italian independent scene since the early 2000s. Their sound is a mix of psychedelia, post rock, electronic music, shoegaze, noise.

<hr>

<strong><a href="https://www.facebook.com/littlefriendsongs/">LITTLE FRIEND</a> (UK / Portugal)</strong>

<img src="img/little_friend.jpg"/>

Little Friend is the alter ego of John Almeida, an English-born musician and writer based in Porto, Portugal. Having in previous years played and fronted punk and rock-influenced bands, he chose to give a different direction to Little Friend’s sound, focusing on influences that encompass a wide array of musical sources, from 60s and 70s folk and singer-songwriter pop, to film soundtracks and country.

<hr>

<strong>MORE ARTISTS TO BE ANNOUNCED</strong>


    `,
    pt: `<strong><a href="https://www.facebook.com/giardinidimiro/">GIARDINI DI MIRÒ</a> (Itália)</strong>

<img src="img/gdm.jpg"/>

Vinte anos de carreira, mais de mil shows em todo o mundo, Giardini di Mirò são um nome de referência no cenário independente italiano desde o início dos anos 2000. O som deles é uma mistura de psicodelia, pós-rock, música eletrônica, shoegaze, ruído.

<hr>

<strong><a href="https://www.facebook.com/littlefriendsongs/">LITTLE FRIEND</a> (UK / Portugal)</strong>

<img src="img/little_friend.jpg"/>

<hr>

<strong>MAIS ARTISTAS A SEREM ANUNCIADOS</strong>


`
  },
  infoTicketsTitle: {
    en: `TICKETS & LOCATION`,
    pt: `BILHETES & LOCALIZAÇÃO`
  },
  infoTicketsDescription: {
    en: `<strong>TICKETS</strong>

€10

<a href="https://www.bol.pt/Comprar/Bilhetes/85980-20_20_fest-auditorio_ccop/"><img class="small" src="img/bol.png"/></a>

<hr>

<strong>LOCATION</strong>

    <strong><a href="https://www.facebook.com/auditorioccop/">Auditório CCOP</a></strong>

Rua do Duque de Loulé 202
4000-324 Porto, Portugal

<a href="https://goo.gl/maps/S3XLcHbnCjubvDTg6"><img src="img/gmaps.png"/></a>

`,
    pt: `<strong>BILHETES</strong>

€10

<a href="https://www.bol.pt/Comprar/Bilhetes/85980-20_20_fest-auditorio_ccop/"><img class="small" src="img/bol.png"/></a>

<hr>

<strong>LOCALIZAÇÃO</strong>

    <strong><a href="https://www.facebook.com/auditorioccop/">Auditório CCOP</a></strong>

Rua do Duque de Loulé 202
4000-324 Porto, Portugal

<a href="https://goo.gl/maps/S3XLcHbnCjubvDTg6"><img src="img/gmaps.png"/></a>
`,
  },
  navBarMessage: {
    en: 'Saturday 21 March 2020    +++    Auditório CCOP    +++    A small, unique music event    +++    Giardini di Mirò    +++    Little Friend    +++    More artists to be announced    +++    ',
    pt: 'Sábado 21 Março 2020    +++    Auditório CCOP    +++    Um evento musical pequeno e único    +++    Giardini di Mirò    +++    Little Friend    +++    Mais artistas a serem anunciados   +++    '
  },
  navBarMessage2: {
    en: 'Saturday 21 March 2020    +++    Auditório CCOP    +++    A small, unique music event    +++    Giardini di Mirò    +++    Little Friend    +++    More artists to be announced    +++    ',
    pt: 'Sábado 21 Março 2020    +++    Auditório CCOP    +++    Um evento musical pequeno e único    +++    Giardini di Mirò    +++    Little Friend    +++    Mais artistas a serem anunciados   +++    '
  },
  toggleLanguage: {
    en: '[en/pt]',
    pt: '[en/pt]'
  }
}


let userLanguage = navigator.language.slice(0, 2) === 'pt' ? 'pt' : 'en';

document.getElementById('toggleLanguage').addEventListener('click', toggleLanguage);

document.getElementById('mobileMenu').addEventListener('click', onMobileMenuClick);

function isMobile() {
  const md = new MobileDetect(window.navigator.userAgent);
  return md.mobile() !== null;
}

const formatText = (text) => {
  return `<span>${text.replace(/\n/g, '<br/>')}</span>`;
}

const populateTexts = () => {
  const textIds = Object.keys(texts);

  textIds.forEach(textId => {
    document.getElementById(textId).innerHTML = formatText(texts[textId][userLanguage]);
  });
}

function toggleLanguage() {
  userLanguage = userLanguage === 'en' ? 'pt' : 'en';
  populateTexts(userLanguage);
}

function closeSections() {
  document.querySelectorAll('.section:not(.closed)').forEach(element => {
    element.className = `${element.className} closed`;
  });
}

function openSection(sectionId) {
  // close every section
  closeSections();

  // open clicked section
  document.getElementById(sectionId).className = document.getElementById(sectionId).className.replace('closed', '').trim();

  // invert logo
  if (isMobile()) {
    // change menu icon
    document.getElementById('icon-times').setAttribute('class', 'hidden');
    document.getElementById('icon-bars').setAttribute('class', '');
  } else {
    document.getElementById('logoHorizontal').className = 'hidden';
    document.getElementById('logoVertical').className = '';
  }
}

function openWhatIs20plus20() {
  openSection('whatIs20plus20');
}
function openLineUp() {
  openSection('lineUp');
}
function openInfoTickets() {
  openSection('infoTickets');
}

function onMobileMenuClick() {
  if (document.getElementById('icon-bars').className.baseVal === 'hidden') {
    // reset
    initializeMobile();
  } else {
    // logo
    document.getElementById('logoHorizontal').className = '';
    document.getElementById('logoVertical').className = 'hidden';

    // close every section
    closeSections();

    // show sections
    document.getElementById('sections').className = document.getElementById('sections').className.replace('hidden', '').trim();

    // set "x" icon
    document.getElementById('icon-times').setAttribute('class', '');
    document.getElementById('icon-bars').setAttribute('class', 'hidden');
  }
}

function initializeMobile() {
  document.body.className = 'mobile';

  // menu
  document.getElementById('icon-times').setAttribute('class', 'hidden');
  document.getElementById('icon-bars').setAttribute('class', '');

  // logo
  document.getElementById('logoHorizontal').className = 'hidden';
  document.getElementById('logoVertical').className = '';

  // close every section
  closeSections();

  // hide sections
  document.getElementById('sections').className = `${document.getElementById('sections').className} hidden`;
}

function main() {
  if (isMobile()) {
    initializeMobile();
  }
  populateTexts(userLanguage);
}

main();


