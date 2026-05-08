export const BRAND = {
  name: "BSW Outlet",
  tagline: "Never Pay Retail Again",
  phone: "(901) 695-1857",
  phoneHref: "tel:+19016951857",
  locations: {
    winchester: {
      name: "BSW Outlet – Winchester",
      address: "6777 Winchester Rd, Memphis, TN 38115",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=6777+Winchester+Rd,+Memphis,+TN+38115",
    },
    summer: {
      name: "BSW Outlet – Summer Ave",
      address: "4224 Summer Ave, Memphis, TN 38122",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=4224+Summer+Ave,+Memphis,+TN+38122",
    },
  },
  social: {
    facebook: "https://www.facebook.com/people/BSW-outlet/61575132308874/",
    instagram: "https://www.instagram.com/bswoutlet/",
    tiktok: "https://www.tiktok.com/@bswoutlet",
  },
  hours: {
    monWed: "Mon – Wed: 10AM – 7PM",
    thu: "$10 Thursday: 10AM – 7PM",
    friSun: "Fri – Sun: 10AM – 7PM",
  },
} as const;

export const DAY_MAP: Record<number, string> = {
  0: "sun",
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
};

export const PRICING_SCHEDULE = [
  { key: "thu", price: "$10", label: "Thursday", img: "deal-thu.png" },
  { key: "fri", price: "$8", label: "Friday", img: "deal-fri.jpg" },
  { key: "sat", price: "$7", label: "Saturday", img: "deal-sat.jpg" },
  { key: "sun", price: "$5", label: "Sunday", img: "deal-sun.jpg" },
  { key: "mon", price: "$3", label: "Monday", img: "deal-mon.jpg" },
  { key: "tue", price: "$2", label: "Tuesday", img: "deal-tue.jpg" },
  { key: "wed", price: "$1", label: "Wednesday", img: "deal-wed.jpg" },
] as const;
