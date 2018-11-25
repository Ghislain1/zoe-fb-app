import { async, TestBed } from '@angular/core/testing';
import { WebSocketSampleComponent } from './web-socket-sample.component';
describe('WebSocketSampleComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WebSocketSampleComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WebSocketSampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=web-socket-sample.component.spec.js.map