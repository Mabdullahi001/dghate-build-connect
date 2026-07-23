import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import hero from "@/assets/hero-architecture.jpg";

const imgs = [p1, p2, hero, p4, p5, p6];

export type Project = {
  location: string;
  task: string;
  stage: string;
  year?: string;
  image: string;
};

const raw: Omit<Project, "image">[] = [
  { location: "Cooperative Villa, Badore, Lagos", task: "Design & Build", stage: "Under Construction" },
  { location: "Cooperative Villa, Badore, Lagos", task: "Design & Build", stage: "Built", year: "2010" },
  { location: "Gbetu Village, behind Mayfair Garden, Lagos", task: "Design & Build", stage: "Built", year: "2016" },
  { location: "Gbetu Village, behind Mayfair Garden, Lagos", task: "Design & Build", stage: "Built", year: "2018" },
  { location: "Nigerian Army Estate, Benin, Edo State", task: "Design & Consult", stage: "Ongoing" },
  { location: "Seaside Estate, Badore, Lagos", task: "Design & Build", stage: "Built", year: "2014" },
  { location: "Awoyaya, Ibeju Lekki, Lagos", task: "Design & Build", stage: "Built", year: "2012" },
  { location: "Lekki–Epe Expressway, Lagos", task: "Consultation", stage: "Built", year: "2014" },
  { location: "LUTH Teaching Hospital, Idi-Araba, Lagos", task: "Proposed", stage: "Proposed" },
  { location: "Offa, Kwara State", task: "Design & Build", stage: "Ongoing" },
  { location: "Abijo GRA, Lagos", task: "Design & Build", stage: "Built", year: "2017" },
  { location: "Imakun Palace, Waterside, Ogun State", task: "Design & Build", stage: "Ongoing", year: "2017" },
  { location: "Park View, Ikoyi, Lagos", task: "Remodelling", stage: "Built", year: "2019" },
  { location: "Oral Estate, Ikota Lekki, Lagos", task: "Design & Build", stage: "Built", year: "2012" },
];

export const projects: Project[] = raw.map((p, i) => ({ ...p, image: imgs[i % imgs.length] }));
