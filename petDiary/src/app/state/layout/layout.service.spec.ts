import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Renderer2, RendererFactory2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { LayoutService } from './layout.service';
import { LayoutStore } from './layout.store';

const renderer2 = { setStyle: () => {}, removeStyle: () => {} } as any;

describe('LayoutService', () => {
    let layoutService: LayoutService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LayoutService, LayoutStore,
                MockProvider(RendererFactory2, {
                    createRenderer: () => renderer2
                }),
            ],
            imports: [HttpClientTestingModule],
        });

        layoutService = TestBed.inject(LayoutService);
    });

    it('should be created', () => {
        expect(layoutService).toBeDefined();
    });
});
