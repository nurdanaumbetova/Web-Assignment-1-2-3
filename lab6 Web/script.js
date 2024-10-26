const tracks = [
    { url: 'musics/audio1.mp3', cover: 'images/macan.jpg', title: 'Пополам' },
    { url: 'musics/audio2.mp3', cover: 'images/xcho.jpeg', title: 'Простуда' },
    { url: 'musics/audio3.mp3', cover: 'images/memories.jpg', title: 'Memories' }
  ];
  
  let currentTrack = 0; 
  const audio = new Audio(tracks[currentTrack].url); 
  
  const cover = document.getElementById('cover');
  const playPauseButton = document.getElementById('playPause');
  const nextButton = document.getElementById('next');
  const trackInfo = document.getElementById('track-info');
  

  function updateTrackInfo() {
    cover.src = tracks[currentTrack].cover;
    trackInfo.textContent = `Track: ${currentTrack + 1} - ${tracks[currentTrack].title}`;
  }
  

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Play';
    }
  }
  
  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length; 
    audio.src = tracks[currentTrack].url;
    updateTrackInfo();
    audio.play();
    playPauseButton.textContent = 'Pause';
  }
  
  function playTrack(trackIndex) {
    currentTrack = trackIndex;
    audio.src = tracks[currentTrack].url;
    updateTrackInfo();
    audio.play();
    playPauseButton.textContent = 'Pause';
  }
  

  updateTrackInfo();
  
  playPauseButton.addEventListener('click', togglePlayPause);
  nextButton.addEventListener('click', nextTrack);
  