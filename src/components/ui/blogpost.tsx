// BlogCard.tsx
import React from 'react';

// 블로그 포스트 타입 정의
interface BlogPost {
    title: string;
    category: string;
    date: string;
    url: string;
}

// 각 블로그 포스트를 표시하는 컴포넌트
const BlogPostItem: React.FC<BlogPost> = ({ title, category, date, url}) => {
    const details = [
        { text: title, className: 'basis-4/5 text-sm font-normal' },
        { text: category, className: 'basis-0.75/5 text-sm font-normal text-zinc-400' },
        { text: date, className: 'basis-0.25/5 text-sm font-normal text-zinc-400' }
    ]; // Create an array of details with associated styles
    return (
        <a href={url} className="block w-full flex py-6 px-6 border-b-[1.5px] border-zinc-900 transition-transform transition-background-color duration-300 ease-in-out hover:bg-zinc-900 hover:rounded-lg">
            <div className='relative w-full flex-auto'>
                <div className='flex justify-between items-center'>
                    {details.map((detail, index) => (
                        <p key={index} className={detail.className}>{detail.text}</p> // Apply styles to each paragraph
                    ))}
                </div>
            </div>
        </a>
    );
};

export default BlogPostItem;
