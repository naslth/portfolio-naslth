'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, ArrowRightIcon, MessageSquare } from 'lucide-react';
import React from 'react';

export default function Form() {
  return (
    <form className='flex flex-col gap-y-4'>
      <div className='text-sm uppercase font-semibold text-primary tracking-[4px]'>Online inquiry</div>
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input type='mail' id='mail' placeholder='Email' />
        <Mail className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Textarea id='content' placeholder='Say something here...' />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>
        Send me
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}
