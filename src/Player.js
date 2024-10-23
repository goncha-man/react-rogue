import Entity from "./Entity";

class Player extends Entity{

    inventory = [];


    attributes = {
        name: 'Player',
        ascii: '@',
        health: 10
    }

    move(dx, dy) {
        if (this.attributes.health <= 0) {
            return;
        }
        this.x += dx;
        this.y += dy;
    }

    add(item){
        this.inventory.push(item);
    }

    // draw(context) {
    //     context.fillStyle = '#f00';
    //     context.textBaseline = 'hanging';
    //     context.font = '16px Helvetica';
    //     context.fillText('X', this.x * this.size, this.y * this.size)
    // }

    copyPlayer(){
        let newPlayer = new Player();
        Object.assign(newPlayer, this);
        return newPlayer;
    }
}
export default Player;
