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




