import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import WeddingCalendar from './WeddingCalendar';
import weddingRings from '@/assets/wedding-rings.jpg';

const WeddingCard = () => {
  const openMap = () => {
    const location = "Buxoro viloyati, Rometan tumani, Imran restoranti";
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="relative">
      {/* Decorative flowers around card */}
      <div className="absolute -top-4 -left-4 w-16 h-16 opacity-30 hidden md:block">
        <img src={weddingRings} alt="decoration" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 opacity-30 hidden md:block">
        <img src={weddingRings} alt="decoration" className="w-full h-full object-cover rounded-full transform rotate-45" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20 hidden md:block">
        <img src={weddingRings} alt="decoration" className="w-full h-full object-cover rounded-full transform -rotate-12" />
      </div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20 hidden md:block">
        <img src={weddingRings} alt="decoration" className="w-full h-full object-cover rounded-full transform rotate-12" />
      </div>

      {/* Main card */}
      <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-primary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <img src={weddingRings} alt="decoration" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-script text-center mb-8 text-primary">
            To'y haqida
          </h2>

          {/* Wedding couple info */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-script mb-2 text-foreground font-bold tracking-wide">
              To'y egalari
            </h3>
            <p className="text-lg font-script text-primary font-bold tracking-wide">
              Bozorovlar va No'monovlar oilasi
            </p>
          </div>

          {/* Date and time with calendar */}
          <WeddingCalendar />

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Location */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-script mb-4 text-primary font-bold tracking-wide">
              To'y manzili
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-base font-sans text-foreground">
                Buxoro viloyati, Rometan tumani, Imran restoranti
              </p>
            </div>
            <Button
              onClick={openMap}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/20 hover:scale-105 font-sans rounded-xl px-6 py-2 transition-all duration-300"
            >
              Xaritadan ko'rish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;