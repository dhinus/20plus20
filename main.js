
const texts = {
  whatIs20plus20Title: {
    en: 'INFO & TIMETABLE',
    pt: 'INFO & TIMETABLE'
  },
  whatIs20plus20Description: {
    en: `A small, unique music event, uniting artists and people from Italy, Portugal and elsewhere.\n\nProudly independent and DIY, by music fans for music fans. A new start (for a new decade). A different night for different times.\n\nTIMETABLE\n\nDoors: 19:00\nStart: 20:00\n\nStage times TBA`,
    pt: `Um evento musical pequeno e único, unindo artistas e pessoas da Itália, Portugal e outros lugares.\n\nOrgulhosamente independente e DIY, por fãs de música para fãs de música. Um novo começo (para uma nova década). Uma noite diferente para tempos diferentes.\n\nTIMETABLE\n\nPortas: 19:00\nInício: 20:00\n\nStage times TBA`
  },
  lineUpTitle: {
    en: `ARTISTS`,
    pt: `ARTISTS`
  },
  lineUpDescription: {
    en: `<a href="https://www.facebook.com/giardinidimiro/">Giardini di Mirò</a> (Italy) — Twenty years of career, more than a thousand concerts all over the world, Giardini di Mirò are a reference name in the Italian independent scene since the early 2000s. Their sound is a mix of psychedelia, post rock, electronic music, shoegaze, noise.\n\nMore artists to be announced`,
    pt: `<a href="https://www.facebook.com/giardinidimiro/">Giardini di Mirò</a> (Itália) - Vinte anos de carreira, mais de mil shows em todo o mundo, Giardini di Mirò são um nome de referência no cenário independente italiano desde o início dos anos 2000. O som deles é uma mistura de psicodelia, pós-rock, música eletrônica, shoegaze, ruído.\n\nMais artistas a serem anunciados`
  },
  infoTicketsTitle: {
    en: `TICKETS & LOCATION`,
    pt: `TICKETS & LOCATION`
  },
  infoTicketsDescription: {
    en: 'Auditório CCOP\nRua do Duque de Loulé 202\n4000-324 Porto, Portugal\n\n\nTickets: €10 -- <a href="https://www.bol.pt/Comprar/Bilhetes/85980-20_20_fest-auditorio_ccop/">bol.pt</a>',
    pt: 'Auditório CCOP\nRua do Duque de Loulé 202\n4000-324 Porto, Portugal\n\n\n',
  },
  navBarMessage: {
    en: 'Saturday 21st March    +++    Auditório CCOP    +++    A small, unique music event    +++    Giardini di Mirò    +++    More artists to be announced    +++    ',
    pt: 'Sábado 21 Março    +++    Auditório CCOP    +++    Um evento musical pequeno e único    +++    Giardini di Mirò    +++     Mais artistas a serem anunciados   +++    '
  },
  navBarMessage2: {
    en: 'Saturday 21st March    +++    Auditório CCOP    +++    A small, unique music event    +++    Giardini di Mirò    +++    More artists to be announced    +++    ',
    pt: 'Sábado 21 Março    +++    Auditório CCOP    +++    Um evento musical pequeno e único    +++    Giardini di Mirò    +++     Mais artistas a serem anunciados   +++    '
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


