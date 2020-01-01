import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExponentialStrengthPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'exponentialStrength',
})
export class ExponentialStrengthPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, exponent?: number):number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
