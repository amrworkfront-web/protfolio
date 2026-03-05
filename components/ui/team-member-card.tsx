import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export interface TeamMember {
  name: string;
  title: string;
  role: string;
  email: string;
  phone: string;
  description: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
}

export function TeamMemberCard({ member, delay = 0 }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex flex-col h-full p-6 sm:p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl font-bold">{member.name}</h3>
          <p className="text-primary font-medium mt-1">{member.title}</p>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {member.description}
        </p>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border space-y-3">
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
          </div>
          <span className="truncate">{member.email}</span>
        </a>
        <a
          href={`tel:${member.phone}`}
          className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
          </div>
          {member.phone}
        </a>
      </div>
    </motion.div>
  );
}
