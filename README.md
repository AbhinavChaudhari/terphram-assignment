A modern web application built with **Next.js**, **TypeScript**, and **Zustand** for managing electrolyzer disassembly processes efficiently.  
The app allows operators to track, comment, and confirm statuses for each element part in real time.

🌐 **Live Demo (Deploy on Vercel for free)** → [https://vercel.com/solutions/nextjs](https://vercel.com/solutions/nextjs)

---

## 🚀 Features

- 🧩 **Dynamic Part Selection**
  - Select, confirm, and track the status of each element part.
  - Disabled parts stay visible with their respective status.

- 🗂️ **Zustand Global State Management**
  - Centralized, reactive state across all components.
  - Keeps track of electrolyzers, parts, checklists, and comments efficiently.

- 🧾 **Confirmation Modals**
  - Reusable modal component with animations using **Framer Motion**.
  - Confirmation actions update global store instantly.

- 🗒️ **Comments & Checklist**
  - Checklist items reflect per electrolyzer and persist after confirmation.

- 💾 **Persistent Confirmations**
  - Stores each disassembly confirmation along with:
    ```ts
    {
      ids: string[];
      checklist: string[];
      comments: Record<string, string>;
      status: string;
      confirmedAt: string;
    }
    ```
  - Enables audit history and reusability for future steps like assembly.

- 💡 **Smooth UI Animations**
  - Section transitions and modal openings animated with **Framer Motion**.
  - Enhanced user experience without extra dependencies.

---

## 🛠️ Tech Stack

| Category | Tools |
|-----------|-------|
| Framework | **Next.js 14** |
| Language | **TypeScript** |
| State Management | **Zustand** |
| Styling | **Tailwind CSS** |
| Animations | **Framer Motion** |
| Deployment | **Vercel** |

---

## 🧩 Folder Structure
src/
│
├── app/ # Next.js app directory
│ ├── page.tsx # Entry point
│ ├── layout.tsx # Root layout
│
├── components/
│ ├── Disassembly/ # Core disassembly UI
│ │ ├── sidebar.tsx
│ │ ├── partList.tsx
│ │ ├── partForm.tsx
│ │ ├── checkList.tsx
│ │ ├── commentSection.tsx
│ │ └── actionButtons.tsx
│ └── ui/ # Reusable UI components (Modal, Status, etc.)
│
├── store/
│ ├── disassemblyStore.ts # Zustand store for global disassembly state
│ └── modalStore.ts # Zustand store for modals
│
├── data/
│ └── data.ts # Static IDs and checklist data
│
└── utils/
└── types.ts # Shared TypeScript interfaces
