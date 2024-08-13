// pages/api/posts.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import clientPromise from '../../lib/db';

type Data = {
  message: string;
  reviewId?: string;
  reviews?: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    console.log(req.body, "checkout the body dude")
    const { isHuman, where, review } = req.body as {
      isHuman: boolean;
      where: string;
      review: string;
    };

    if (!isHuman || !where || !review) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const client: MongoClient = await clientPromise;
      const db = client.db('worldReview');

      const result = await db.collection('reviews').insertOne({
        isHuman,
        where,
        review,
        createdAt: new Date(),
      });

      res.status(201).json({ message: 'Review added!', reviewId: result.insertedId.toString() });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const { page = '1', limit = '10' } = req.query;

      const client: MongoClient = await clientPromise;
      const db = client.db('worldReview');

      const pageNumber = parseInt(page as string, 10);
      const limitNumber = parseInt(limit as string, 10);
      const skip = (pageNumber - 1) * limitNumber;

      const reviews = await db.collection('reviews')
        .find({})
        .sort({ createdAt: -1 })  // Sort by newest first
        .skip(skip)
        .limit(limitNumber)
        .toArray();

      res.status(200).json({ message: 'Reviews fetched!', reviews });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
