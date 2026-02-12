import React from 'react';
import { format } from 'date-fns'; // Assuming date-fns might be used, or just native JS dates
import SEOHead from '@/components/SEOHead';
import { articleSchema } from '@/utils/schemaGenerator';

const BlogArticleTemplate = ({ 
  title, 
  description, 
  content, 
  author = "Phenomeny Team", 
  publishDate, 
  modifiedDate,
  imageUrl,
  tags = [] 
}) => {
  const formattedPublishDate = publishDate || new Date().toISOString();
  
  const schema = articleSchema({
    title,
    description,
    image: imageUrl,
    datePublished: formattedPublishDate,
    dateModified: modifiedDate,
    author
  });

  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        ogImage={imageUrl}
        ogType="article"
        jsonLd={schema}
      />
      
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             {tags.map((tag, idx) => (
               <span key={idx} className="text-xs font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-2 py-1 rounded">
                 {tag}
               </span>
             ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <address className="not-italic font-medium text-white">{author}</address>
            <span>•</span>
            <time dateTime={formattedPublishDate}>
              {new Date(formattedPublishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
        </header>

        {imageUrl && (
          <figure className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-auto object-cover max-h-[500px]"
              loading="eager"
            />
            <figcaption className="text-center text-xs text-gray-500 mt-2">
              {title}
            </figcaption>
          </figure>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
           {/* Semantic Content Section */}
           <section dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              Share this article:
              <div className="flex gap-4 mt-2">
                {/* Social Share Buttons (Placeholders) */}
                <button aria-label="Share on Twitter" className="hover:text-white transition-colors">Twitter</button>
                <button aria-label="Share on LinkedIn" className="hover:text-white transition-colors">LinkedIn</button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
};

export default BlogArticleTemplate;