import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../img/bB.svg"
import whiteLogo from "../../img/wB.svg"

export class Bishop extends Figure{
    constructor(color:Colors, cell: Cell) {
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyDiagonal(target))
            return true
        return  false
    }
}