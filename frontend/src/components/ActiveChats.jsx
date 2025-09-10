import { MessageCircle, Circle } from "lucide-react";
import { motion } from "framer-motion";

const activeChats = [
  {
    id: "1",
    name: "Sarah Johnson",
    lastMessage: "Hey! Are you coming to the photography meetup?",
    timestamp: "2m",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=faces",
    isOnline: true,
    unreadCount: 2
  },
  {
    id: "2",
    name: "Tech Group",
    lastMessage: "Mike: The new React workshop looks interesting",
    timestamp: "15m",
    avatar: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&h=150&fit=crop&crop=faces",
    isOnline: false,
    unreadCount: 5
  },
  {
    id: "3",
    name: "Emma Davis",
    lastMessage: "Thanks for sharing those notes!",
    timestamp: "1h",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    isOnline: true
  },
  {
    id: "4",
    name: "Study Group",
    lastMessage: "Alex: Meeting at 3 PM tomorrow",
    timestamp: "2h",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    isOnline: false,
    unreadCount: 1
  }
];

const ActiveChats = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="h-5 w-5 text-muted-foreground" />
        <h3 className="text-lg font-semibold text-foreground">Active Chats</h3>
      </div>
      
      <div className="space-y-2">
        {activeChats.map((chat, index) => (
          <motion.div
            key={chat.id}
            className="chat-preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={chat.avatar} 
                  alt={chat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {chat.isOnline && (
                <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm text-foreground truncate">
                  {chat.name}
                </h4>
                <span className="text-xs text-muted-foreground">
                  {chat.timestamp}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
            
            {chat.unreadCount && (
              <div className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {chat.unreadCount}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.button
        className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        View All Chats
      </motion.button>
    </div>
  );
};

export default ActiveChats;
