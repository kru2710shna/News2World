export interface Entity {
  id: string;
  label: string;
  type: "person" | "place" | "event" | "organization";
}

export interface Relationship {
  source: string;
  target: string;
  label: string;
}

export interface SceneCard {
  id: number;
  timestamp: string;
  caption: string;
  imageLabel: string;
}

export interface DemoResult {
  topic: string;
  summary: string;
  faithfulnessScore: number;
  highlights: string[];
  entities: Entity[];
  relationships: Relationship[];
  scenes: SceneCard[];
}

export const DEMO_RESULT: DemoResult = {
  topic: "Gaza Ceasefire 2025",
  summary:
    "In January 2025, a landmark ceasefire agreement was brokered between Israel and Hamas, mediated by Qatar, Egypt, and the United States. The deal outlined a phased withdrawal of Israeli forces from Gaza, the release of hostages held by Hamas, and the entry of humanitarian aid convoys. International reactions were mixed — Western nations largely welcomed the deal while Iran expressed skepticism. The agreement marked the most significant de-escalation in the region since October 2023, though analysts cautioned that long-term peace remains uncertain without addressing underlying political grievances.",
  faithfulnessScore: 92,
  highlights: [
    "Landmark ceasefire brokered in January 2025",
    "Phased withdrawal of Israeli forces",
    "Release of hostages held by Hamas",
    "Mediated by Qatar, Egypt, and the United States",
  ],
  entities: [
    { id: "israel", label: "Israel", type: "place" },
    { id: "hamas", label: "Hamas", type: "organization" },
    { id: "qatar", label: "Qatar", type: "place" },
    { id: "egypt", label: "Egypt", type: "place" },
    { id: "usa", label: "United States", type: "place" },
    { id: "gaza", label: "Gaza", type: "place" },
    { id: "ceasefire", label: "Ceasefire Agreement", type: "event" },
    { id: "iran", label: "Iran", type: "place" },
    { id: "hostages", label: "Hostage Release", type: "event" },
    { id: "aid", label: "Humanitarian Aid", type: "event" },
  ],
  relationships: [
    { source: "qatar", target: "ceasefire", label: "mediated" },
    { source: "egypt", target: "ceasefire", label: "mediated" },
    { source: "usa", target: "ceasefire", label: "mediated" },
    { source: "israel", target: "ceasefire", label: "signed" },
    { source: "hamas", target: "ceasefire", label: "signed" },
    { source: "ceasefire", target: "gaza", label: "affects" },
    { source: "hamas", target: "hostages", label: "released" },
    { source: "ceasefire", target: "aid", label: "enabled" },
    { source: "iran", target: "ceasefire", label: "skeptical of" },
    { source: "israel", target: "gaza", label: "withdrawal from" },
  ],
  scenes: [
    {
      id: 1,
      timestamp: "0:00 – 0:03",
      caption: "Breaking: Ceasefire deal reached after months of negotiations in Doha.",
      imageLabel: "Doha skyline",
    },
    {
      id: 2,
      timestamp: "0:03 – 0:06",
      caption: "Hamas agrees to release hostages in phased exchange over 60 days.",
      imageLabel: "Press conference",
    },
    {
      id: 3,
      timestamp: "0:06 – 0:09",
      caption: "Humanitarian convoys begin entering Gaza within 48 hours of the deal.",
      imageLabel: "Aid trucks",
    },
    {
      id: 4,
      timestamp: "0:09 – 0:12",
      caption: "World leaders react — hope for lasting peace, but challenges remain.",
      imageLabel: "UN Assembly",
    },
  ],
};
