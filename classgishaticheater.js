class GishatichEater extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
       return super.chooseCell(character)
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
