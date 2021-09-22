import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostsService } from './Posts.service';
import { PostsStore } from './posts.store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostsService', () => {
    let postsService: PostsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PostsService, PostsStore],
            imports: [HttpClientTestingModule, MatSnackBarModule],
        });

        postsService = TestBed.inject(PostsService);
    });

    it('should be created', () => {
        expect(PostsService).toBeDefined();
    });
});