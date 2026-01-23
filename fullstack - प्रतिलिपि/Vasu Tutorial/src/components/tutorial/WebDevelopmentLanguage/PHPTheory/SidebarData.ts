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
  
    
      { title: "PHP Home", component: "php-home" },
      { title: "PHP Intro", component: "intro" },
      { title: "PHP Install", component: "install" },
      { title: "PHP Syntax", component: "syntax" },

      { title: "PHP Comments", component: "comments" },
      { title: "PHP Variables", component: "variables" },
      { title: "PHP Echo / Print", component: "echo-print" },

      { title: "PHP Data Types", component: "php-data-types" },
      { title: "PHP Strings", component: "php-strings" },
      { title: "PHP Numbers", component: "php-numbers" },
      { title: "PHP Casting", component: "php-casting" },
      { title: "PHP Math", component: "php-math" },
      { title: "PHP Constants", component: "php-constants" },
      { title: "PHP Magic Constants", component: "php-magic-constants" },

      { title: "PHP Operators", component: "php-operators" },
      { title: "PHP If-Else-ElseIf", component: "php-if-else" },
      { title: "PHP Switch", component: "php-switch" },
      { title: "PHP Loops", component: "php-loops" },
      { title: "PHP Functions", component: "php-functions" },
      { title: "PHP Arrays", component: "php-arrays" },
      { title: "PHP Superglobals", component: "php-superglobals" },
      { title: "PHP RegEx", component: "php-regex" },
    
  

  {
    title: "PHP Forms",
    component: "php-forms",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Form Handling", component: "php-form-handling" },
      { title: "Form Validation", component: "php-form-validation" },
      { title: "Form Required", component: "php-form-required" },
      { title: "Form URL/Email", component: "php-form-url-email" },
      { title: "Form Complete", component: "php-form-complete" }
    ]
  },

  {
    title: "PHP OOP",
    component: "php-oop",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is OOP", component: "php-oop-intro" },
      { title: "Classes / Objects", component: "php-classes-objects" },
      { title: "Constructor", component: "php-constructor" },
      { title: "Destructor", component: "php-destructor" },
      { title: "Access Modifiers", component: "php-access-modifiers" },
      { title: "Inheritance", component: "php-inheritance" },
      { title: "Constants", component: "php-oop-constants" },
      { title: "Abstract Classes", component: "php-abstract-classes" },
      { title: "Interfaces", component: "php-interfaces" },
      { title: "Traits", component: "php-traits" },
      { title: "Static Methods", component: "php-static-methods" },
      { title: "Static Properties", component: "php-static-properties" },
      { title: "Namespaces", component: "php-namespaces" },
      { title: "Iterables", component: "php-iterables" }
    ]
  },

  {
    title: "MySQL Database",
    component: "php-mysql",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "MySQL Database", component: "mysql-database" },
      { title: "MySQL Connect", component: "mysql-connect" },
      { title: "MySQL Create DB", component: "mysql-create-db" },
      { title: "MySQL Create Table", component: "mysql-create-table" },
      { title: "MySQL Insert", component: "mysql-insert" },
      { title: "MySQL Select", component: "mysql-select" },
      { title: "MySQL Update", component: "mysql-update" },
      { title: "MySQL Delete", component: "mysql-delete" }
    ]
  },

  {
    title: "PHP Advanced",
    component: "php-advanced",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "PHP Date and Time", component: "php-date-time" },
      { title: "PHP Include", component: "php-include" },
      { title: "PHP File Handling", component: "php-file-handling" }
    ]
  }
];
