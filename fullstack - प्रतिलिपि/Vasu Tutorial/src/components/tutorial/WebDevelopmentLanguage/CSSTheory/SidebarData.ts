import { BookOpen } from "lucide-react";

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  title: string;
  component: string;
  icon?: unknown;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [
  { title: "CSS Home", component: "css-home" },
  { title: "CSS Introduction", component: "intro" },
  { title: "CSS Syntax", component: "syntax" },
  { title: "CSS Selectors", component: "selectors" },
  { title: "CSS How To", component: "howto" },
  { title: "CSS Comments", component: "comments" },
  { title: "CSS Colors", component: "colors" },
  { title: "CSS Backgrounds", component: "backgrounds" },
  { title: "CSS Borders", component: "borders" },
  { title: "CSS Margins", component: "margins" },
  { title: "CSS Padding", component: "padding" },
  { title: "CSS Box Model", component: "box-model" },
  { title: "CSS Text", component: "text" },
  { title: "CSS Fonts", component: "fonts" },
  { title: "CSS Links", component: "links" },
  { title: "CSS Display", component: "display" },
  { title: "CSS Position", component: "position" },
  {
    title: "CSS Layout",
    component: "layout",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Flexbox", component: "flexbox" },
      { title: "CSS Grid", component: "grid" },
      { title: "Float", component: "float" }
    ]
  },
  {
    title: "CSS Advanced",
    component: "advanced",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Transitions", component: "transitions" },
      { title: "Animations", component: "animations" },
      { title: "Media Queries", component: "media-queries" }
    ]
  }
];
