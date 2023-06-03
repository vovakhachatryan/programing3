class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];


    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }





}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directcions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;


    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 13) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrass = new GrassEater(newX, newY, 2);
            grassEaterArr.push(newGrass);
            this.energy = 8;
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));
        this.energy--
        if (newCell) {
            matrix[this.y][this.x] = 0
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
        }

    }
    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }

            }
            this.energy += 2
        }
    }
    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
        }
    }



}
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 13) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGrass = new Gishatich(newX, newY, 3);
            gishatichArr.push(newGrass);
            this.energy = 8;
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));
        this.energy--
        if (newCell) {
            matrix[this.y][this.x] = 0
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY

        }

    }
    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }

            }
            this.energy += 5
        }
    }
    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                    break;
                }
            }
        }
    }



}
////
class GishatichEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directcions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;


    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 13) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newgishatichEater = new GishatichEater(newX, newY, 4);
            gishatichEaterArr.push(newgishatichEater);
            this.energy = 8;
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));
        this.energy--
        if (newCell) {
            matrix[this.y][this.x] = 0
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

    }
    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                    break;
                }

            }
            this.energy += 2
        }
    }
    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichEaterArr) {
                if (gishatichEaterArr[i].x == this.x && gishatichEaterArr[i].y == this.y) {
                    gishatichEaterArr.splice(i, 1)
                    break;
                }
            }
        }
    }



}

///
class Energy {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directcions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;


    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && energyArr.length < 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            var en = new Energy(newX, newY, 5);
            energyArr.push(en);
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            matrix[this.y][this.x] = 0
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
    }
    energyGive() {

        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            for (var i in gishatichEaterArr) {
                if (gishatichEaterArr[i].x == newX && gishatichEaterArr[i].y == newY) {
                    gishatichEaterArr[i].energy++
                    break;
                }
            }
            matrix[this.y][this.x] = 0
            for (var i in energyArr) {
                if (energyArr[i].x == this.x && energyArr[i].y == this.y) {
                    energyArr.splice(i, 1)
                    break;
                }
            }

        }
    }
}
































