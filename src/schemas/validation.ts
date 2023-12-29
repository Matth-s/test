import { z } from 'zod';

const UserReplyValidation = z.object({
  image: z.string(),
  username: z.string(),
});

const ReplyValidation = z.object({
  id: z.string(),
  content: z
    .string()
    .trim()
    .min(1, "Can't be empty")
    .max(251, '250 max'),
  replyingTo: z.string(),
  user: z.object(UserReplyValidation),
});

const CommentsValidation = z.object({
  id: z.string(),
  content: z.string().trim().min(1, "Can't be empty"),
  user: z.object(UserReplyValidation),
  replies: z.array(ReplyValidation).default([]),
});

export const UserValidation = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .trim()
    .min(6, '6 characters min')
    .max(20, 'Max lenth 20 characters'),
  userName: z
    .string()
    .trim()
    .min(4, '4 characters min')
    .max(15, '15 characters max'),
});

export const FeedbackValidation = z.object({
  id: z.string(),
  title: z.string().trim().min(1, 'Can’t be empty'),
  category: z
    .string('Feature' | 'UI' | 'UX' | 'Enhancement' | 'Bug')
    .default('Feature'),
  upvotes: z.number().default(0),
  status: z
    .string('Suggestion' | 'Planned' | 'In-Progress' | 'Live')
    .default('Suggestion'),
  description: z
    .string()
    .trim()
    .min(1, 'Can’t be empty')
    .max(251, '250 max'),
  comments: z.array(CommentsValidation).default([]),
});
