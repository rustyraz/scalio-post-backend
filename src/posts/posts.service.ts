import { Injectable, NotFoundException } from '@nestjs/common';
import * as posts from '../data-source/posts.json'; // This can be replaced with a DB repository

@Injectable()
export class PostsService {
  findAll() {
    return posts;
  }

  findOne(id: number) {
    const result = posts.find((post) => post.id === id);
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`Post with ID: ${id} does not exist.`);
    }
  }
}
