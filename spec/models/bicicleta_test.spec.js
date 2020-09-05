var Bicicleta = require("../../models/bicicleta");

beforeEach(()=>{
    Bicicleta.allBicis = [];
})

describe("Bicicleta.allBicis", () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });

})

describe("Bicicleta.add", ()=>{
    it("agregamos una", ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-34,-50]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    })
})

describe("Bicicleta.findById", ()=>{
    it("debe devolver la bici con id 1", ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici1 = new Bicicleta(1, 'rojo', 'urbana', [-34,-50]);
        var aBici2 = new Bicicleta(2, 'rojo', 'urbana', [-34,-50]);
        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        
        expect(targetBici.color).toBe("rojo");
        expect(targetBici.modelo).toBe("urbana");
    })
})

describe("Bicicleta.removeById", ()=>{
    it("debe dejar a Bicicleta.allBicis.length con valor 0", ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici = new Bicicleta(1, 'rojo', 'urbana', [-34,-50]);
        Bicicleta.add(aBici);

        expect(Bicicleta.allBicis.length).toBe(1);

        Bicicleta.removeById(1);

        expect(Bicicleta.allBicis.length).toBe(0);
    })
})