import p1 from "@/assets/projects/proj-1.jpg.asset.json";
import p2 from "@/assets/projects/proj-2.jpg.asset.json";
import p3 from "@/assets/projects/proj-3.jpg.asset.json";
import p4 from "@/assets/projects/proj-4.jpg.asset.json";
import p5 from "@/assets/projects/proj-5.jpg.asset.json";
import p6 from "@/assets/projects/proj-6.jpg.asset.json";
import p7 from "@/assets/projects/proj-7.jpg.asset.json";
import p8 from "@/assets/projects/proj-8.jpg.asset.json";
import p9 from "@/assets/projects/proj-9.jpg.asset.json";
import p10 from "@/assets/projects/proj-10.jpg.asset.json";
import p11 from "@/assets/projects/proj-11.jpg.asset.json";
import p12 from "@/assets/projects/proj-12.jpg.asset.json";
import p13 from "@/assets/projects/proj-13.jpg.asset.json";

const imgs = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p1];

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

export const projects: Project[] = raw.map((p, i) => ({ ...p, image: imgs[i].url }));
