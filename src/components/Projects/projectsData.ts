const GITHUB_REPO_URL = "https://github.com/RonenGelyadov/portfolio";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Games" | "Web Apps";
  demoUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "איקס עיגול (Tic-Tac-Toe)",
    description:
      "משחק איקס עיגול קלאסי בעיצוב מודרני, נקי ויוקרתי. כולל תורות בזמן אמת וממשק מעוצב.",
    image: "images/projects/tic-tac-toe.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Games",
    demoUrl: "projects/tic-tac-toe/index.html",
    githubUrl: `${GITHUB_REPO_URL}/tree/main/public/projects/tic-tac-toe`,
  },
  {
    id: 2,
    title: "מי רוצה להיות מיליונר?",
    description:
      "משחק טריוויה אינטראקטיבי מלא בעברית המבוסס על השעשועון המפורסם, כולל שאלות מרובות ברירה ומד התקדמות.",
    image: "images/projects/millionaire.png",
    tags: ["HTML", "CSS", "JavaScript", "ES Modules"],
    category: "Games",
    demoUrl: "projects/millionaire/index.html",
    githubUrl: `${GITHUB_REPO_URL}/tree/main/public/projects/millionaire`,
  },
  {
    id: 3,
    title: "משחק הזיכרון (Memory Game)",
    description:
      "משחק התאמת קלפים קלאסי ואינטראקטיבי לאימון הזיכרון, הכולל מערכת נקודות ואפשרות לאיפוס והתחלת משחק חדש.",
    image: "images/projects/memory-game-v2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Games",
    demoUrl: "projects/memory-game/index.html",
    githubUrl: `${GITHUB_REPO_URL}/tree/main/public/projects/memory-game`,
  },
  {
    id: 4,
    title: "משחק האיש התלוי (Hangman)",
    description:
      "משחק ניחוש מילים מאתגר הכולל בחירה של אורך המילה הרצויה, מקלדת וירטואלית וציור אינטראקטיבי של האיש התלוי.",
    image: "images/projects/hangman.png",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    category: "Games",
    demoUrl: "projects/hangman/index.html",
    githubUrl: `${GITHUB_REPO_URL}/tree/main/public/projects/hangman`,
  },
  {
    id: 5,
    title: "ממשק API למדינות (Countries API)",
    description:
      "אפליקציה המציגה מידע מקיף על מדינות העולם (דגלים, ערי בירה, מטבעות) באמצעות חיבור בזמן אמת ל-REST Countries API עם יכולות חיפוש.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Fetch API"],
    category: "Web Apps",
    demoUrl: "projects/countries-api/index.html",
    githubUrl: `${GITHUB_REPO_URL}/tree/main/public/projects/countries-api`,
  },
  {
    id: 6,
    title: "רשימת משימות (ToDo List)",
    description:
      "אפליקציה פשוטה, נקייה ויעילה לניהול משימות יומיות — הוספה, מחיקה ומעקב אחר ביצוע משימות.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Apps",
    demoUrl: "projects/todoList/index.html",
    githubUrl: `${GITHUB_REPO_URL}/tree/main/public/projects/todoList`,
  },
];
