import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Post()
  create(@Body() comment: Comment) {
    return this.commentsService.create(comment);
  }
}
  
