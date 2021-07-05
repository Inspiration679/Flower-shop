const mysql = require('mysql2')

class Flower {
    constructor(flower_name, cost, description, image) {
        this.flower_name = flower_name
        this.cost = cost
        this.description = description
        this.image = image
    }

    get(flower_name){

    }

    getAll(){

    }

    save(){

    }
}

module.exports = Flower