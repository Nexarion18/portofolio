import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function Contact() {
  const links = [
    {
      title: "Email",
      icon: (
        <  IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:fendipermadi016@gmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Nexarion18",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.com/users/1074682678839869526",
    },
        {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/fendi-permadi-4ab6b8285",
    },

  ];
  return (
    <div className="flex items-center justify-center lg:justify-start h-[5rem] w-full">
      <FloatingDock
        mobileClassName=""
        items={links} />
    </div>
  );
}
export default Contact;