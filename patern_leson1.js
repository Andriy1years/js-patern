class IToyFactory {
    GetBear() {
        // должен возвращать объект медвежонка
    }

    getCat() {
        // должен возвращать объект кота
    }
}

class TeddyBear {
    constructor() {
        this.Name = 'Teddy Bear';
    }
}

class TeddyCat {
    constructor() {
        this.Name = 'Teddy Cat';
    }
}

class WoodenBear {
    constructor() {
        this.Name = 'Wooden Bear';
    }
}

class WoodenCat {
    constructor() {
        this.Name = 'Wooden Cat';
    }
}

class TeddyToysFactory extends IToyFactory {
    GetBear() {
        return new TeddyBear();
    }

    getCat() {
        return new TeddyCat();
    }
}

class WoodenToysFactory extends IToyFactory {
    GetBear() {
        return new WoodenBear();
    }

    getCat() {
        return new WoodenCat();
    }
}
 
let toyFactory = new WoodenToysFactory();
let bear = toyFactory.GetBear();
let cat = toyFactory.getCat();
console.log(`I've got ${bear.Name} and ${cat.Name}`);

toyFactory = new TeddyToysFactory();
bear = toyFactory.GetBear();
cat = toyFactory.getCat();
console.log(`I've got ${bear.Name} and ${cat.Name}`);
