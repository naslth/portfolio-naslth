import React from 'react';
import { Project } from '../page/home/WorkSection';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Link2Icon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className='group overflow-hidden relative shadow-sm h-full'>
      <CardHeader className='p-0'>
        <div className='relative w-full h-[300px] flex items-center justify-center bg-[linear-gradient(_to_right,_#ECE9E6,#FFFFFF_)] dark:bg-[linear-gradient(_to_right,_#232526,#414345_)] bg-tertiary dark:bg-secondary/40 lg:bg-[110%] lg:bg-no-repeat overflow-hidden'>
          <Image className='absolute bottom-0 shadow-2xl' src={project.img} width={250} height={250} alt='' priority />
          <div className='flex gap-x-5'>
            {project.link !== '' ? (
              <Link
                href={project.link}
                className='bg-white dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
              >
                <Link2Icon />
              </Link>
            ) : (
              <></>
            )}
            <Link
              href={project.source}
              className='bg-white dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <GitHubLogoIcon />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{project.category}</Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
        <p className='text-muted-foreground text-lg'>
          <span className='text-primary'>Tech stack: </span>
          {project.tech_stack}
        </p>
      </div>
    </Card>
  );
}
