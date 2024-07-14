
import { Cipher } from "crypto";
export const sidebarLinks = [
  {
    Icon: 4,
    route: '/dashboard',
    label: 'Dashboard',
  },
  {
    Icon: 1,
    route: '/dashboard/create-meeting',
    label: 'Create Meeting',
  },

  {
    Icon: 2,
    route: '/dashboard/upcoming',
    label: 'Upcoming',
  },
  {
    Icon: 3,
    route: '/dashboard/previous',
    label: 'Previous',
  },
  // {
  //   imgURL: '/Icons/Video.svg',
  //   route: '/recordings',
  //   label: 'Recordings',
  // },
  // {
  //   Icon: 4,
  //   route: '/dashboard/personal-room',
  //   label: 'Personal Room',
  // },
];

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];


export interface Plan {
  title: string;
  price: number;
  popular?: boolean;
  features: string[];
  min: number
}

export const planslist:Record<string, Plan> = {
  "free": {
    title: "Free",
    price: 0,
    min: 40,
    features: [
      "Up to 20 participants per meeting",
      "Basic meeting controls (mute, video on/off)",
      "Screen sharing",
      "Chat functionality",
      "Limited meeting duration (e.g., 40 minutes)",
      "Standard audio quality"
    ]
  },
  "starter": {
    title: "Business Starter",
    min: 60,
    price: 10,
    popular: true,
    features: [
      "Up to 50 participants per meeting",
      "Extended meeting duration (e.g., 1 hour)",
      "Enhanced meeting controls (e.g., recording)",
      "HD video quality",
      "Customizable meeting backgrounds",
      "Basic analytics and reporting"
    ]
  },
  "plus": {
    title: "Business Plus",
    price: 20,
    min: 120,
    features: [
      "Up to 100 participants per meeting",
      "Extended meeting duration (e.g., 2 hours)",
      "Advanced meeting controls (e.g., breakout rooms)",
      "Live streaming options",
      "Priority customer support",
      "Advanced analytics and reporting"
    ]
  }
};


