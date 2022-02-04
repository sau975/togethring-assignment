import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[],filterBy:any,filterProperty:string='first_name'): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? items.filter(item =>
    item[filterProperty].toString().toLocaleLowerCase().indexOf(filterBy) !== -1) : items;
  }

}
