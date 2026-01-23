import { useState } from 'react';

// Use lucide-react for icons, as per React guidelines, but since the original code uses complex SVGs, 
// I will keep the SVG logic and just rename the file to .jsx for better compatibility, 
// assuming the SVGs represent the required icons.

interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
}

const PracticePage = () => {
  const [darkMode] = useState(false);

  const practiceCards: PracticeCard[] = [
    {
      title: 'Learn C',
      description: 'Master C from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise. Learn clean coding practices,',
      problems: 222,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'c'
    },
    {
      title: 'Learn C++',
      description: 'Master C++ from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 192,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'cplusplus'
    },
    {
      title: 'Learn Java',
      description: 'Master Java from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 181,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/launchingsoon',
      icon: 'java'
    },
    {
      title: 'Learn Python',
      description: 'Master Python from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 192,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'python'
    },
    {
      title: 'Learn C#',
      description: 'Master C# from Basics to Advanced — a comprehensive learning path covering .NET framework, object-oriented programming, and modern C# features for enterprise development.',
      problems: 175,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/launchingsoon',
      icon: 'csharp'
    },
    {
      title: 'Learn Go',
      description: 'Master Go (Golang) from Basics to Advanced — learn concurrent programming, efficient memory management, and build high-performance applications with Go.',
      problems: 158,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'go'
    },
    {
      title: 'Learn Swift',
      description: 'Master Swift from Basics to Advanced — become proficient in iOS/macOS development with modern Swift syntax, UIKit, SwiftUI, and Apple ecosystem integration.',
      problems: 145,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'swift'
    },
    {
      title: 'Learn Kotlin',
      description: 'Master Kotlin from Basics to Advanced — learn Android development, coroutines, and modern app development with Google\'s preferred language for Android.',
      problems: 168,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'kotlin'
    },
    {
      title: 'Learn Ruby',
      description: 'Master Ruby from Basics to Advanced — learn Ruby on Rails, metaprogramming, and build web applications with this elegant and developer-friendly language.',
      problems: 142,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'ruby'
    },
    {
      title: 'Learn Rust',
      description: 'Master Rust from Basics to Advanced — learn memory safety, zero-cost abstractions, and systems programming with Rust\'s powerful ownership model.',
      problems: 135,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'rust'
    },
    {
      title: 'Learn Dart',
      description: 'Master Dart from Basics to Advanced — learn Flutter framework, cross-platform app development, and build beautiful native apps for multiple platforms.',
      problems: 128,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'dart'
    },
    {
      title: 'Learn TypeScript',
      description: 'Master TypeScript from Basics to Advanced — learn type safety, modern JavaScript features, and build scalable applications with TypeScript.',
      problems: 165,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/launchingsoon',
      icon: 'typescript'
    },
    {
      title: 'Learn JavaScript',
      description: 'Master JavaScript from Basics to Advanced — learn modern ES6+ features, DOM manipulation, async programming, and full-stack web development.',
      problems: 169,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/launchingsoon',
      icon: 'javascript'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'c':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
          </svg>
        );
      case 'cplusplus':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"/>
          </svg>
        );
      case 'java':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
            <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
            <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s.753 1.651-3.308 3.391c-15.025 6.467-64.844 3.64-48.238-2.958 11.226-4.473 10.755-4.981 10.755-4.981zm40.098 18.259c23.455-12.346 12.591-24.966 5.032-23.355-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 24.64-.001-.001.468-.462.468-.462z"/>
            <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
            <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874.001 0 2.875 2.381 17.647 3.331z"/>
          </svg>
        );
      case 'python':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#306998" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 93.6)"/>
            <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.525-6.998 15.34-15.426 15.34H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
            <path fill="#306998" d="M93.604 62.262c-6.599-2.527-12.346-5.51-12.346-12.837V29.649h12.346V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008-4.22-.02-8.251.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V45.14c0 5.791-3.521 9.639-12.346 12.386z"/>
          </svg>
        );
      case 'csharp':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"/>
          </svg>
        );
      case 'go':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#00ACD7" d="M26.4 116.7c-7.2 0-13.1-5.9-13.1-13.1V24.4c0-7.2 5.9-13.1 13.1-13.1h75.2c7.2 0 13.1 5.9 13.1 13.1v79.2c0 7.2-5.9 13.1-13.1 13.1H26.4z"/>
            <path fill="#fff" d="M26.4 116.7c-7.2 0-13.1-5.9-13.1-13.1V24.4c0-7.2 5.9-13.1 13.1-13.1h75.2c7.2 0 13.1 5.9 13.1 13.1v79.2c0 7.2-5.9 13.1-13.1 13.1H26.4z"/>
            <path fill="#00ACD7" d="M64 103.6c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.6 64 24.6s39.5 17.7 39.5 39.5S85.8 103.6 64 103.6z"/>
            <path fill="#fff" d="M64 97.1c-18.2 0-33-14.8-33-33s14.8-33 33-33 33 14.8 33 33-14.8 33-33 33z"/>
            <path fill="#00ACD7" d="M64 90.6c-14.6 0-26.5-11.9-26.5-26.5S49.4 37.6 64 37.6s26.5 11.9 26.5 26.5S78.6 90.6 64 90.6z"/>
            <path fill="#fff" d="M76.1 64c0 6.7-5.4 12.1-12.1 12.1s-12.1-5.4-12.1-12.1 5.4-12.1 12.1-12.1 12.1 5.4 12.1 12.1z"/>
          </svg>
        );
      case 'swift':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F05138" d="M126.33 34.06a39.17 39.17 0 01-9.42 2.75c4.25-2.83 7.59-7.25 9.15-12.5a39.07 39.07 0 01-12.42 4.75c-3.66-4-8.92-6.5-14.75-6.5-11.17 0-20.25 9.08-20.25 20.25 0 1.59.17 3.15.5 4.64-16.83-.84-31.75-8.92-41.75-21.17a20.25 20.25 0 00-2.75 10.17c0 7 3.58 13.25 9 16.92a20.1 20.1 0 01-9.17-2.58v.25c0 9.83 7 18.08 16.25 19.92-1.67.5-3.42.75-5.25.75-1.25 0-2.5-.17-3.75-.42 2.5 7.83 9.67 13.5 18.17 13.67-6.67 5.25-15.08 8.42-24.25 8.42-1.58 0-3.17-.08-4.75-.25 8.92 5.75 19.5 9.08 30.83 9.08 37 0 57.17-30.67 57.17-57.17 0-.88 0-1.75-.08-2.62 3.92-2.83 7.33-6.42 10-10.5z"/>
          </svg>
        );
      case 'kotlin':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#7F52FF" d="M0 0h128v128H0z"/>
            <path fill="#fff" d="M23.9 64L64 23.9 104.1 64 64 104.1z"/>
            <path fill="#fff" d="M23.9 23.9L64 64 104.1 23.9z"/>
            <path fill="#fff" d="M64 104.1L23.9 64 64 23.9z"/>
          </svg>
        );
      case 'ruby':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#CC342D" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#CC342D" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
          </svg>
        );
      case 'rust':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#000" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#000" d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"/>
          </svg>
        );
      case 'dart':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#01579B" d="M86.6 25.6l-8.3-8.3-52.4 52.4 8.3 8.3z"/>
            <path fill="#40C4FF" d="M117.1 54.3L86.6 25.6 45.8 66.4l30.5 28.7z"/>
            <path fill="#29B6F6" d="M117.1 54.3L86.6 25.6 45.8 66.4l30.5 28.7z"/>
            <path fill="#01579B" d="M76.3 95.1L45.8 66.4l40.8-40.8 30.5 28.7z"/>
          </svg>
        );
      case 'typescript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#007ACC" d="M2 63.91v62.5h125V1.41H2zm100.73-5.24c3.18 0 5.95.47 8.36 1.42 2.41.95 4.44 2.36 6.09 4.26 1.65 1.9 2.89 4.26 3.72 7.1.83 2.84 1.24 6.26 1.24 10.27 0 4.02-.45 7.53-1.36 10.53-.91 3-2.27 5.56-4.09 7.69-1.82 2.13-4.09 3.79-6.82 4.98-2.73 1.19-5.91 1.78-9.55 1.78-2.61 0-5-.31-7.17-.93-2.17-.62-4.06-1.54-5.67-2.75-1.61-1.21-2.89-2.69-3.84-4.44-.95-1.75-1.43-3.74-1.43-5.97h12.86c0 2.13.71 3.8 2.14 5 1.43 1.2 3.31 1.8 5.64 1.8 2.37 0 4.24-.57 5.62-1.71 1.38-1.14 2.07-2.7 2.07-4.67 0-1.91-.63-3.38-1.9-4.42-1.26-1.04-3.17-1.56-5.73-1.56h-3.34v-10.98h3.34c2.44 0 4.38-.52 5.82-1.56 1.44-1.04 2.16-2.55 2.16-4.53 0-1.87-.64-3.31-1.91-4.33-1.27-1.02-3.1-1.53-5.5-1.53-2.31 0-4.13.52-5.45 1.56-1.32 1.04-1.98 2.48-1.98 4.33H74.4c0-2.13.68-4.06 2.05-5.78 1.37-1.72 3.27-3.06 5.71-4.02 2.44-.96 5.27-1.44 8.5-1.44zM89.53 95.18H76.65V34.91h12.88z"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
          </svg>
        );
      default:
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#666" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
          </svg>
        );
    }
  };

  const PracticeCard = ({ card }: { card: PracticeCard }) => (
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg flex flex-col justify-between h-full ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>

      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex-shrink-0">
          {getIcon(card.icon)}
        </div>
        <h3 className={`text-lg font-semibold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {card.title}
        </h3>
      </div>

      {/* Description */}
      <p className={`text-sm mb-4 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {card.description}
      </p>
      
      {/* Problems and Level */}
      <div className="flex items-center justify-center mb-4">    
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          card.level === 'Beginner to Advanced' 
            ? 'bg-green-100 text-green-800' 
            : card.level === 'Beginner to Advanced'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
        } ${darkMode ? 'opacity-90' : ''}`}>
          {card.level} level
        </div>
      </div>
      
      {/* Start Learning Link - Changed from <button> to <a> */}
      <a 
        href={card.url}
        className={`w-full py-2 rounded-md text-sm font-medium transition-colors duration-150 text-center block ${ // Added text-center and block for button look
          darkMode
            ? 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
            : 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
        }`}
      >
        Start Learning
      </a>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Programming Languages</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Practice and master various programming languages
            </p>
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceCards.map((card) => (
            <PracticeCard key={card.url} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
