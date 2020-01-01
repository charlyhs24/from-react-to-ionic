import { NgModule } from '@angular/core';
import { DateTimeHelperPipe } from './date-time-helper/date-time-helper';
import { ExponentialStrengthPipe } from './exponential-strength/exponential-strength';
@NgModule({
	declarations: [DateTimeHelperPipe,
    ExponentialStrengthPipe],
	imports: [],
	exports: [DateTimeHelperPipe,
    ExponentialStrengthPipe]
})
export class PipesModule {}
