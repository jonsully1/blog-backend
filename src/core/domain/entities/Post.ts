import { IdGenerator } from "../interfaces/IdGenerator";

export class Post {
  #id;
  #title;
  #content;
  #author;
  #createdAt;
  #updatedAt;

  constructor(
    title: string,
    content: string,
    author: string,
    idGenerator: IdGenerator,
  ) {
    this.#id = idGenerator.generateId();
    this.#title = title;
    this.#content = content;
    this.#author = author;
    this.#createdAt = new Date();
    this.#updatedAt = new Date();
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content,
      author: this.#author,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
    };
  }
}
