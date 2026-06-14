/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IqSelect2ResultsComponent} from './iq-select2-results.component';

describe('IqSelect2ResultsComponent', () => {
    let component: IqSelect2ResultsComponent;
    let fixture: ComponentFixture<IqSelect2ResultsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IqSelect2ResultsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IqSelect2ResultsComponent);
        component = fixture.componentInstance;
        component.items = [
            {
                id: '1',
                text: 'test 1'
            },
            {
                id: '2',
                text: 'test 2'
            }];
        component.selectedItems = [];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to the next item', () => {
        component.activeNext();
        expect(component.activeIndex).toBe(1);
    });

    it('should wrap to the beginning at the end', () => {
        component.activeIndex = 1;
        component.activeNext();
        expect(component.activeIndex).toBe(0);
    });

    it('should wrap to the end at the beginning', () => {
        component.activePrevious();
        expect(component.activeIndex).toBe(1);
    });

    it('should navigate to the previous item', () => {
        component.activeIndex = 1;
        component.activePrevious();
        expect(component.activeIndex).toBe(0);
    });

    it('should call scrollToElement on getting to the next result', () => {
        jest.spyOn(component, 'scrollToElement');
        component.activeNext();
        expect(component.scrollToElement).toHaveBeenCalled();
    });

    it('should call scrollToElement on getting to the previous result', () => {
        jest.spyOn(component, 'scrollToElement');
        component.activePrevious();
        expect(component.scrollToElement).toHaveBeenCalled();
    });

    it('should emit event on item selection', () => {
        jest.spyOn(component.onItemSelected, 'emit');
        component.selectCurrentItem();
        expect(component.onItemSelected.emit).toHaveBeenCalled();
    });

    it('should reset active index after selection', () => {
        jest.spyOn(component.onItemSelected, 'emit');
        component.activeNext();
        component.selectCurrentItem();
        expect(component.activeIndex).toBe(0);
    });
});
