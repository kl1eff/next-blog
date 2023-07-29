import React from 'react';
import { PostMetadata } from '../types/PostMetadata';
import Link from 'next/link';


export default function PostPreview({ post }: { post: PostMetadata }) {
  return (
    <div className='border border-violet-200 p-4 rounded-md shadow-md bg-white hover:scale-105 hover:shadow-lg transition-all'>
      <p className='text-sm text-slate-400'>{post.date}</p>
      <Link href={`/posts/${post.slug}`}>
        <h2 className='font-semibold text-violet-900 hover:text-violet-700 mb-4'>{post.title}</h2>
      </Link>
      <p className='text-slate-700'>{post.subtitle}</p>
    </div>
  );
}
