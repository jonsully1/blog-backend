import { Post } from "../../../../../src/core/domain/entities/Post";
import { PostRepository } from "../../../../../src/core/domain/repositories/PostRepository";
import { CreatePost } from "../../../../../src/core/domain/use-cases/CreatePost";
import { IdGenerator } from "../../../../core/domain/interfaces/IdGenerator";

class MockPostRepository implements PostRepository {
  private posts: Post[] = [];

  async create(post: Post): Promise<Post> {
    this.posts.push(post);
    return post;
  }
}

class MockIdGenerator implements IdGenerator {
  generateId(): string {
    return "mock-id";
  }
}

describe("CreatePost", () => {
  it("should create and save a new post", async () => {
    const mockPostRepository = new MockPostRepository();
    const mockIdGenerator = new MockIdGenerator();
    const createPost = new CreatePost(mockPostRepository, mockIdGenerator);

    const input = {
      title: "New Post",
      content: "Some content",
      author: "Author",
    };
    const post = await createPost.execute(input);

    const expected = {
      id: expect.any(String),
      title: input.title,
      content: input.content,
      author: input.author,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    };

    expect(post.toObject()).toStrictEqual(expected);
  });
});
