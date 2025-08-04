import weddingHero from '@/assets/wedding-hero.jpg';
import WeddingCard from '@/components/WeddingCard';
import GroomProfile from '@/components/GroomProfile';
import RSVPForm from '@/components/RSVPForm';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  console.log('Index component is rendering');
  
  return (
    <div className="min-h-screen bg-gradient-romantic relative overflow-x-hidden">
      {/* Hero Section with Wedding Image */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src={weddingHero}
            alt="Wedding couple"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-background"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-32 z-10 px-4 md:px-8 max-w-4xl mx-auto">
        {/* Welcome Message */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-script text-primary mb-6 font-bold tracking-wide">
            Hurmatli mehmonlar!
          </h1>
          <p className="text-lg md:text-xl font-script text-foreground leading-relaxed max-w-3xl mx-auto font-medium tracking-wide">
            Sizni Zuxriddin va Rajabgullarning nikoh to'yining faxriy mehmoni bo'lishga taklif qilamiz. 
            Qalblar ezguliklarga to'la bo'lgan ushbu qutlug' kunda do'stlar yonida bo'ling!
          </p>
        </div>

        {/* Wedding Details Card */}
        <div className="mb-16">
          <WeddingCard />
        </div>

        {/* Additional Greeting */}
        <div className="text-center mb-16 bg-gradient-card backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft border border-primary/20">
          <p className="text-lg md:text-xl font-script text-foreground leading-relaxed mb-6 font-medium tracking-wide">
            Hurmatli mehmon! Hayotimizning eng baxtli kunlaridan biri yaqinda keladi! 
            Ushbu baxtli kunda biz siz(lar)ni yonimizda ko'rib, quvonchimizni baham ko'rishni xohlaymiz!
          </p>
          <p className="text-lg font-script text-primary font-bold tracking-wide">
            Sizni to'yimizning bayram dasturxonida kutamiz!
          </p>
        </div>

        {/* Groom Profile */}
        <GroomProfile />

        {/* RSVP Form */}
        <div className="mb-20">
          <RSVPForm />
        </div>
      </div>

      {/* Music Player - Fixed at bottom */}
      <MusicPlayer />

      {/* Background decorative elements */}
      <div className="fixed top-20 left-10 w-20 h-20 opacity-10 pointer-events-none animate-pulse">
        <div className="w-full h-full bg-primary rounded-full"></div>
      </div>
      <div className="fixed top-40 right-16 w-16 h-16 opacity-10 pointer-events-none animate-pulse delay-1000">
        <div className="w-full h-full bg-accent rounded-full"></div>
      </div>
      <div className="fixed bottom-40 left-20 w-12 h-12 opacity-10 pointer-events-none animate-pulse delay-2000">
        <div className="w-full h-full bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default Index;
