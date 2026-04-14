// Scene images — Gaza
import gaza1 from "@/assets/demos/gaza-1.jpg";
import gaza2 from "@/assets/demos/gaza-2.jpg";
// Scene images — Ukraine
import ukraine1 from "@/assets/demos/ukraine-1.jpg";
import ukraine2 from "@/assets/demos/ukraine-2.jpg";
// Scene images — AI
import ai1 from "@/assets/demos/ai-1.jpg";
import ai2 from "@/assets/demos/ai-2.jpg";
// Scene images — COP30
import cop1 from "@/assets/demos/cop30-1.jpg";
import cop2 from "@/assets/demos/cop30-2.jpg";

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
  image: string;
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

/* ─── Gaza Ceasefire 2025 ─── */
const GAZA: DemoResult = {
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
    { id: 1, timestamp: "0:00 – 0:03", caption: "Breaking: Ceasefire deal reached after months of negotiations in Doha.", image: gaza1 },
    { id: 2, timestamp: "0:03 – 0:06", caption: "Hamas agrees to release hostages in phased exchange over 60 days.", image: gaza1 },
    { id: 3, timestamp: "0:06 – 0:09", caption: "Humanitarian convoys begin entering Gaza within 48 hours of the deal.", image: gaza2 },
    { id: 4, timestamp: "0:09 – 0:12", caption: "World leaders react — hope for lasting peace, but challenges remain.", image: gaza2 },
  ],
};

/* ─── Ukraine Peace Negotiations 2025 ─── */
const UKRAINE: DemoResult = {
  topic: "Ukraine Peace Negotiations 2025",
  summary:
    "In April 2025, Ukraine and its European allies presented counterproposals to the US-led peace framework during talks in London. The negotiations aimed to establish a durable ceasefire and a roadmap for territorial sovereignty. While the EU backed Ukraine's position, Russia signaled reluctance, with Kremlin spokesperson Peskov calling the talks 'paused.' The US pushed for a pragmatic settlement, but deep divisions over Crimea and eastern territories remained unresolved.",
  faithfulnessScore: 88,
  highlights: [
    "London talks between Ukraine, EU, and the US",
    "Counterproposals to the US-led peace framework",
    "Russia declares negotiations paused",
    "Unresolved disputes over Crimea and Donbas",
  ],
  entities: [
    { id: "ukraine", label: "Ukraine", type: "place" },
    { id: "russia", label: "Russia", type: "place" },
    { id: "eu", label: "European Union", type: "organization" },
    { id: "us", label: "United States", type: "place" },
    { id: "london", label: "London Talks", type: "event" },
    { id: "crimea", label: "Crimea", type: "place" },
    { id: "donbas", label: "Donbas", type: "place" },
    { id: "nato", label: "NATO", type: "organization" },
  ],
  relationships: [
    { source: "ukraine", target: "london", label: "participated" },
    { source: "eu", target: "london", label: "co-hosted" },
    { source: "us", target: "london", label: "proposed framework" },
    { source: "russia", target: "london", label: "paused" },
    { source: "london", target: "crimea", label: "disputed" },
    { source: "london", target: "donbas", label: "disputed" },
    { source: "nato", target: "ukraine", label: "supports" },
    { source: "eu", target: "ukraine", label: "backs" },
  ],
  scenes: [
    { id: 1, timestamp: "0:00 – 0:03", caption: "European and Ukrainian leaders gather in London for crucial peace talks.", image: ukraine1 },
    { id: 2, timestamp: "0:03 – 0:06", caption: "Ukraine presents counterproposal insisting on full territorial sovereignty.", image: ukraine1 },
    { id: 3, timestamp: "0:06 – 0:09", caption: "Fighting continues on the front lines as diplomats negotiate.", image: ukraine2 },
    { id: 4, timestamp: "0:09 – 0:12", caption: "Kremlin announces talks are paused — path to peace remains uncertain.", image: ukraine2 },
  ],
};

/* ─── GPT-5 Launch 2025 ─── */
const GPT5: DemoResult = {
  topic: "GPT-5 Launch & AI Race 2025",
  summary:
    "OpenAI launched GPT-5 in August 2025, calling it the most advanced AI model to date. The model demonstrated significant improvements in reasoning, coding, and multimodal understanding. Made available to all ChatGPT users including free-tier, the release intensified competition with Google DeepMind and Anthropic. Enterprise adoption surged, particularly in healthcare and finance, though regulators worldwide raised concerns about AI safety and job displacement.",
  faithfulnessScore: 95,
  highlights: [
    "GPT-5 launched August 2025 for all users",
    "Major improvements in reasoning and coding",
    "Fierce competition with Google and Anthropic",
    "Regulatory concerns over AI safety",
  ],
  entities: [
    { id: "openai", label: "OpenAI", type: "organization" },
    { id: "gpt5", label: "GPT-5", type: "event" },
    { id: "google", label: "Google DeepMind", type: "organization" },
    { id: "anthropic", label: "Anthropic", type: "organization" },
    { id: "chatgpt", label: "ChatGPT", type: "event" },
    { id: "healthcare", label: "Healthcare", type: "event" },
    { id: "regulators", label: "AI Regulators", type: "organization" },
    { id: "enterprise", label: "Enterprise Adoption", type: "event" },
  ],
  relationships: [
    { source: "openai", target: "gpt5", label: "launched" },
    { source: "gpt5", target: "chatgpt", label: "powers" },
    { source: "google", target: "openai", label: "competes with" },
    { source: "anthropic", target: "openai", label: "competes with" },
    { source: "gpt5", target: "healthcare", label: "applied in" },
    { source: "gpt5", target: "enterprise", label: "drove" },
    { source: "regulators", target: "gpt5", label: "scrutinizes" },
    { source: "openai", target: "enterprise", label: "targets" },
  ],
  scenes: [
    { id: 1, timestamp: "0:00 – 0:03", caption: "OpenAI unveils GPT-5 — its most capable model yet.", image: ai1 },
    { id: 2, timestamp: "0:03 – 0:06", caption: "Free-tier users gain access, democratizing cutting-edge AI.", image: ai1 },
    { id: 3, timestamp: "0:06 – 0:09", caption: "Enterprises race to adopt GPT-5 in healthcare, finance, and law.", image: ai2 },
    { id: 4, timestamp: "0:09 – 0:12", caption: "Regulators push for guardrails as the AI race heats up.", image: ai2 },
  ],
};

/* ─── COP30 Climate Summit 2025 ─── */
const COP30: DemoResult = {
  topic: "COP30 Climate Summit — Belém 2025",
  summary:
    "The 30th UN Climate Conference convened in Belém, Brazil in November 2025. Countries negotiated new nationally determined contributions under the Paris Agreement, but failed to reach consensus on phasing out fossil fuels or halting deforestation. Small island nations expressed frustration, warning that rising sea levels threaten their existence. The summit produced a final agreement on climate finance, pledging $300 billion annually to developing nations, though critics called it insufficient.",
  faithfulnessScore: 90,
  highlights: [
    "COP30 held in Belém, Brazil — November 2025",
    "No consensus on fossil fuel phase-out",
    "$300B annual climate finance pledge",
    "Small island nations warn of existential threat",
  ],
  entities: [
    { id: "cop30", label: "COP30 Summit", type: "event" },
    { id: "brazil", label: "Brazil", type: "place" },
    { id: "un", label: "United Nations", type: "organization" },
    { id: "paris", label: "Paris Agreement", type: "event" },
    { id: "sids", label: "Small Island Nations", type: "organization" },
    { id: "fossil", label: "Fossil Fuel Debate", type: "event" },
    { id: "finance", label: "Climate Finance", type: "event" },
    { id: "amazon", label: "Amazon Rainforest", type: "place" },
  ],
  relationships: [
    { source: "un", target: "cop30", label: "organized" },
    { source: "brazil", target: "cop30", label: "hosted" },
    { source: "cop30", target: "paris", label: "extends" },
    { source: "cop30", target: "fossil", label: "debated" },
    { source: "cop30", target: "finance", label: "pledged" },
    { source: "sids", target: "cop30", label: "urged action" },
    { source: "amazon", target: "cop30", label: "highlighted at" },
    { source: "finance", target: "sids", label: "supports" },
  ],
  scenes: [
    { id: 1, timestamp: "0:00 – 0:03", caption: "World leaders convene in Belém for the landmark COP30 climate summit.", image: cop1 },
    { id: 2, timestamp: "0:03 – 0:06", caption: "Debates intensify over fossil fuel phase-out commitments.", image: cop1 },
    { id: 3, timestamp: "0:06 – 0:09", caption: "Amazon deforestation takes center stage in host nation Brazil.", image: cop2 },
    { id: 4, timestamp: "0:09 – 0:12", caption: "$300B climate finance deal reached — critics say it's not enough.", image: cop2 },
  ],
};

export const DEMO_RESULTS: DemoResult[] = [GAZA, UKRAINE, GPT5, COP30];

export const DEMO_RESULT = GAZA;
