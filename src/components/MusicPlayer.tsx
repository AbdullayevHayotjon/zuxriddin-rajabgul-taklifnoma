import { useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gradient-card backdrop-blur-md rounded-full px-6 py-3 shadow-glow border border-primary/20 flex items-center gap-3 hover:scale-110 transition-all duration-300 cursor-pointer">
        <Music className="w-5 h-5 text-primary" />
        <span className="text-sm font-sans text-foreground hidden md:inline">
          To'y musiqasi
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={togglePlay}
          className="rounded-full w-10 h-10 p-0 border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-primary" />
          ) : (
            <Play className="w-4 h-4 text-primary" />
          )}
        </Button>
        <audio
          ref={audioRef}
          loop
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        >
          {/* You can replace this with actual wedding music */}
          <source src="/wedding-music.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default MusicPlayer;