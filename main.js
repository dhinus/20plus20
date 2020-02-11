
const texts = {
  whatIs20plus20Title: {
    en: 'WHAT IS 20+20?',
    pt: 'WHAT IS 20+20?'
  },
  whatIs20plus20Description: {
    en: `A small, unique music event, uniting artists and people from Italy, Portugal and elsewhere.\n\nProudly independent and DIY, by music fans for music fans. A new start (for a new decade). A different night for different times.`,
    pt: `Um evento musical pequeno e único, unindo artistas e pessoas da Itália, Portugal e outros lugares.\n\nOrgulhosamente independente e DIY, por fãs de música para fãs de música. Um novo começo (para uma nova década). Uma noite diferente para tempos diferentes`
  },
  lineUpTitle: {
    en: `LINE-UP`,
    pt: `LINE-UP`
  },
  lineUpDescription: {
    en: `Giardini di Mirò (Italy) — Twenty years of career, more than a thousand concerts all over the world, Giardini di Mirò are a reference name in the Italian independent scene since the early 2000s. Their sound is a mix of psychedelia, post rock, electronic music, shoegaze, noise.\n\nMore artists to be announced`,
    pt: `Giardini di Mirò (Itália) - Vinte anos de carreira, mais de mil shows em todo o mundo, Giardini di Mirò são um nome de referência no cenário independente italiano desde o início dos anos 2000. O som deles é uma mistura de psicodelia, pós-rock, música eletrônica, shoegaze, ruído.\n\nMAIS ARTISTAS A SEREM ANUNCIADOS ...`
  },
  infoTicketsTitle: {
    en: `INFO & TICKETS`,
    pt: `INFO & TICKETS`
  },
  infoTicketsDescription: {
    en: 'soldisoldi',
    pt: 'soldisoldi'
  },
  navBarMessage: {
    en: 'Saturday 21st March +++ Auditório CCOP +++ A small, unique music event +++ Giardini di mirò +++ Other artists to be announced',
    pt: 'Saturday 21st March +++ Auditório CCOP +++ A small, unique music event +++ Giardini di mirò +++ Other artists to be announced'
  },
  toggleLanguage: {
    en: '[en/port]',
    pt: '[en/port]'
  }
}


let userLanguage = navigator.language.slice(0, 2) === 'pt' ? 'pt' : 'en';

document.getElementById('toggleLanguage').addEventListener('click', toggleLanguage);

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

function openSection(sectionId) {
  // close every section
  document.querySelectorAll('.section:not(.closed)').forEach(element => {
    element.className = `${element.className} closed`;
  });

  // open clicked section
  document.getElementById(sectionId).className = document.getElementById(sectionId).className.replace('closed', '').trim();

  // close logo
  document.getElementById('logoHorizontal').className = 'hidden';
  document.getElementById('logoVertical').className = '';
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

function main() {
  populateTexts(userLanguage);
}

main();


