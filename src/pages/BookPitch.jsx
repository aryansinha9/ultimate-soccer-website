import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { CheckCircle, ArrowLeft, ArrowRight, Calendar, Clock, DollarSign, Users } from "lucide-react";
import { PitchBooking } from "../entities/PitchBooking.js";

const pitchTypes = [
  { id: "5-aside-1hr", name: "5-Aside Pitch Hire - 1HR", duration: "1 hour", players: "10 players max", price: 120 },
  { id: "5-aside-2hr", name: "5-Aside Pitch Hire - 2HR", duration: "2 hours", players: "10 players max", price: 220 },
  { id: "7-aside-1hr", name: "7-Aside Pitch Hire - 1HR", duration: "1 hour", players: "14 players max", price: 150 },
  { id: "7-aside-2hr", name: "7-Aside Pitch Hire - 2HR", duration: "2 hours", players: "14 players max", price: 280 },
  { id: "11-aside-1hr", name: "11-Aside Pitch Hire - 1HR", duration: "1 hour", players: "22 players max", price: 200 },
  { id: "11-aside-2hr", name: "11-Aside Pitch Hire - 2HR", duration: "2 hours", players: "22 players max", price: 380 }
];

const generateDates = () => {
  const dates = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 6; hour <= 22; hour++) {
    slots.push({
      time: `${hour.toString().padStart(2, '0')}:00`,
      available: Math.random() > 0.3
    });
  }
  return slots;
};

export default function BookPitch() {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = sessionStorage.getItem('bookingStep');
    return savedStep ? JSON.parse(savedStep) : 1;
  });
  const [selectedPitch, setSelectedPitch] = useState(() => {
    const savedPitch = sessionStorage.getItem('bookingPitch');
    return savedPitch ? JSON.parse(savedPitch) : null;
  });
  const [selectedDate, setSelectedDate] = useState(() => {
    const savedDate = sessionStorage.getItem('bookingDate');
    return savedDate ? new Date(JSON.parse(savedDate)) : null;
  });
  const [selectedTime, setSelectedTime] = useState(() => {
    const savedTime = sessionStorage.getItem('bookingTime');
    return savedTime ? JSON.parse(savedTime) : null;
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('bookingStep', JSON.stringify(currentStep));
    sessionStorage.setItem('bookingPitch', JSON.stringify(selectedPitch));
    sessionStorage.setItem('bookingDate', JSON.stringify(selectedDate));
    sessionStorage.setItem('bookingTime', JSON.stringify(selectedTime));
  }, [currentStep, selectedPitch, selectedDate, selectedTime]);

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  const handlePitchSelect = (pitch) => {
    setSelectedPitch(pitch);
    setCurrentStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setCurrentStep(3);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setCurrentStep(4);
  };

  const handleSubmit = async () => {
    if (!agreedToTerms) return;
    
    setIsSubmitting(true);
    try {
      await PitchBooking.create({
        pitch_type: selectedPitch.id,
        booking_date: selectedDate.toISOString().split('T')[0],
        time_slot: selectedTime,
        price: selectedPitch.price,
        status: "pending"
      });
      setCurrentStep(5);
    } catch (error) {
      alert("There was an error processing your booking. Please try again.");
    }
    setIsSubmitting(false);
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setSelectedPitch(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setAgreedToTerms(false);
    sessionStorage.removeItem('bookingStep');
    sessionStorage.removeItem('bookingPitch');
    sessionStorage.removeItem('bookingDate');
    sessionStorage.removeItem('bookingTime');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            BOOK YOUR <span className="text-yellow-400">PITCH</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reserve your spot on our FIFA-grade synthetic pitches.
          </p>
        </div>

        <div className="flex justify-center items-center mb-12 space-x-2">
          {[
            { step: 1, label: "Select Pitch" },
            { step: 2, label: "Choose Date" },
            { step: 3, label: "Pick Time" },
            { step: 4, label: "Confirm" }
          ].map((item) => (
            <React.Fragment key={item.step}>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  currentStep >= item.step 
                    ? "bg-green-600 text-white" 
                    : "bg-gray-700 text-gray-300"
                }`}>
                  {currentStep > item.step ? <CheckCircle className="w-5 h-5" /> : item.step}
                </div>
                <span className={`ml-3 text-sm font-medium transition-colors ${
                  currentStep >= item.step ? "text-yellow-400" : "text-gray-400"
                }`}>
                  {item.label}
                </span>
              </div>
              {item.step < 4 && <ArrowRight className="w-4 h-4 text-gray-600" />}
            </React.Fragment>
          ))}
        </div>

        {currentStep === 1 && (
          <Card className="shadow-lg bg-gray-800 border-gray-700 rounded-xl p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center text-yellow-400 uppercase tracking-wider mb-4">
                1. SELECT PITCH TYPE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {pitchTypes.map((pitch) => (
                  <div
                    key={pitch.id}
                    onClick={() => handlePitchSelect(pitch)}
                    className="border border-gray-700 rounded-xl p-6 bg-gray-900 hover:border-yellow-400 transition-all cursor-pointer flex flex-col items-center"
                  >
                    <h3 className="text-lg font-bold text-white mb-4 text-center">
                      {pitch.name}
                    </h3>
                    <div className="space-y-2 mb-6 text-gray-400">
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{pitch.duration}</span></div>
                      <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{pitch.players}</span></div>
                    </div>
                    <div className="bg-green-600 text-white text-lg font-bold rounded-full px-8 py-2 mt-auto">
                      ${pitch.price}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="shadow-lg bg-gray-800 border-gray-700 rounded-xl p-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <Button onClick={() => setCurrentStep(1)} className="bg-blue-600 text-white rounded-lg hover:bg-gray-200 hover:text-blue-600 transition-colors flex items-center px-6 py-3">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-bold">Back</span>
              </Button>
              <CardTitle className="text-xl font-bold text-yellow-400 uppercase tracking-wider">
                2. CHOOSE DATE
              </CardTitle>
              <div className="w-24"></div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 text-center">
                <p className="text-gray-400">Selected: <span className="font-semibold text-yellow-400">{selectedPitch?.name}</span></p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {dates.map((date, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleDateSelect(date)}
                    className="h-24 flex flex-col bg-gray-700 border-gray-600 hover:bg-gray-600 hover:border-yellow-400 text-white rounded-lg"
                  >
                    <Calendar className="w-5 h-5 mb-2" />
                    <span className="text-base font-semibold">
                      {date.toLocaleDateString('en-AU', { weekday: 'short' })}
                    </span>
                    <span className="text-sm text-gray-300">
                      {date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="shadow-lg bg-gray-800 border-gray-700 rounded-xl p-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <Button onClick={() => setCurrentStep(2)} className="bg-blue-600 text-white rounded-lg hover:bg-gray-200 hover:text-blue-600 transition-colors flex items-center px-6 py-3">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-bold">Back</span>
              </Button>
              <CardTitle className="text-xl font-bold text-yellow-400 uppercase tracking-wider">
                3. PICK TIME
              </CardTitle>
              <div className="w-24"></div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 text-center">
                <p className="text-gray-400">
                  {selectedPitch?.name} on <span className="font-semibold text-yellow-400">
                    {selectedDate?.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant={slot.available ? "outline" : "ghost"}
                    disabled={!slot.available}
                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                    className={`h-20 p-2 flex flex-col rounded-lg ${
                      slot.available 
                        ? "bg-gray-700 border-gray-600 hover:bg-gray-600 hover:border-yellow-400 text-white"
                        : "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <Clock className="w-4 h-4 mb-1" />
                    <span className="text-sm font-semibold">{slot.time}</span>
                    <span className="text-xs">
                      {slot.available ? `$${selectedPitch?.price}` : "Unavailable"}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="shadow-lg bg-gray-800 border-gray-700 rounded-xl p-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <Button onClick={() => setCurrentStep(3)} className="bg-blue-600 text-white rounded-lg hover:bg-gray-200 hover:text-blue-600 transition-colors flex items-center px-6 py-3">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-bold">Back</span>
              </Button>
              <CardTitle className="text-xl font-bold text-yellow-400 uppercase tracking-wider">
                4. CONFIRM BOOKING
              </CardTitle>
              <div className="w-24"></div>
            </CardHeader>
            <CardContent className="mt-6">
              <div className="bg-gray-900 rounded-xl p-8 mb-8 space-y-4">
                <h3 className="text-lg font-bold text-center mb-6 text-yellow-400">Booking Summary</h3>
                <div className="flex justify-between items-center text-lg"><span className="text-gray-400">Location:</span><span className="font-semibold text-white">Ultimate Soccer Fairfield</span></div>
                <div className="flex justify-between items-center text-lg"><span className="text-gray-400">Booking Type:</span><span className="font-semibold text-white">{selectedPitch?.name}</span></div>
                <div className="flex justify-between items-center text-lg"><span className="text-gray-400">Date:</span><span className="font-semibold text-white">{selectedDate?.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                <div className="flex justify-between items-center text-lg"><span className="text-gray-400">Time:</span><span className="font-semibold text-white">{selectedTime}</span></div>
                <div className="border-t border-gray-700 pt-4 mt-4 flex justify-between items-center text-xl">
                  <span className="font-bold text-white">Total Price:</span>
                  <span className="font-bold text-green-400">${selectedPitch?.price}</span>
                </div>
              </div>

              <div className="space-y-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={setAgreedToTerms}
                  />
                  <span className="text-sm text-gray-400">I have read and agree to the 
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline mx-1">
                      privacy policy
                    </a> 
                    and 
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline ml-1">
                      terms & conditions
                    </a>
                  </span>
                </label>

                <Button
                  onClick={handleSubmit}
                  disabled={!agreedToTerms || isSubmitting}
                  className="w-full bg-green-700 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-lg flex items-center justify-center"
                >
                  <DollarSign className="w-5 h-5 mr-3" />
                  {isSubmitting ? "Processing..." : "Proceed to Checkout"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 5 && (
          <Card className="shadow-lg bg-gray-800/50 border-gray-700 rounded-xl">
            <CardContent className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Booking Request Submitted!
              </h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Thank you for your booking request. We'll contact you shortly to confirm your reservation and process payment.
              </p>
              <div className="space-y-4">
                <Button onClick={resetBooking} className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-lg">
                  Book Another Pitch
                </Button>
                <p className="text-sm text-gray-400">
                  Questions? Call us on <span className="font-semibold text-yellow-400">02 9725 7020</span>
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}