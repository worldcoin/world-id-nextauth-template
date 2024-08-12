// // pages/api/posts.js

import Link from "next/link"
// // import db from '../../lib/db'; // Assuming db is set up in lib/db.js

// export default async function handler(req, res) {
//   // Default values
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;

//   // Calculate the starting index
//   const startIndex = (page - 1) * limit;

//   try {
//     // Query to get the paginated data
//     const posts = await db.collection('posts')
//       .find({})
//       .sort({ createdAt: -1 }) // Sort posts by creation date (most recent first)
//       .skip(startIndex)
//       .limit(limit)
//       .toArray();

//     // Query to get the total number of documents
//     const totalPosts = await db.collection('posts').countDocuments();

//     // Calculate total pages
//     const totalPages = Math.ceil(totalPosts / limit);

//     // Return the data with pagination info
//     res.status(200).json({
//       posts,
//       pagination: {
//         totalPosts,
//         currentPage: page,
//         totalPages,
//         hasNextPage: page < totalPages,
//         hasPreviousPage: page > 1,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
