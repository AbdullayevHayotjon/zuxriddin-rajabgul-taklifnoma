import groomProfile from '@/assets/groom-profile.jpg';

const GroomProfile = () => {
  const handleProfileClick = () => {
    // Replace with actual Instagram profile URL
    window.open('https://instagram.com/zuhriddin_username', '_blank');
  };

  return (
    <div className="text-center mb-12">
      <p className="text-lg font-serif mb-6 text-primary">
        Hurmat bilan
      </p>
      
      <div 
        className="inline-block cursor-pointer transition-transform duration-gentle hover:scale-105"
        onClick={handleProfileClick}
      >
        <div className="relative">
          {/* Instagram-style profile picture */}
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-primary rounded-full p-1">
              <div className="w-full h-full bg-background rounded-full p-1">
                <img
                  src={groomProfile}
                  alt="Kuyov profili"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          {/* Instagram username */}
          <div className="text-center">
            <p className="text-primary font-sans font-medium">
              @zuhriddin_username
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              Instagram profilni ko'rish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomProfile;