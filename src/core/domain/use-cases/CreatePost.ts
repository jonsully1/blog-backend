import { Post } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";
import { IdGenerator } from "../interfaces/IdGenerator";

interface CreatePostInput {
  title: string;
  content: string;
  author: string;
}

export class CreatePost {
  #postRepository: PostRepository;
  #idGenerator: IdGenerator;

  constructor(
    private postRepository: PostRepository,
    private idGenerator: IdGenerator,
  ) {
    this.#postRepository = postRepository;
    this.#idGenerator = idGenerator;
  }

  async execute(input: CreatePostInput): Promise<Post> {
    const post = new Post(
      input.title,
      input.content,
      input.author,
      this.#idGenerator,
    );
    await this.#postRepository.create(post);
    return post;
  }
}
