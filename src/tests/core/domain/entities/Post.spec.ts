import { Post } from "../../../../../src/core/domain/entities/Post";
import { IdGenerator } from "../../../../../src/core/domain/interfaces/IdGenerator";

class MockIdGenerator implements IdGenerator {
  generateId() {
    return "test-id";
  }
}

describe("Post", () => {
  it("should create a new Post with title, content, and author", () => {
    const title = "My First Post";
    const content = "This is the content.";
    const author = "John Doe";

    const mockIdGenerator = new MockIdGenerator();
    const post = new Post(title, content, author, mockIdGenerator);

    const expected = {
      id: expect.any(String),
      title: title,
      content: content,
      author: author,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    };

    expect(post.toObject()).toStrictEqual(expected);
  });
});
