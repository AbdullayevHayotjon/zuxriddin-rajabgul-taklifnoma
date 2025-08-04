import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const RSVPForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedOption) {
      toast({
        title: "Iltimos tanlov qiling",
        description: "Javobingizni tanlang",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Rahmat!",
      description: "Javobingiz qabul qilindi",
    });
  };

  const options = [
    { value: 'yes-alone', label: 'Ha, men bora olaman' },
    { value: 'yes-couple', label: 'Turmush o\'rtog\'im bilan boraman' },
    { value: 'no', label: 'Afsuski, bora olmayman' },
  ];

  return (
    <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-romantic border border-primary/20 max-w-md mx-auto">
      <h3 className="text-xl font-serif text-center mb-2 text-primary">
        Hurmatli mehmon,
      </h3>
      <p className="text-center mb-6 text-foreground font-sans">
        to'yga kelayotganingizni tasdiqlang:<br />
        <span className="font-medium">Bitta variantni tanlang</span>
      </p>
      
      <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-4 mb-6">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-3">
            <RadioGroupItem 
              value={option.value} 
              id={option.value}
              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label 
              htmlFor={option.value} 
              className="text-sm font-sans text-foreground cursor-pointer flex-1"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <Button
        onClick={handleSubmit}
        className="w-full bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground font-sans rounded-xl py-3 transition-all duration-300"
      >
        Tasdiqlash
      </Button>
    </div>
  );
};

export default RSVPForm;