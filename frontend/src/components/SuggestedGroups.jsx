import { Users, Plus } from "lucide-react";
import { motion } from "framer-motion";

const suggestedGroups = [
  {
    id: "1",
    name: "Photography Club",
    members: 1248,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=150&h=150&fit=crop&crop=faces",
    category: "Hobby"
  },
  {
    id: "2", 
    name: "Tech Innovators",
    members: 892,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&h=150&fit=crop&crop=faces",
    category: "Technology"
  },
  {
    id: "3",
    name: "Book Club",
    members: 654,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    category: "Literature"
  },
  {
    id: "4",
    name: "Fitness Enthusiasts",
    members: 1567,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=faces",
    category: "Health"
  }
];

const SuggestedGroups = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-foreground mb-4">Suggested Groups</h3>
      
      <div className="space-y-3">
        {suggestedGroups.map((group, index) => (
          <motion.div
            key={group.id}
            className="suggested-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={group.image} 
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground truncate">
                  {group.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{group.members.toLocaleString()} members</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {group.category}
                </span>
              </div>
              
              <motion.button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="h-4 w-4 text-muted-foreground" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        See All Groups
      </motion.button>
    </div>
  );
};

export default SuggestedGroups;
