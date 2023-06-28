import md from '../../../../../Musics/game-music.mp3'

const MusicPlayer = () => {
    return (
      <div>
        <audio src={md} autoPlay loop />
      </div>
    );
  };
  
  export default MusicPlayer; 