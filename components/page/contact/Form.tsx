'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, ArrowRightIcon, MessageSquare } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
type FormData = {
  name: string;
  email: string;
  content: string;
};

export default function Form() {
  const schema: ZodType<FormData> = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email('Invalid email address'),
    content: z.string().min(1, { message: 'Content is required' })
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const submit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit(submit)}>
      <div className='text-sm uppercase font-semibold text-primary tracking-[4px]'>Online inquiry</div>
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' {...register('name')} />
        <User className='absolute right-6' size={20} />
      </div>
      {errors.name && <div className='text-red-500 text-lg'>{errors.name.message}</div>}
      <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' {...register('email')} />
        <Mail className='absolute right-6' size={20} />
      </div>
      {errors.email && <div className='text-red-500 text-lg'>{errors.email.message}</div>}
      <div className='relative flex items-center'>
        <Textarea id='content' placeholder='Say something here...' {...register('content')} />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      {errors.content && <div className='text-red-500 text-lg'>{errors.content.message}</div>}
      <Button className='flex items-center gap-x-1 max-w-[166px]' type='submit'>
        Send me
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}
