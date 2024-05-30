/*
* File: app.js
* Author: Kovács F. Richárd
* Copyright: 2024, Kovács F. Richárd
* Group: Szoft V
* Date: 2021-09-03
* Github: https://github.com/janos12345/
* Licenc: GNU GPL
*/


class Teglarany {
    aSide?: HTMLInputElement | null;
    bSide?: HTMLInputElement | null;
    diagonal?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;
    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.aSide = document.querySelector('#aSide');
        this.bSide = document.querySelector('#bSide');
        this.diagonal = document.querySelector('#diagonal');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }
    startCalc() {
        const aSide = Number(this.aSide?.value);
        const bSide = Number(this.bSide?.value);
        const perimeter = this.calcPerimeter(aSide, bSide);
        this.diagonal!.value = String(perimeter);
    }
    calcPerimeter(aSide: number, bSide: number):number {
        return Math.sqrt(Math.pow(aSideInput,2)+(Math.pow(bSideInput,2)))
    }
}

new Teglarany();