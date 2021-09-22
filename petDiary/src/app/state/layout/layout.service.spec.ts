import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';
import { LayoutStore } from './layout.store';

describe('LayoutService', () => {
    let layoutService: LayoutService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LayoutService, LayoutStore],
            imports: [HttpClientTestingModule],
        });

        layoutService = TestBed.inject(LayoutService);
    });

    it('should be created', () => {
        expect(layoutService).toBeDefined();
    });
});
