import React from "react";

const WordPressContent = ({ content }: { content: string }) => {
  return (
    <div
      className="wordpress-content prose prose-lg max-w-none
    /* Base content styles */
    prose-p:my-4 prose-p:text-gray-700 prose-p:text-base
    prose-headings:font-bold prose-headings:text-gray-900 prose-headings:my-6
    
    /* List styles */
    prose-ul:list-disc prose-ul:ml-6 prose-ul:my-4
    prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-4
    prose-li:my-2
    
    /* Link styles */
    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
    
    /* Image styles */
    prose-img:rounded-lg prose-img:my-6 prose-img:mx-auto
    
    /* Blockquote styles */
    prose-blockquote:border-l-4 prose-blockquote:border-gray-300
    prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6
    
    /* Code block styles */
    prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-4
    prose-code:text-sm prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
    
    /* Table styles */
    prose-table:border-collapse prose-table:w-full prose-table:my-6
    prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-100
    prose-td:border prose-td:border-gray-300 prose-td:p-2
    
    /* WordPress specific classes */
    [&_.wp-block-image]:my-6 [&_.wp-block-image_img]:mx-auto
    [&_.wp-caption]:text-center [&_.wp-caption-text]:text-sm [&_.wp-caption-text]:text-gray-600
    [&_.aligncenter]:mx-auto [&_.aligncenter]:block
    [&_.alignleft]:float-left [&_.alignleft]:mr-4 [&_.alignleft]:mb-4
    [&_.alignright]:float-right [&_.alignright]:ml-4 [&_.alignright]:mb-4
  "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default WordPressContent;
