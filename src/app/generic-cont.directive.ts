import {ComponentFactory, ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {ElemCont} from "./elem-cont";

@Directive({
  selector: '[appGenericCont]'
})
export class GenericContDirective<T> {

  constructor(private contRef: ViewContainerRef, private factResolver: ComponentFactoryResolver) { }
  @Input() data: T;
  @Input() set temp(temp: ElemCont<T>){
    let factory = this.factResolver.resolveComponentFactory(<any>temp);
    let elemRef = this.contRef.createComponent(factory);
    (<ElemCont<string>>elemRef.instance).data = this.data;
  }

}
