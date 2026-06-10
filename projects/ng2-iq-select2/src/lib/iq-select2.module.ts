import {NgModule} from '@angular/core';
import {IqSelect2Component} from './iq-select2/iq-select2.component';
import {IqSelect2TemplateDirective} from './iq-select2-template/iq-select2-template.directive';
import {IqSelect2ResultsComponent} from './iq-select2-results/iq-select2-results.component';

/**
 * @deprecated Angular recommends using standalone components & from v19 it's the default
 *
 * so import it like a standalone component...
 *
 * ```javascript
 * @Component({
 *   selector: 'iq-select2',
 *   templateUrl: './iq-select2.component.html',
 *   styleUrls: ['./iq-select2.component.css'],
 *   imports: [IqSelect2Component, IqSelect2ResultsComponent, IqSelect2TemplateDirective]
 * })
 */
@NgModule({
  imports: [
    IqSelect2Component,
    IqSelect2ResultsComponent,
    IqSelect2TemplateDirective
  ],
  exports: [
    IqSelect2Component,
    IqSelect2ResultsComponent,
    IqSelect2TemplateDirective
  ]
})
export class IqSelect2Module { }
