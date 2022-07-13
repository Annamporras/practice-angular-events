import { Component, ViewEncapsulation } from "@angular/core";
import { ShoppingItem } from "src/app/models/shopping-item.model";
import { User } from "src/app/models/user.model";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    name: string;
    lastName: string;
    message: string;
    isDisabled: boolean;
    secretMessageBackgroundColor: string;
    secretMessageFontSize: number;
    pStyles: object;

    shoppingList: ShoppingItem[];
    shoppingItemName: string;
    shoppingItemQuantity: number;

    userList: User[];
    userName: string;
    userAge: number;
    userEmail: string;
    userGender: string;

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
        this.shoppingList = [new ShoppingItem('Milk', 1), new ShoppingItem('Bread', 2), new ShoppingItem('eggs', 3), new ShoppingItem('Cheese', 4)];
        this.shoppingItemName = '';
        this.shoppingItemQuantity = 10;
        this.userList = [new User('Marga', 15, 'marga@gmail.com', 'female')];
        this.userName = '';
        this.userAge = 18;
        this.userEmail = "";
        this.userGender = "";
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
        if (this.shoppingItemQuantity <= 0) {
            alert('La cantidad debe ser mmayor a 0');
            return;
        }
        this.shoppingList.push(new ShoppingItem(this.shoppingItemName, this.shoppingItemQuantity));
        this.shoppingItemName = "";
        this.shoppingItemQuantity = 10;
    }

    isEven(i: number): boolean {
        return i % 2 === 0;
    }

    isEmpty(): boolean {
        if (this.shoppingItemName === "" || this.shoppingItemQuantity <= 0) {
            return this.isDisabled = true;
        }
        return this.isDisabled = false;
    }

    addPressingEnter(event: KeyboardEvent): void {
        if (event.code === "Enter") {
            this.addShoppingItem();
        }
    }

    addUser(): void {
        if (this.userAge <= 0) {
            alert('La cantidad debe ser mayor a 0');
            return;
        }
        this.userList.push(new User(this.userName, this.userAge, this.userEmail, this.userGender));
    }
}