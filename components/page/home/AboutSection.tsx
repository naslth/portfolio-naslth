import DevImg from '@/components/utils/DevImg';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, User2, Home, PhoneCall, Mail, GraduationCap, Briefcase } from 'lucide-react';
import REACT from '@/public/react.svg';
import TAILWIND from '@/public/tailwind.svg';
import NEXT from '@/public/next.png';
import SPRING from '@/public/spring.svg';
import POSTGRES from '@/public/postgres.svg';
import GIT from '@/public/git.svg';
import DOCKER from '@/public/docker.svg';
import NODE from '@/public/node.svg';
import AWS from '@/public/aws.svg';
import LINUX from '@/public/linux.svg';
import GO from '@/public/go.svg';
import MYSQL from '@/public/mysql.svg';
import MONGODB from '@/public/mongodb.svg';
import KUBERNETES from '@/public/kubernetes.svg';
import Image from 'next/image';
import Author from '@/public/author.jpg';
const personalData = [
  {
    icon: <User2 size={20} />,
    text: 'Le Trung Hieu'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '(+84) 376 686 112'
  },
  {
    icon: <Mail size={20} />,
    text: 'hieu.lt21.work@gmail.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 06 November, 2002'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Majoring in Computer Networks and Data Communications'
  },
  {
    icon: <Home size={20} />,
    text: 'Ha Noi'
  }
];

const qualificationData = [
  {
    title: 'Education',
    data: [
      {
        location: 'Ha Giang High School for Gifted',
        qualification: 'Class: Specialized Mathematics',
        years: '2017 - 2020'
      },
      {
        location: 'University of Engineering and Technology - Vietnam National University',
        qualification: 'Major: Computer Networks and Data Communications',
        years: '2020 - 2024'
      }
    ],
    icon: <GraduationCap size={26} />
  },
  {
    title: 'Experience',
    data: [
      {
        location: 'Toshiba Software Development (Vietnam) Co. Ltd.',
        qualification: 'Software Engineering (OJT)',
        years: 'June 2023 - May 2024'
      },
      {
        location: 'One Mount Group',
        qualification: 'Backend Software Engineering',
        years: 'May 2024 - January 2025'
      }
    ],
    icon: <Briefcase size={26} />
  }
];

const skillData = [
  {
    title: 'Front-end',
    data: [REACT, NEXT, TAILWIND]
  },
  {
    title: 'Back-end',
    data: [NODE, SPRING, GO]
  },
  {
    title: 'Database',
    data: [POSTGRES, MYSQL, MONGODB]
  },
  {
    title: 'Others',
    data: [GIT, DOCKER, AWS, LINUX, KUBERNETES]
  }
];
export default function AboutSection() {
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24 mt-10'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
        <div className='flex flex-col lg:flex-row'>
          <div className='hidden lg:flex flex-1 relative'>
            <DevImg ImgSrc={Author} />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none'>
                <TabsTrigger className='w-[162px] lg:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className='w-[162px] lg:w-auto' value='qualifications'>
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] lg:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center lg:text-left'>
                    <h3 className='h3 mb-4'>
                      “Learn as if you will live forever, live like you will die tomorrow” - Mahatma Gandhi
                    </h3>
                    <p className='sub mx-auto lg:mx-0'>
                      I&apos;m a software engineer with a passion for web development. I&apos;m always eager to learn
                      new technologies and frameworks.
                    </p>
                    <div className='grid lg:grid-cols-2 gap-6 mb-12'>
                      {personalData.map((item, index) => {
                        return (
                          <div key={index} className='flex items-center gap-4 mx-auto lg:mx-0'>
                            <div className='text-primary'>{item.icon}</div>
                            <div className='xl:text-lg text-base'>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center'>My journey</h3>
                    {/* wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8 gap-x-4'>
                      {qualificationData.map((category, index) => {
                        return (
                          <div key={index} className='flex flex-col gap-y-6'>
                            {/* title */}
                            <div className='flex gap-x-4 items-center text-primary text-[22px]'>
                              {category.icon}
                              <h3 className='capitalize h3'>{category.title}</h3>
                            </div>
                            {/* content */}
                            <div className='flex flex-col gap-y-8'>
                              {category.data.map((item, index) => {
                                return (
                                  <div key={index} className='flex gap-x-8 group'>
                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                      <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                    </div>
                                    <div>
                                      <div className='font-semibold xl:text-xl leading-snug text-lg mb-2'>
                                        {item.location}
                                      </div>
                                      <div className='xl:text-lg text-base leading-snug text-muted-foreground mb-4'>
                                        {item.qualification}
                                      </div>
                                      <div className='xl:text-base text-sm font-medium'>{item.years}</div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='flex flex-col mx-auto lg:mx-0 gap-y-8 max-w-[520px] mt-10'>
                    {skillData.map((category, index) => {
                      return (
                        <div key={index} className='grid md:grid-cols-2 gap-y-8'>
                          <div className='flex flex-row gap-x-8 mx-auto lg:mx-0 items-center justify-between lg:pr-16'>
                            <h4 className='capitalize h4 text-primary text-center mx-auto'>{category.title}</h4>
                            <span className='hidden lg:flex w-[2px] h-7 lg:h-10 bg-primary'></span>
                          </div>
                          <div className='flex flex-row gap-x-8 mx-auto lg:mx-0 items-center'>
                            {category.data.map((item, index) => {
                              return (
                                <Image
                                  key={index}
                                  src={item}
                                  alt='skill'
                                  className={`w-8 h-8 lg:w-10 lg:h-10 ${item === NEXT ? 'border border-white rounded-full' : 'bg-none'}`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
