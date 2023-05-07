import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  // Subject es un tipo especial de Observable podemos agregar pipe o subscribe
  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSubcription?: Subscription;

  @Input() initialValue?: string;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();

  // El nGOinit se coloca después del constructor
  ngOnInit(): void {
    // Traer lo que hace una persona en una tecla
    this.debouncerSubcription = this.debouncer
      .pipe(
        // esto espera 1 sg a ver si el usuario deja de teclear
        debounceTime(1000))
      .subscribe(
        value => {
          this.onDebounce.emit(value);
        }
      )
  }
  //  Se llama para finlizar los susbcrives
  ngOnDestroy(): void {
    console.log('Destruido');
    this.debouncerSubcription?.unsubscribe();

  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    // Next() -> la siguiente mision de debouser
    this.debouncer.next(searchTerm)
  }

}
