/* tslint:disable:no-unused-variable */
import {ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {IqSelect2ResultsComponent} from '../iq-select2-results/iq-select2-results.component';
import {UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
import {IqSelect2Component} from '../iq-select2/iq-select2.component';
import {IqSelect2TemplateDirective} from './iq-select2-template.directive';
import {DataService} from '../data.service';

describe('IqSelect2TemplateDirective', () => {
    let component: IqSelect2Component;
    let parentFixture: ComponentFixture<TestHostComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent],
            imports: [ReactiveFormsModule, IqSelect2Component, IqSelect2TemplateDirective],
            providers: [
                DataService
            ]
        }).compileComponents();
    }));

    const adapter = function () {
        return (entity: any) => {
            return {
                id: entity.id,
                text: entity.name,
                entity: entity
            };
        };
    };

    beforeEach(inject([DataService], (service: DataService) => {
        parentFixture = TestBed.createComponent(TestHostComponent);
        parentFixture.detectChanges();
        const parentComponent = parentFixture.componentInstance;
        component = parentComponent.childComponent;
        component.dataSourceProvider = (term: string) => service.listData(term);
        component.iqSelect2ItemAdapter = adapter();
        parentFixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display custom result template', inject([DataService], fakeAsync(() => {
        component.searchFocused = true;
        component.term.setValue('tunisia');
        tick(250);
        parentFixture.detectChanges();
        const container: Element = parentFixture.nativeElement.querySelector('.select2-dropdown-item.active');
        // query dom based on class from custom template
        expect(container.querySelector('.color').innerHTML).toBe('#fcd217');
        expect(container.querySelector('.code').innerHTML).toBe('TN');
    })));
});

@Component({
    template: `
        <form [formGroup]="fg">
            <iq-select2 [debounceLength]="0">
                <div *iq-select2-template="let item = $entity; let i = $index">
                    ({{i}}) <span class="code">{{item.code}}</span> - <span class="color">{{item.color}}</span>
                </div>
            </iq-select2>
        </form>
    `,
    standalone: false
})
class TestHostComponent implements OnInit {

    @ViewChild(IqSelect2Component, /* TODO: add static flag */ {})
    childComponent: IqSelect2Component;
    fg: UntypedFormGroup;

    constructor(private formBuilder: UntypedFormBuilder) {
    }

    ngOnInit(): void {
        this.fg = this.formBuilder.group({
            country: null
        });
    }
}
