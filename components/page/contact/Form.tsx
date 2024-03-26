'use client';
import { Input } from '@/components/ui/input';
import { User } from 'lucide-react';
import React from 'react';

export default function Form() {
  return (
    <form>
      <div className='relative flex items-center'>
        <Input type='name' placeholder='Name' />
        <User className='absolute right-6' />
      </div>
      <div className='relative flex items-center'>
        <Input type='name' placeholder='Name' />
        <User className='absolute right-6' />
      </div>
      <div className='relative flex items-center'>
        <Input type='name' placeholder='Name' />
        <User className='absolute right-6' />
      </div>
    </form>
  );
}
