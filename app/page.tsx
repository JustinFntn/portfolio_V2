'use client';

import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col items-center px-4">
          <SectionDivider />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  );
}
