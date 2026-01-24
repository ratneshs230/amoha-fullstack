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
  { title: "HTML Home", component: "html-home" },
  { title: "HTML Introduction", component: "intro" },
  { title: "HTML Editors", component: "editors" },
  { title: "HTML Basic", component: "basic" },
  { title: "HTML Elements", component: "elements" },
  { title: "HTML Attributes", component: "attributes" },
  { title: "HTML Headings", component: "headings" },
  { title: "HTML Paragraphs", component: "paragraphs" },
  { title: "HTML Styles", component: "styles" },
  { title: "HTML Formatting", component: "formatting" },
  { title: "HTML Comments", component: "comments" },
  { title: "HTML Colors", component: "colors" },
  { title: "HTML Links", component: "links" },
  { title: "HTML Images", component: "images" },
  { title: "HTML Tables", component: "tables" },
  { title: "HTML Lists", component: "lists" },
  {
    title: "HTML Forms",
    component: "forms",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Form Elements", component: "form-elements" },
      { title: "Input Types", component: "input-types" },
      { title: "Input Attributes", component: "input-attributes" }
    ]
  },
  {
    title: "HTML5 Features",
    component: "html5",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Semantic Elements", component: "semantic" },
      { title: "HTML5 APIs", component: "html5-apis" },
      { title: "Audio & Video", component: "media" }
    ]
  }
];
