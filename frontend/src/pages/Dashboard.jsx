import { motion } from "framer-motion";
import EventCard from "../components/EventCard";
import SuggestedGroups from "../components/SuggestedGroups";
import ActiveChats from "../components/ActiveChats";

const mockEvents = [
  {
    title: "Photography Workshop: Mastering Portrait Lighting",
    date: "March 25, 2024",
    time: "2:00 PM",
    location: "Art Building, Room 204",
    description: "Join us for an intensive workshop on portrait lighting techniques. Learn how to create stunning portraits using natural and artificial light sources.",
    attendees: 24,
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600&h=300&fit=crop"
  },
  {
    title: "Tech Talk: Future of Web Development",
    date: "March 28, 2024", 
    time: "6:30 PM",
    location: "Innovation Hub",
    description: "Explore the latest trends in web development including AI integration, serverless architectures, and the future of frontend frameworks.",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop"
  },
  {
    title: "Book Club: Discussing 'The Design of Everyday Things'",
    date: "March 30, 2024",
    time: "4:00 PM", 
    location: "Library Study Room 3",
    description: "Monthly book discussion focused on Don Norman's classic work on design principles and user experience.",
    attendees: 18,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
  },
  {
    title: "Fitness Challenge: Spring Marathon Training",
    date: "April 2, 2024",
    time: "7:00 AM",
    location: "Campus Track & Field",
    description: "Begin your marathon training journey with our structured 16-week program. All fitness levels welcome!",
    attendees: 73,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
  },
  {
    title: "Startup Pitch Competition Finals",
    date: "April 5, 2024",
    time: "3:00 PM",
    location: "Main Auditorium", 
    description: "Watch as student entrepreneurs present their innovative startup ideas to a panel of industry experts and investors.",
    attendees: 312
  },
  {
    title: "Cultural Night: International Food Festival",
    date: "April 8, 2024",
    time: "5:00 PM",
    location: "Student Center Plaza",
    description: "Celebrate diversity with food, music, and performances from cultures around the world. Free entry and food samples!",
    attendees: 567,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=300&fit=crop"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Discover upcoming events and connect with your community</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Upcoming Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    {...event}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SuggestedGroups />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ActiveChats />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
