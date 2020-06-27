/*
 *  @author: feiyue
 *  @brief: 函数
 *  @dete: 2020-06-27
 *  @version: 1.0.0
 */

/*
 *  为函数定义类型
 */
{
    function add(x: number, y: number): number{
        return x + y;
    }

    let myAdd = function(x: number, y: number): number{
        return x + y;
    }

    /*
     *  书写完整函数类型
     *  函数类型包含两部分:参数类型和返回值类型
     */
    let myAdd1: (x:number, y: number) => number =
    function(x:number, y: number): number{
        return x + y;
    }
}

/*
 *  推断类型
 *  在赋值语句的一遍指定了类型但是另一边没有类型的话,ts编译器会自动识别出类型
 */
{
    let myAdd = function(x: number, y: number): number{
        return x + y;
    }

    let myAdd1: (baseValue: number, increment: number)=> number=
    function(x, y){
        return x + y;
    }
}

/*
 *  可选参数和默认参数
 */
{
    function buildName(firstName: string, lastName: string){
        return firstName + ' ' + lastName;
    }
    let result1 = buildName('Bob'); // error
    let result2 = buildName('Bob', 'Adams', 'Sr.'); // error;
    let result3 = buildName('Bob', 'Adams');
}
/* 可选参数 */
{
    function buildName(firstName: string, lastName?: string): string{
        return firstName + ' ' + lastName;
    }
    let result1 = buildName('Bob');
    let result2 = buildName('Bob', 'Adams', 'Sr.'); // error;
    let result3 = buildName('Bob', 'Adams');
}
/* 默认参数 */
{
    function buildName(firstName: string, lastName='Simth'): string{
        return firstName + ' ' + lastName;
    }
    let result1 = buildName('Bob');
    let result2 = buildName('Bob', 'Adams', 'Sr.'); // error;
    let result3 = buildName('Bob', 'Adams');

    /* 如果带默认值的参数出现在前面,必须传undefined */
    function buildName(firstName='Simth', lastName: string): string{
        return firstName + ' ' + lastName;
    }
    let result11 = buildName(undefined, 'Bob');
    let result22 = buildName('Bob', 'Adams', 'Sr.'); // error;
    let result33 = buildName('Bob', 'Adams');
}
/* 剩余参数: 可以一个都没有,也可以有任意 */
{
    function buildName(firstName: string, ...restOfName: string[]):string{
        return firstName + ' ' + restOfName.join(' ');
    }
    let employeeName = buildName('Josep', 'Samuel', 'Lucas', 'MacKinzie');

}

/*
 *  this和箭头函数
 *  this的值在函数被调用的时候才会指定
 */
{
    /*
     *  报错
     *  顶级的非方法式调用会将this视为global
     */
    let deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function(){
            return function(){
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard/13);
                return {
                    suit: this.suits[pickedSuit],
                    card: pickedCard % 13
                }
            }
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
{
    /*
     *  修复,在函数返回时,先绑定好this
     */
    let deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function(){
            /* 使用箭头函数 */
            return ()=>{
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard/13);
                return {
                    suit: this.suits[pickedSuit],
                    card: pickedCard % 13
                }
            }
            /* 使用call */
            return function(){
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard/13);
                return {
                    suit: this.suits[pickedSuit],
                    card: pickedCard % 13
                }
            }.call(this);
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

}

/*
 *  this参数在回调函数里
 */
{
    /* this: void 意味着addClickListener方法传入的onclick方法不需要this */
    interface UIElement{
        addClickListener(onclick: (this: void, e: Event) => void): void
    }

    class Handler{
        type: string

        onClickBad(this: Handler, e: Event){
            this.type = e.type;
        }
    }
    let h = new Handler();

    let uiElement: UIElement = {
        addClickListener() {
        }
    }

    uiElement.addClickListener(h.onClickBad) // bad
}

/*
 *  重载
 */
{
    /*
    *   注意'function pickCard(x): any'并不是重载的一部分,这里只有两个重载
    */
    let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
    function pickCard(x: {suit: string, card: number}[]): number;
    function pickCard(x: number):{suit: string, card: number};

    function pickCard(x): any{
        if(Array.isArray(x)){
            let pickCard = Math.floor(Math.random()*x.length);
            return pickCard;
        }else if(typeof x === "number"){
            let pickedSuit = Math.floor(x/13);
            return {suit: suits[pickedSuit], card: x % 13};
        }
    }

    let myDeck = [
        { suit: 'diamonds', card: 2 },
        { suit: 'spades', card: 10 },
        { suit: 'hearts', card: 4 }
    ]

    let pickedCard1 = myDeck[pickCard(myDeck)];
    let pickedCard2 = pickCard(15);

}




