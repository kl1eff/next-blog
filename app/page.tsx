import Link from 'next/link';
import getPostMetadata from '@/utils/getPostMetadata';
import PostPreview from '@/components/PostPreview';


export default function Home() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview post={post} />
  ));

  return <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>{postPreviews}</div>;
}
