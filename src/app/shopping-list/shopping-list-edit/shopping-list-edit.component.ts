import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core'
import { Ingreadient } from 'src/app/shared/ingreadient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping-list-edit.component.html',
    styles: ['p {size: 50px}']

})


export class ShoppingListEditComponent {
    @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
    @Output() onIngredientAdded = new EventEmitter<Ingreadient>();
    
    onAddItem(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingreadient(ingName, ingAmount);
        this.onIngredientAdded.emit(newIngredient);

    }
}