export class Cell {
    constructor(gridElement,x,y) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;

    }

    linkTile(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;
    }

    unlinkTile() {
        this.linkedTile = null
        
    }

    isEmpty() {
        return !this.linkedTile;
    }

    linkTileForMerge(tile) {
        tile.setXY(this.x, this.y)
        this.linkedTileForMerge = tile;
    }

    hasTileForMerge() {
        return !!this.linkedTileForMerge;
        
    }

    mergeTiles() {
        this.linkedTile.setValue(this.linkedTile.value + this.linkedTileForMerge.value)
        this.linkedTileForMerge.removeFromDOM();
        this.unlinkTileForMerge()
    }

    unlinkTileForMerge() {
        this.linkedTileForMerge = null
    }

    canAccept(newTile){
        console.log(!this.hasTileForMerge())
        return this.isEmpty() || (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
    }
}