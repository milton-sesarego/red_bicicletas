var Bicicleta = require('../../models/bicicleta')
var request = require('request')
var server = require('../../bin/www')


beforeEach(()=>{
    Bicicleta.allBicis = [];
})

describe('Bicicleta API', () =>{
    describe('GET BICICLETAS /', () =>{
        it('Status 200', () =>{
            expect(Bicicleta.allBicis.length).toBe(0)

            var a = new Bicicleta(1, 'negro', 'urbana')
            Bicicleta.add(a)

            request.get('http://localhost:3000/api/bicicletas', function(err, res, body){
                expect(res.statusCode).toBe(200)
            })
        })
    })

    describe('POST BICICLETAS /create', () =>{
        it('Status 200', (done) =>{
            var headers = {'content-type' : 'application/json'}
            var a = '{"id": 10, "color": "rojo", "modelo": "urbana", "lat":-34, "lng": -54}'
            
            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: a
             }, function(err, res, body){
                expect(res.statusCode).toBe(200)
                expect(Bicicleta.findById(10).color).toBe('rojo')
                done()
            })
        })
    })

    describe('PUT BICICLETAS :id/update', () =>{
        it('Status 200', (done) =>{
            var a = new Bicicleta(1, 'rojo', 'rural', [-34.6735,-58.6455]);
            Bicicleta.add(a)

            var headers = {'content-type' : 'application/json'}
            var body = '{"color": "verde", "modelo": "urbana", "lat":-34, "lng": -54}'
            
            request.put({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/1/update',
                body: body
             }, function(err, res, body){
                expect(res.statusCode).toBe(200)
                expect(Bicicleta.findById(1).color).toBe('verde')
                expect(Bicicleta.findById(1).modelo).toBe('urbana')
                expect(Bicicleta.findById(1).ubicacion.lat).toBe(-34)
                expect(Bicicleta.findById(1).ubicacion.lng).toBe(-54)
                done()
            })
        })
    })

    describe('DELETE BICICLETAS /delete', () =>{
        it('Status 204', (done) =>{
            var a = new Bicicleta(1, 'rojo', 'rural', [-34.6735,-58.6455]);
            Bicicleta.add(a)

            var headers = {'content-type' : 'application/json'}
            var body = '{"id": 1}'
            
            request.delete({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/delete',
                body: body
             }, function(err, res, body){
                expect(res.statusCode).toBe(204)
                expect(Bicicleta.allBicis.length).toBe(0)
                done()
            })
        })
    })
})

