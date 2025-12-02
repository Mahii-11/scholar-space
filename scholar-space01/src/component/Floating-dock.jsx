/* eslint-disable no-unused-vars */
import { cn } from "../lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  Home,
  User,
  Video,
  Newspaper,
  History,
  Users,
  Briefcase,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  Image as ImageIcon,
  Mail,
  Phone,
  Grip,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../component/ui/drawer";

export const FloatingDock = ({ desktopClassName, mobileClassName }) => {
  const items = [
    {
      title: "Home",
      icon: (
        <Home
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      ),
    },
    {
      title: "About",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Media",
      icon: (
        <Video className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#videos",
    },
    {
      title: "News",
      icon: (
        <Newspaper className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#news",
    },
    {
      title: "History",
      icon: (
        <History className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#career",
    },
    {
      title: "Team",
      icon: (
        <Users className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#researchers",
    },
    {
      title: "Portfolio",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Innovation",
      icon: (
        <Lightbulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Education",
      icon: (
        <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#teaching",
    },
    {
      title: "Publications",
      icon: (
        <BookOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#publications",
    },
    {
      title: "Events",
      icon: (
        <Calendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resources",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resources",
    },
    {
      title: "Gallery",
      icon: (
        <ImageIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#gallery",
    },
    {
      title: "Contact",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const visibleItems = items.slice(0, 4);

  const handleScrollToSection = (href) => (e) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "relative block md:hidden w-full max-w-md mx-auto",
        className
      )}
    >
      <div className="flex justify-between items-center p-3 bg-blue-900/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
        {visibleItems.map((item) => (
          <button
            key={item.title}
            onClick={handleScrollToSection(item.href)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors flex flex-col items-center gap-1 cursor-pointer"
          >
            <div className="w-6 h-6">{item.icon}</div>
            <span className="text-[10px] font-medium opacity-80">
              {item.title}
            </span>
          </button>
        ))}

        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors flex flex-col items-center gap-1">
              <div className="w-6 h-6">
                <Grip className="w-full h-full" />
              </div>
              <span className="text-[10px] font-medium opacity-80">More</span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-neutral-900 border-neutral-800 text-white max-h-[80vh]">
            <DrawerHeader>
              <DrawerTitle className="text-center mb-4">
                All Sections
              </DrawerTitle>
            </DrawerHeader>
            <div className="grid grid-cols-4 gap-4 p-4 pb-8 overflow-y-auto">
              {items.map((item) => (
                <button
                  key={item.title}
                  onClick={handleScrollToSection(item.href)}
                  className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center p-3 text-blue-400 border border-white/5 shadow-sm">
                    <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-xs text-center font-medium text-neutral-300">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-20 gap-4 items-end rounded-full bg-blue-700/90 backdrop-blur-md px-4 pb-3 border border-white/10 shadow-2xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}

      <div className="h-10 w-px bg-white/20 mx-2 mb-2 self-center" />

      <button className="mb-2 h-10 px-6 rounded-full bg-white text-blue-700 font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors whitespace-nowrap">
        <Phone className="w-4 h-4" />
        Get in Touch
      </button>
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleScrollToSection = (e) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleScrollToSection}
      className="aspect-square rounded-full bg-white/10 flex items-center justify-center relative hover:bg-white/20 transition-colors cursor-pointer"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-1 whitespace-pre rounded-md bg-blue-600 border border-blue-500 text-white absolute left-1/2 -translate-x-1/2 -top-10 w-fit text-xs font-medium shadow-lg"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-center w-full h-full text-white p-2">
        <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full text-white">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
