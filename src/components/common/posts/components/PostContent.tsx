import { useState } from "react";

const PostContent = ({ content }: any) => {
  const [isExpand, setIsExpand] = useState(false);
  const toggleExpand = () => setIsExpand(!isExpand);

  const words = content.split(" ");
  const displayedText = isExpand ? content : words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');


  return (
    <div>
      <h2 className="my-1">{displayedText}</h2>
      {words.length > 50 && (
        <button className="text-lg text-blue-700 hover:text-blue-500 hover:underline" onClick={toggleExpand}>{isExpand ? 'Show less' : 'Show more...'}</button>
      )}
    </div>
  )
}

export default PostContent