// import React, { useState, useEffect } from 'react';

// const Feed = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state to show empty cards

//   useEffect(() => {
//     // Fetch data from Django backend
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/posts/'); // Update URL to match your Django API endpoint
//         const data = await response.json();
//         setPosts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="space-y-6 p-4">
//       {loading ? (
//         // Empty card skeletons while loading
//         <>
//           <div className="bg-gray-200 animate-pulse rounded-lg shadow p-6 h-40"></div>
//           <div className="bg-gray-200 animate-pulse rounded-lg shadow p-6 h-40"></div>
//           <div className="bg-gray-200 animate-pulse rounded-lg shadow p-6 h-40"></div>
//         </>
//       ) : (
//         // Render posts after data is fetched
//         posts.map(post => (
//           <div key={post.id} className="bg-white rounded-lg shadow p-6">
//             {/* User Info */}
//             <div className="flex items-center space-x-4">
//               <img
//                 src={post.user.avatar} 
//                 alt={post.user.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="text-sm font-semibold">
//                   {post.user.name}{' '}
//                   {post.user.team && <span className="text-xs text-gray-500">for {post.user.team}</span>}
//                 </p>
//                 <p className="text-xs text-gray-500">{new Date(post.date).toDateString()}</p>
//               </div>
//             </div>

//             {/* Post Title */}
//             <h2 className="mt-4 text-lg font-bold">{post.title}</h2>

//             {/* Tags */}
//             <div className="mt-2 space-x-2">
//               {post.tags.map((tag, index) => (
//                 <span key={index} className="text-blue-500 text-sm font-medium">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Reactions & Comments */}
//             <div className="mt-4 flex justify-between text-sm text-gray-500">
//               <div className="flex items-center space-x-4">
//                 <span>❤️ 🎉 🙌 🔥</span> {/* Emojis representing reactions */}
//                 <span>{post.reactions}</span>
//                 <span>💬 {post.comments}</span>
//               </div>
//               <div>{post.readingTime}</div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Feed;

import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show empty cards

  useEffect(() => {
    // Fetch data from Django backend
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/posts/Post_part'); // Update URL to match your Django API endpoint
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="space-y-6 p-4">
      {loading ? (
        // Empty card skeletons while loading
        <>
          <div className="bg-gray-200 animate-pulse rounded-lg shadow p-6 h-40"></div>
          <div className="bg-gray-200 animate-pulse rounded-lg shadow p-6 h-40"></div>
          <div className="bg-gray-200 animate-pulse rounded-lg shadow p-6 h-40"></div>
        </>
      ) : (
        // Render posts after data is fetched
        posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow p-6">
            {/* User Info */}
            <div className="flex items-center space-x-4">
              <img
                src={post.user.avatar} 
                alt={post.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">
                  {post.user.name}{' '}
                  {post.user.team && <span className="text-xs text-gray-500">for {post.user.team}</span>}
                </p>
                <p className="text-xs text-gray-500">{new Date(post.date).toDateString()}</p>
              </div>
            </div>

            {/* Post Title */}
            <h2 className="mt-4 text-lg font-bold">{post.title}</h2>

            {/* Tags */}
            <div className="mt-2 space-x-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-blue-500 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Reactions & Comments */}
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>❤️ 🎉 🙌 🔥</span> {/* Emojis representing reactions */}
                <span>{post.reactions}</span>
                <span>💬 {post.comments}</span>
              </div>
              <div>{post.readingTime}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
