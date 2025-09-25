import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Download, Info, Map, Sparkles } from "lucide-react";

// --- Interview dataset simplified ---
const interviews = [
  {
    id: "INT-01",
    role: "Dog owner (apartment)",
    summary: `She expressed frequent worry about her dog's separation anxiety when she leaves for work. She also mentioned difficulty finding simple tools that reassure her without being invasive.`,
    concerns: ["Separation anxiety in first 30 minutes", "Discomfort with always-on cameras"],
    wishes: ["Low-intrusion ways to monitor stress", "Updates that reassure without overwhelming"]
  },
  {
    id: "INT-02",
    role: "Cat owner (student)",
    summary: `He explained that his biggest challenges are managing time with studies and making sure his cat stays stimulated indoors. He prefers simple summaries instead of constant alerts.`,
    concerns: ["False alerts from litter box tracking", "Interruptive notifications during classes"],
    wishes: ["Digestible weekly summaries", "Suggestions for small, effective play or care routines"]
  }
];

const ontographySimple = [
  { title: "Pets", children: ["Dogs", "Cats", "Other small pets"] },
  { title: "Stakeholders", children: ["Owners", "Vets", "Shelters"] },
  { title: "Contexts", children: ["Home", "Outdoor", "Travel"] },
  { title: "Concerns", children: ["Welfare", "Safety", "Bonding"] }
];

const forkingPaths = [
  { id: "FP-01", title: "Comfort & Anxiety", branches: ["Detect signs of stress", "Introduce calming aids", "Help owners with departure routines"] },
  { id: "FP-02", title: "Safety & Mobility", branches: ["Early warnings for heat or cold", "Help finding lost pets", "Outdoor risk awareness"] },
  { id: "FP-03", title: "Care Coordination", branches: ["Health updates for vets", "Shared schedules with family or sitters", "Medication reminders"] }
];

const barriers = [
  { title: "Privacy", points: ["Owners are concerned about cameras and microphones.", "Location data may reveal personal routines."] },
  { title: "Practical Use", points: ["Devices must be safe and comfortable for pets.", "Battery life and durability matter for daily use."] },
  { title: "Adoption", points: ["Users want simple, low‑effort solutions.", "Clear value is needed to keep long‑term engagement."] }
];

const computeMap = [
  { stage: "Collecting Information", items: ["Sounds (barking, meowing)", "Movement (activity levels)", "Environment (temperature, light)"] },
  { stage: "Processing", items: ["Basic on‑device checks", "Filtering and summarizing"] },
  { stage: "Sharing", items: ["Send updates securely", "Keep data simple for owners and vets"] }
];

function OntographyFancy() {
  return (
    <div className="relative flex items-center justify-center py-16">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-300/30 via-pink-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        {ontographySimple.map((o, i) => (
          <Card key={i} className="bg-background/70 backdrop-blur-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {o.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {o.children.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-500" /> {c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ForkingPathsDiagram() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {forkingPaths.map((fp) => (
        <Card key={fp.id} className="bg-background/70 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              <Sparkles className="w-4 h-4" /> {fp.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {fp.branches.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function BarrierCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {barriers.map((b, i) => (
        <Card key={i} className="bg-background/70 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              <Info className="w-4 h-4" /> {b.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {b.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ComputeMap() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {computeMap.map((c, i) => (
        <Card key={i} className="bg-background/70 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Map className="w-4 h-4" /> {c.stage}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {c.items.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function InterviewSections() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {interviews.map((i) => (
        <Card key={i.id} className="bg-background/70 backdrop-blur-xl shadow-md hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{i.id} · {i.role}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3 opacity-90">{i.summary}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium mb-1">Concerns</div>
                <ul className="list-disc pl-5 space-y-1">
                  {i.concerns.map((c, idx) => <li key={idx}>{c}</li>)}
                </ul>
              </div>
              <div>
                <div className="font-medium mb-1">Wishes</div>
                <ul className="list-disc pl-5 space-y-1">
                  {i.wishes.map((w, idx) => <li key={idx}>{w}</li>)}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function PetResearchSite() {
  const siteData = JSON.stringify({ interviews, ontographySimple, forkingPaths, barriers, computeMap }, null, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 text-foreground">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest opacity-60">Design as Research · HCI · Cornell</div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Pet Systems
            </h1>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => {
              const blob = new Blob([siteData], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'pet_research_dataset.json';
              a.click();
              URL.revokeObjectURL(url);
            }} className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white shadow-lg hover:scale-105 transition-transform">
              <Download className="w-4 h-4 mr-2" /> Download Dataset
            </Button>
          </div>
        </header>

        <Tabs defaultValue="project-question" className="w-full">
          <TabsList className="flex flex-wrap gap-3 justify-center bg-background/60 backdrop-blur-xl p-2 rounded-xl shadow">
            <TabsTrigger value="project-question">Project Question</TabsTrigger>
            <TabsTrigger value="ontography">Ontography</TabsTrigger>
            <TabsTrigger value="forking">Forking Paths</TabsTrigger>
            <TabsTrigger value="barriers">Barriers</TabsTrigger>
            <TabsTrigger value="compute">Computational Map</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
          </TabsList>

          <TabsContent value="project-question" className="mt-8">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              What does better everyday welfare look like for pets and their owners?
            </motion.h1>
            <p className="mt-4 text-base text-center opacity-80 max-w-2xl mx-auto">
              This project explores how sensing, interpretation, and simple interventions can improve not only pets’ comfort and safety but also help owners build stronger bonds and manage daily care with less stress.
            </p>
          </TabsContent>

          <TabsContent value="ontography" className="mt-8">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6 text-center">
              Ontography: Pet Systems
            </motion.h1>
            <OntographyFancy />
          </TabsContent>

          <TabsContent value="forking" className="mt-8">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6 text-center">
              Forking Paths
            </motion.h1>
            <ForkingPathsDiagram />
          </TabsContent>

          <TabsContent value="barriers" className="mt-8">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6 text-center">
              Barriers to Entry
            </motion.h1>
            <BarrierCards />
          </TabsContent>

          <TabsContent value="compute" className="mt-8">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6 text-center">
              Computational Challenges Map
            </motion.h1>
            <ComputeMap />
          </TabsContent>

          <TabsContent value="interviews" className="mt-8">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6 text-center">
              Interviews
            </motion.h1>
            <InterviewSections />
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-xs opacity-70 text-center">
          This page is a research scaffold. Replace placeholder text with your field notes as they arrive.
        </footer>
      </div>
    </div>
  );
}
