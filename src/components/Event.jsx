import { useEffect } from "react";
import { Calendar } from "lucide-react";

export default function EventsSection({ upcomingEvents }) {
    
  useEffect(() => {
    const handleScroll = () => {
      const eventSection = document.querySelector("#event-section");
      const position = eventSection.getBoundingClientRect().top + window.scrollY;

      if (window.scrollY + window.innerHeight >= position) {
        eventSection.classList.add("animate-slideIn");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="event-section" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-10 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-indigo-950 mb-10 text-center font-raleway animate-fadeIn">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-red-700 text-white p-4">
                <Calendar className="inline-block mr-2 transition-transform duration-500 hover:rotate-12" size={24} />
                <span className="font-semibold">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-indigo-950 font-raleway">{event.title}</h3>
                <p className="text-gray-700 font-raleway">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
