export function CalendarBooking() {
  return (
    <div className="border rounded-lg p-6 bg-background text-white">
      {/* TEMPORARILY DISABLED: Backend calendar booking */}
      {/* TODO: Re-enable after backend is deployed and VITE_API_URL is configured. */}

      <h4 className="text-white mb-4">Schedule a Meeting</h4>
      <p className="mb-4">
        To schedule a conversation with our team, please email us and we’ll coordinate a time.
      </p>
      <a href="mailto:hedinn@affekta.com" className="text-primary underline">
        hedinn@affekta.com
      </a>
    </div>
  );
}
