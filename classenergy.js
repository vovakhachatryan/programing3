class Energy extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
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
       return super.chooseCell(character);
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




