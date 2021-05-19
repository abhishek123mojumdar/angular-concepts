import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || !args) {
      return value;
    }

    return value.filter(val => {
      console.log(val.empName.toLocaleLowerCase());
      console.log(args.toLocaleLowerCase());
      console.log(
        val.empName.toLocaleLowerCase().includes(args.toLocaleLowerCase())
      );
      return val.empName.toLocaleLowerCase().includes(args.toLocaleLowerCase());
    });
  }
}
