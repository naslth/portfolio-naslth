'use client';
import { projectData } from '@/components/page/home/WorkSection';
import { useState } from 'react';
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs';
import ProjectCard from '@/components/utils/ProjectCard';

export default function ProjectPage() {
  const uniqueCategories = ['all projects', ...new Set(projectData.map((project) => project.category))];
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');
  const filterProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  });
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 lg:mb-16 text-center mx-auto'>My mini projects</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-36'>
          <TabsList className='w-full grid md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto lg:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  className='capitalize w-[162px] lg:w-auto'
                  value={category}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
            {filterProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} key={index} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
