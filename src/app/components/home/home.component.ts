import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    name: string;
    lastName: string;
    message: string;
    isDisabled: boolean;
    secretMessageBackgroundColor: string;
    secretMessageFontSize: number;
    pStyles: object;

    shoppingList: string[]
    shoppingItem: string;

    constructor() {
        this.name = '';
        this.lastName = '';
        this.message = 'Enter your the value';
        this.isDisabled = false;
        this.secretMessageBackgroundColor = 'aquamarine';
        this.secretMessageFontSize = 20;
        this.pStyles = { // así también se pueden añadir los estilos a las etiquetas.
            'color': 'lawngreen',
            'font-size.px': this.secretMessageFontSize,
            'background-color': this.secretMessageBackgroundColor
        }
        this.shoppingList = ['Milk', 'Bread', 'Eggs', 'Cheese'];
        this.shoppingItem = '';
    }

    // PROPERTY BINDING = [] y relacionamos VARAIBLES DE TYPESCRIPT
    // EVENT BINDING = () y relacionamos FUNCIONES DE TYPESCRIPT
    // TWO WAY BINDING = [()] y relacionamos VARAIBLES DE TYPESCRIPT con INPUTS DE HTML

    sayHello(): void {
        this.secretMessageBackgroundColor = 'pink';
        alert(`${this.name} ${this.lastName}`);
    }

    printMessage(): void {
        alert('Detengase Malandro !!');
    }

    updateName(event: KeyboardEvent): void {
        console.log(event);
        // this.name = (<HTMLInputElement>event.target).value; // obtenemos el valor actual del input y lo asignamos a la variable name
        const currentInput = event.target as HTMLInputElement; // obtenemos el valor actual del input y lo asignamos a la variable name
        this.name = currentInput.value;
        // alert(this.name);
    }

    isPepe(): boolean {

        const stylesObject = {
            clave: 'valor',
            clave2: 1000
        }

        return this.name === 'Pepe';
    }

    addShoppingItem(): void {
        this.shoppingList.push(this.shoppingItem);
        this.shoppingItem = "";
    }

    isEven(i: number): boolean {
        return i % 2 === 0;
    }

    isEmpty(): boolean {
        if (this.shoppingItem === "") {
            return this.isDisabled = true;
        }
        return this.isDisabled = false;
    }

    addPressingEnter(event: KeyboardEvent): void {
        if (event.code === "Enter") {
            this.shoppingList.push(this.shoppingItem);
            this.shoppingItem = "";
        }
    }
}