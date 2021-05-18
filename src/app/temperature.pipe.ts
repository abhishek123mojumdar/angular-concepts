import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let temperature = value;
    if (value && isNaN(value)) {
      if (args === 'C') {
        temperature = (value - 32) / 1.8;
        return temperature.toFixed(2);
      } else if (args === 'F') {
        temperature = value * 1.8 + 32;
        return temperature.toFixed(2);
      }
    } else {
      return temperature;
    }
  }
}
