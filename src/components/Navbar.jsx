import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Users,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Droplet,
  Book,
  HeartPulse,
  ChevronDown,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  Tn: { nativeName: "Tamil" },
  Hn: { nativeName: "Hindi" },
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  let lastScrollY = 0;
  const companyItems = [
    {
      title: t("navbar.about"),
      description: "Who is Ben?",
      icon: Users,
      href: "/about",
    },
    {
      title: "Brandbook",
      description: "Learn more about Ben's brand",
      icon: BookOpen,
      href: "/brand",
    },
    {
      title: "Careers",
      description:
        "Find out what it's like to work at Ben & view our open roles",
      icon: GraduationCap,
      href: "/careers",
      badge: "We're hiring!",
    },
    {
      title: "Contact",
      description:
        "Reach out if you need help, are interested in partnership, or just have a general enquiry",
      icon: MessageSquare,
      href: "/contact",
    },
  ];
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide on scroll down
    } else {
      setIsVisible(true); // Show on scroll up
    }

    // Update scroll state for glass effect
    setIsScrolled(window.scrollY > 0);

    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform rounded-b-xl duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-md py-0"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex h-16 items-center px-4 md:px-6 ">
        <Link to="/" className="mr-6 flex">
          <img
            src="Img/logo.png"
            alt="Ben Logo"
            className="h-32 w-32 object-contain"
          />
        </Link>
        <div className="flex flex-grow justify-center">
          <NavigationMenu className="hidden md:flex relative">
            <NavigationMenuList className="flex space-x-8 text-[17px] font-semibold">
              <NavigationMenuItem>
                <Link to="/PeriodTracker">
                  <NavigationMenuLink className="bg-transparent text-white hover:text-white">
                    {t("navbar.home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-white hover:bg-transparent text-[17px]">
                  For Girls & Parents
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link
                        to="/first-period"
                        className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md"
                      >
                        <Droplet className="h-6 w-6 text-pink-600" />
                        <div>
                          <span className="font-medium">My First Period</span>
                          <p className="text-sm text-muted-foreground">
                            Understand what to expect during your first period.
                          </p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/period-guide"
                        className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md"
                      >
                        <Book className="h-6 w-6 text-blue-500" />
                        <div>
                          <span className="font-medium">Period Guide</span>
                          <p className="text-sm text-muted-foreground">
                            A complete guide to menstrual health and care.
                          </p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/puberty"
                        className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md"
                      >
                        <HeartPulse className="h-6 w-6 text-purple-500" />
                        <div>
                          <span className="font-medium">Puberty</span>
                          <p className="text-sm text-muted-foreground">
                            Learn about the changes your body goes through.
                          </p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/parent-tips"
                        className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md"
                      >
                        <Users className="h-6 w-6 text-green-500" />
                        <div>
                          <span className="font-medium">Tips for Parents</span>
                          <p className="text-sm text-muted-foreground">
                            Helpful tips for parents to support their children.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/how-it-works">
                  <NavigationMenuLink className="bg-transparent text-white hover:text-white">
                    Keep Girls in School
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-white hover:bg-transparent text-[17px]">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4">
                    {companyItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        badge={item.badge}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.description}</span>
                        </div>
                      </ListItem>
                    ))}
                    <li className="mt-4 border-t pt-4">
                      <Link
                        to="/careers"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Looking for a new career? Get in touch
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/PeriodTracker">
                  <NavigationMenuLink className="bg-transparent text-white hover:text-white">
                    Period Calculator
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-white hover:bg-gray-100"
              >
                <span>{i18n.resolvedLanguage.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-44 p-2">
              {Object.keys(lngs).map((lng) => (
                <Button
                  key={lng}
                  variant="ghost"
                  className={`w-full justify-start ${
                    i18n.resolvedLanguage === lng ? "font-bold" : ""
                  }`}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
          <Button className="bg-[#7D328D] text-white hover:bg-[#7D328D]/90">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

// List Item Component
const ListItem = React.forwardRef(
  ({ className, title, children, badge, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium leading-none">
                  {title}
                </span>
                {badge && (
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-600">
                    {badge}
                  </span>
                )}
              </div>
              <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </span>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default Navbar;
