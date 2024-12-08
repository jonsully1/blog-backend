import { Post } from '../../../../../src/core/domain/entities/Post';

describe('Post', () => {
  it('should create a new Post with title, content, and author', () => {
    const post = new Post('My First Post', 'This is the content.', 'John Doe');
    expect(post.title).toBe('My First Post');
    expect(post.content).toBe('This is the content.');
    expect(post.author).toBe('John Doe');
    expect(post.createdAt).toBeDefined();
    expect(post.updatedAt).toBeDefined();
  });
});