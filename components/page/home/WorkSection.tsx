'use client';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from '@/components/utils/ProjectCard';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export type Project = {
  img: string;
  category: string;
  name: string;
  description: string;
  link: string;
  source: string;
};

export const projectData: Project[] = [
  {
    img: '/pm.png',
    category: 'web',
    name: 'PM',
    description: 'Project management web application with realtime chatbox and notification system.',
    link: '',
    source: 'https://github.com/naslth/pm'
  },
  {
    img: '/xmpp.png',
    category: 'web',
    name: 'XMPP-sensor',
    description: 'A system that emulates sensors communicating with each other using the XMPP protocol',
    link: '',
    source: 'https://github.com/naslth/XMPP-sensor'
  },
  {
    img: '/bomb.png',
    category: 'app',
    name: 'Bomberman',
    description: 'A legendary game clone with Java app',
    link: '',
    source: 'https://github.com/naslth/bomb'
  },
  {
    img: '/dict.png',
    category: 'app',
    name: 'Dictionary',
    description: 'Multiple translator JavaFX application with bookmark and personal edit word',
    link: '',
    source: 'https://github.com/naslth/dictionary-java'
  }
];

export default function WorkSection() {
  return (
    <section className='relative mb-12 lg:mb-36 xl:mb-48 '>
      <div className='container mx-auto'>
        <div className='max-w-[300px] mx-auto lg:mx-0 lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center text-center lg:items-start'>
          <h2 className='section-title mb-8 text-center mx-auto'>Mini projects</h2>
          <p className='text-muted-foreground text-lg mb-8 mx-auto'>Check all my project below 👇</p>
          <Link href='/projects' className='mx-auto'>
            <Button>All projects</Button>
          </Link>
        </div>
        <div className='xl:max-w-[900px] lg:max-w-[700px] lg:absolute right-0 top-0 '>
          <Swiper
            className='h-[550px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='h-[90%]'>
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
