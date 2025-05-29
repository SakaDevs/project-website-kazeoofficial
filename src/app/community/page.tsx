// "use client"
// import { useEffect, useState } from "react";

// export default function CommunityPage() {
//   const [posts, setPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [newComment, setNewComment] = useState<{ [key: string]: string }>({});

//   useEffect(() => {
//     fetch("/api/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//       });
//   }, []);

//   const handleReact = async (id: string, type: "like" | "dislike") => {
//     await fetch("/api/posts", {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, type }),
//     });
//     location.reload();
//   };

//   const handleComment = async (id: string) => {
//     if (!newComment[id]) return;
//     await fetch("/api/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, comment: newComment[id] }),
//     });
//     setNewComment((prev) => ({ ...prev, [id]: "" }));
//     location.reload();
//   };

//     if (loading) return <p className="p-4">Loading posts...</p>;

//   return (
//     <main className="p-4 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Community Posts</h1>
//       {posts.map((post) => (
//         <div key={post.id} className="border p-4 rounded mb-4 shadow">
//           <div className="text-sm text-gray-500 mb-1">
//             oleh <strong>{post.author.name}</strong> ({post.author.role}) •{" "}
//             {new Date(post.createdAt).toLocaleString()}
//           </div>
//           <p className="mb-2 whitespace-pre-wrap">{post.content}</p>
//           {post.imageUrl && (
//             <img
//               src={post.imageUrl}
//               className="rounded mb-2"
//               alt="Post image"
//             />
//           )}

//           <div className="flex gap-4 text-sm text-gray-600">
//             <button onClick={() => handleReact(post.id, "like")}>
//               ♥ {post.likes}
//             </button>
//             <button onClick={() => handleReact(post.id, "dislike")}>
//               👎 {post.dislikes}
//             </button>
//           </div>

//           <div className="mt-3">
//             <h4 className="text-sm font-semibold mb-1">Komentar:</h4>
//             <ul className="text-sm space-y-1">
//               {post.comments.map((c: any, i: number) => (
//                 <li key={i} className="bg-gray-100 px-2 py-1 rounded">
//                   {c.text}{" "}
//                   <span className="text-gray-400 text-xs">
//                     ({new Date(c.createdAt).toLocaleTimeString()})
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-2 flex gap-2">
//               <input
//                 type="text"
//                 className="border rounded p-1 text-sm flex-1"
//                 placeholder="Tulis komentar..."
//                 value={newComment[post.id] || ""}
//                 onChange={(e) =>
//                   setNewComment((prev) => ({
//                     ...prev,
//                     [post.id]: e.target.value,
//                   }))
//                 }
//               />
//               <button
//                 onClick={() => handleComment(post.id)}
//                 className="bg-blue-500 text-white px-2 rounded text-sm"
//               >
//                 Kirim
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// }
