export class Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(title: string, content: string, author: string) {
    this.id = generateId();
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

function generateId(): string {
  return Math.random().toString(36) // Simple ID value for now
}