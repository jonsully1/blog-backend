import { Post } from '../entities/Post';

export interface PostRepository {
    create(post: Post): Promise<Post>;
}
