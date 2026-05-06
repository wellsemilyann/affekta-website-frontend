import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Label } from './ui/label';
import { Input } from './ui/input';

export function CalendarBooking() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [loadingDate, setLoadingDate] = useState(true);

  const allTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

// Parse "hh:mm AM/PM" to minutes since midnight for easy comparison
const toMinutes = (timeStr: string) => {
  const [time, period] = timeStr.split(' ');
  if (!time || !period) return 0;
  const [h, m] = time.split(':').map(Number);
  let hours = h;
  if (period === 'PM' && h !== 12) hours += 12;
  if (period === 'AM' && h === 12) hours = 0;
  return hours * 60 + m;
};

  // Fetch current date from backend (keeps backend and frontend in sync)
  useEffect(() => {
    const fetchCurrentDate = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/booking/current-date`);
        const data = await response.json();

        if (response.ok && data.success) {
          setDate(new Date(data.currentDate));
        } else {
          // Fallback: use client time if backend date endpoint fails
          setDate(new Date());
        }
      } catch (error) {
        console.error('Error fetching current date:', error);
        // Fallback: use client time on error
        setDate(new Date());
      } finally {
        setLoadingDate(false);
      }
    };

    fetchCurrentDate();
  }, []);

  // Whenever the selected date changes, fetch available time slots
  useEffect(() => {
    if (date && !loadingDate) {
      fetchAvailableSlots(date);
    }
  }, [date, loadingDate]);

  const fetchAvailableSlots = async (selectedDate: Date) => {
    setLoadingSlots(true);
    setSelectedTime(''); // Clear any previously selected time
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const dateStr = selectedDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const response = await fetch(`${apiUrl}/api/booking/available-slots?date=${dateStr}`);
      const data = await response.json();

      if (response.ok && data.success) {
        console.log('Available slots response:', data);
        // If availableSlots is an empty array, all time slots are booked.
        // If availableSlots is null or undefined, fall back to all default slots.
        setAvailableSlots(data.availableSlots !== undefined ? data.availableSlots : allTimeSlots);
      } else {
        console.error('Failed to fetch available slots:', data);
        // Fallback: if fetching fails, assume all default time slots are available
        setAvailableSlots(allTimeSlots);
      }
    } catch (error) {
      console.error('Error fetching available slots:', error);
      // Fallback: on error, assume all default time slots are available
      setAvailableSlots(allTimeSlots);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !name || !email) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // API base URL comes from environment; defaults to local backend in development
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          date: date.toISOString(),
          time: selectedTime,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`Meeting booking request submitted!\n\nName: ${name}\nEmail: ${email}\nDate: ${date.toLocaleDateString()}\nTime: ${selectedTime}\n\nYou will receive a confirmation email shortly.`);
        if (date) {
          fetchAvailableSlots(date);
        }
        
        const currentDate = date || new Date();
        setDate(currentDate);
        setSelectedTime('');
        setName('');
        setEmail('');
      } else {
        alert(`Failed to submit booking: ${data.error || 'Please try again.'}`);
        console.error('Booking failed:', data);
      }
    } catch (error) {
      alert('Network error. Please check if the server is running and try again.');
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-background">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="h-5 w-5 text-white" />
        <h4 className="text-white">Select Date & Time</h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label className="mb-2 block text-white">Select Date</Label>
          {loadingDate ? (
            <div className="flex items-center justify-center p-8 border rounded-md">
              <span className="text-sm text-muted-foreground">Loading current date...</span>
            </div>
          ) : (
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const compareDate = new Date(date);
                compareDate.setHours(0, 0, 0, 0);
                return compareDate < today;
              }}
              className="rounded-md border"
            />
          )}
        </div>

        <div>
          <Label className="mb-2 block text-white">
            Available Time Slots
            {loadingSlots && <span className="ml-2 text-sm text-gray-400">(Loading...)</span>}
          </Label>
          {date && (
            <p className="mb-2 text-xs text-gray-400">
              Times in your local timezone. Past times for today are disabled.
            </p>
          )}
          <div className="grid grid-cols-2 gap-2">
            {allTimeSlots.map((time) => {
              const isAvailable = availableSlots.includes(time);
              const isSelected = selectedTime === time;
              const isToday = (() => {
                if (!date) return false;
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selected = new Date(date);
                selected.setHours(0, 0, 0, 0);
                return selected.getTime() === today.getTime();
              })();
              const nowMinutes = (() => {
                const now = new Date();
                return now.getHours() * 60 + now.getMinutes();
              })();
              const slotMinutes = toMinutes(time);
              const isPastToday = isToday && slotMinutes <= nowMinutes;
              
              return (
                <Button
                  key={time}
                  type="button"
                  variant={isSelected ? 'default' : 'outline'}
                  onClick={() => isAvailable && !isPastToday && setSelectedTime(time)}
                  disabled={!isAvailable || loadingSlots || isPastToday}
                  className={`justify-start ${(!isAvailable || isPastToday) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  title={
                    !isAvailable
                      ? 'This time slot is already booked'
                      : isPastToday
                        ? 'This time slot has passed'
                        : ''
                  }
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {time}
                  {!isAvailable && <span className="ml-2 text-xs">(Booked)</span>}
                  {isPastToday && <span className="ml-2 text-xs">(Past)</span>}
                </Button>
              );
            })}
          </div>
          {availableSlots.length === 0 && !loadingSlots && (
            <p className="mt-2 text-sm text-gray-400">No available time slots for this date. All slots are booked.</p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="booking-name" className="text-white">Your Name</Label>
            <Input
              id="booking-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="text-white"
            />
          </div>

          <div>
            <Label htmlFor="booking-email" className="text-white">Email Address</Label>
            <Input
              id="booking-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              required
              className="text-white"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={!date || !selectedTime || !name || !email}
        >
          Confirm Booking
        </Button>
      </form>

      <p className="mt-4 text-xs text-white text-center">
        Note: This is a demonstration interface. In production, this would integrate with a calendar service.
      </p>
    </div>
  );
}
