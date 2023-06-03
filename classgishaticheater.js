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
