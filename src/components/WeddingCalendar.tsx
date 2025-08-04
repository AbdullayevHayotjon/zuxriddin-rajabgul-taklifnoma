import weddingCalendar from '@/assets/wedding-calendar.jpg';

const WeddingCalendar = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="bg-primary/10 p-2 rounded-lg">
        <img 
          src={weddingCalendar} 
          alt="Wedding Calendar - August 12, 2025" 
          className="w-20 h-16 md:w-32 md:h-24 object-cover rounded-lg"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-serif font-bold text-primary">
          12.08.2025
        </p>
        <p className="text-lg font-sans text-foreground">
          soat 19:00
        </p>
      </div>
    </div>
  );
};

export default WeddingCalendar;