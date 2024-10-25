// // // src/ScrollableSection.js
// // import React from 'react';

// // const ScrollableSection = () => {
// //   return (
// //     <div className="flex flex-col h-screen">
// //       {/* Header */}
// //       <header className="bg-blue-600 text-white p-4">
// //         <h1 className="text-2xl font-bold text-center">Scrollable Section Example</h1>
// //       </header>

// //       {/* Scrollable Section */}
// //       <main className="flex-grow overflow-auto p-4">
// //         <div className="h-96 border border-gray-300 p-4">
// //           <h2 className="text-xl font-semibold mb-4">Scrollable Content</h2>
// //           <p className="mb-2">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// //           </p>
// //           <p className="mb-2">
// //             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// //           </p>
// //           <p className="mb-2">
// //             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// //           </p>
// //           <p className="mb-2">
// //             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// //           </p>
// //           {/* Add more content to make it scrollable */}
// //           {[...Array(20)].map((_, index) => (
// //             <p key={index} className="mb-2">
// //               Item {index + 1}: More content to make this section scrollable.
// //             </p>
// //           ))}
// //         </div>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white p-4">
// //         <p className="text-center">© 2024 My Website. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default ScrollableSection;

// // src/ScrollableSection.js
// import React from 'react';

// const ScrollableSection = () => {
//   // Sample data for the shorts
//   const shortsData = [
//     { id: 1, title: 'Short 1', description: 'Description for Short 1' },
//     { id: 2, title: 'Short 2', description: 'Description for Short 2' },
//     { id: 3, title: 'Short 3', description: 'Description for Short 3' },
//     { id: 4, title: 'Short 4', description: 'Description for Short 4' },
//     { id: 5, title: 'Short 5', description: 'Description for Short 5' },
//     { id: 6, title: 'Short 6', description: 'Description for Short 6' },
//     { id: 7, title: 'Short 7', description: 'Description for Short 7' },
//     { id: 8, title: 'Short 8', description: 'Description for Short 8' },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4">
//         <h1 className="text-2xl font-bold text-center">YouTube Shorts</h1>
//       </header>

//       {/* Scrollable Shorts Section */}
//       <main className="flex-grow overflow-x-auto p-4">
//         <div className="flex space-x-4">
//           {shortsData.map((short) => (
//             <div key={short.id} className="min-w-[200px] bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src={`https://via.placeholder.com/200x300.png?text=${short.title}`}
//                 alt={short.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-2">
//                 <h3 className="font-semibold">{short.title}</h3>
//                 <p className="text-gray-600">{short.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white p-4">
//         <p className="text-center">© 2024 My Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ScrollableSection;


// src/ScrollableSection.js
import React, { useState, useEffect } from 'react';
import AxiosInstance from '../AxiosInstance'; // Adjust path as needed

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [commentDialogOpen, setCommentDialogOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [commentText, setCommentText] = useState('');

    // Fetch posts from the backend
    useEffect(() => {
        AxiosInstance.get('/posts/Post_part/')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts', error);
            });
    }, []);

    const handleLike = (postId) => {
        AxiosInstance.post(`/posts/Post_part/${postId}/`)
            .then((response) => {
                // Optionally fetch posts again or update the state to reflect the new like
                setPosts(posts.map(p => (p.post_id === postId ? { ...p, likes: [...p.likes, response.data.user_id] } : p)));
                console.log('Post liked', response.data);
            })
            .catch((error) => {
                console.error('Error liking post', error);
            });
    };
    const handleOpenCommentDialog = (post) => {
        setCurrentPost(post);
        setCommentText('');
        setCommentDialogOpen(true);
    };

    const handleCloseCommentDialog = () => {
        setCommentDialogOpen(false);
        setCurrentPost(null);
    };

    const handleCommentSubmit = () => {
        AxiosInstance.post('posts/comments/', {
            post: currentPost.post_id,
            comment_text: commentText,
        })
            .then(() => {
                handleCloseCommentDialog();
                // Optionally fetch posts again or update the state to reflect the new comment
            })
            .catch((error) => {
                console.error('Error submitting comment', error);
            });
    };


    // Delete a post by its postId
    const handleDelete = (postId) => {
        AxiosInstance.delete(`/posts/Post_part/${postId}/`)
            .then(() => {
                setPosts(posts.filter(post => post.post_id !== postId));
            })
            .catch((error) => {
                console.error('Error deleting post', error);
            });
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Scrollable shorts section */}
            <div className="flex-grow flex justify-center bg-gray-100">
                {/* Shorts scrollable container with no-scrollbar class */}
                <div className="relative w-[420px] h-[85vh] overflow-y-scroll no-scrollbar">
                    {posts.map((post) => (
                        <div 
                            key={post.post_id} 
                            className="flex flex-col items-center bg-white shadow-lg rounded-lg mb-6 h-[85vh] w-[400px] mx-auto"
                        >
                            <img 
                                src={post.Media_url} 
                                alt={post.title} 
                                className="w-full h-3/4 object-cover rounded-t-lg"
                            />
                            <div className="p-4 w-full text-center">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-gray-600">{post.caption}</p>
                            </div>
                            <button 
                                onClick={() => handleDelete(post.post_id)} 
                                className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                            >
                                Delete Post
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostsList;
