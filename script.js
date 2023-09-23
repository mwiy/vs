document.addEventListener('DOMContentLoaded', () => {
  const customAudioPlayer = document.querySelector('.custom-audio-player');
  const audioElement = customAudioPlayer.querySelector('#audio');
  const playPauseButton = customAudioPlayer.querySelector('#play-pause-button');
  const seekBar = customAudioPlayer.querySelector('#seek-bar');
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    header.style.backgroundPositionY = -scrollValue * 0.5 + 'px'; // Ajuste o valor '0.5' conforme necessário para controlar a intensidade do parallax
  });

// Volume da música
audioElement.volume = 0.2;

  const musicList = [
    "music/RIKI 2OH2- SIDE1 (TAPE).mp3",
    "music/SLF OLYMPIXXX.mp3",
    "music/2KICKIS2KILL.mp3",
    "music/202 PINK FLAMINGOS.mp3",
    "music/DONGOLDMAN202LYMPICS.mp3",
    "music/LO-YMPIC.mp3",
    "music/LOGFINGERS.mp3",
    "music/MA VICTOIRE.mp3",
    "music/id{ANGST CITY DEMO}.mp3",
    "music/hysterics{ANGST CITY DEMO}.mp3",
    "music/2AFRAID2{KIROZERO}.mp3",
    "music/Ares-blaine-www.yahoo{SINGLE}.mp3",
    "music/LIMON{KIROZERO}.mp3",
    "music/basura1{ANGST CITY DEMO}.mp3",
    "music/aA -4kapas{SINGLE}.mp3",
    "music/he isnt{SINGLE}.mp3",
    "music/control{SINGLE}.mp3",
    "music/sormx{SINGLE}.mp3",
    "music/wasted - hndacvc{SINGLE}.mp3",
    "music/WHY_PT2{AESK-LAIN-DELIRIUM}.mp3",
    "music/dira - netajin{SINGLE}.mp3",
    "music/emso - netajin{SINGLE}.mp3",
    "music/astaghfirullah - netajin{SINGLE}.mp3",
    "music/anyway{SINGLE}.mp3",
    "music/MENINGITIS MICROWAVE.mp3",
    "music/muysensible{ANGST INSLAND}.mp3",
    "music/Sad Benja Sample - Emo Reggaeton{SINGLE}.mp3",
    "music/STONEKEEEEP.mp3",
    "music/TRACK MEET.mp3",
    "music/VOLLYBALL.mp3",
    "music/JALEN TUNA-blackfin.mp3",
    "music/JALEN TUNA-caught me in herself.mp3",
    "music/JALEN TUNA-im over you.mp3",
    "music/JALEN TUNA-JUST ANOTHA FIDM BITCH.mp3",
    "music/JALEN TUNA-KOT.mp3",
    "music/JALEN TUNA-LiNdSaY & PARKEr.mp3",
    "music/JALEN TUNA-magic fat girl.mp3",
    "music/JALEN TUNA-magic fat girl 2.mp3",
    "music/JALEN TUNA-MINE.mp3",
    "music/JALEN TUNA-Nina.mp3",
    "music/JALEN TUNA-OLD DAYZ.mp3",
    "music/JALEN TUNA-pillow.mp3",
    "music/JALEN TUNA-STALKERLYFE NINALYFE.mp3",
    "music/JALEN TUNA-water rough.mp3",
    "music/JALEN TUNA-whitefin.mp3",
    "music/JALEN TUNA-YOU A TRICK.mp3",
  ];

  let currentMusicIndex = parseInt(sessionStorage.getItem('currentMusicIndex')) || -1;

const playRandomMusic = () => {
    if (currentMusicIndex === -1) {
// Play a random song when the page loads
        currentMusicIndex = Math.floor(Math.random() * musicList.length);
    } else {
// Play the next song randomly
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * musicList.length);
        } while (nextIndex === currentMusicIndex); // Ensure the next song is different
        currentMusicIndex = nextIndex;
    }

    audioElement.src = musicList[currentMusicIndex];
    audioElement.play();
};

// Chame a função para tocar uma música aleatória ao carregar a página
playRandomMusic();
  
audioElement.addEventListener('ended', () => {
// Toca a próxima música aleatória quando a música atual terminar
  playRandomMusic();
});

//Guarda o estado da musica
window.addEventListener('DOMContentLoaded', () => {
  const audioPlaying = sessionStorage.getItem('audioPlaying');
  const currentTime = sessionStorage.getItem('currentTime');

  if (audioPlaying === 'true') {
      audioElement.play();
  }

  if (currentTime) {
      audioElement.currentTime = parseFloat(currentTime);
  }
});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('audioPlaying', audioElement.paused ? 'false' : 'true');
    sessionStorage.setItem('currentTime', audioElement.currentTime);
    sessionStorage.setItem('currentMusicIndex', currentMusicIndex);
});
  
// Botão de play/pause funcional
playPauseButton.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});

audioElement.addEventListener('play', () => {
  playPauseButton.src = 'icons/pause.svg';
});

audioElement.addEventListener('pause', () => {
  playPauseButton.src = 'icons/play.svg';
});

// Seek-bar funcional
seekBar.addEventListener('input', () => {
  const seekTime = (audioElement.duration / 100) * seekBar.value;
  audioElement.currentTime = seekTime;
});

  audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    seekBar.value = progress;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const menuList = document.getElementsByClassName('items')[0];
  const menuItems = menuList.querySelectorAll('.nav-links');

// Adicione a classe "current" ao item do menu da página atual
const currentPage = window.location.pathname.split('/').pop();
menuItems.forEach(item => {
  if (item.getAttribute('href') === currentPage) {
    item.classList.add('current');
  }
});

// Abre/fecha o menu home
menuButton.addEventListener('click', () => {
  if (menuList.style.display === "none" || menuList.style.display ===  '') {
    menuList.style.display = 'block';
  } else {
    menuList.style.display = 'none';
  }
});
  
// Redirecionar o usuário para a página index.html ao clicar no logotipo
  const logoContainer = document.getElementById('logo');
  logoContainer.addEventListener('click', () => {
    window.location.href = 'subscribe.html';
  });
});



