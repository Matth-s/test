export interface FeedbackSchema {
  id: string;
  title: string;
  category: 'Feature' | 'UI' | 'UX' | 'Enhancement' | 'Bug';
  upvotes: number;
  status: 'Suggestion' | 'Planned' | 'In-Progress' | 'Live';
  description: string;
  comments: Comment[] | [];
}

export interface CommentSchema {
  id: string;
  content: string;
  user: UserReplySchema;
  replies: ReplySchema[] | [];
}

export interface UserReplySchema {
  image: string;
  username: string;
}

export interface ReplySchema {
  id: string;
  content: string;
  replyingTo: string;
  user: UserReplySchema;
}
