export class MapManager {
    static getMap() {
        return map
    }
}

const map = {
    puzzleMaze: [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 1, 3, 3, 3, 1, 3, 3, 0, 0, 0, 0, 0, 0],
        [0, 3, 1, 3, 3, 3, 3, 1, 3, 0, 0, 0, 0, 0, 0],
        [3, 1, 3, 3, 3, 3, 3, 1, 3, 0, 0, 0, 0, 0, 0],
        [1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1],
        [0, 0, 0, 0, 0, 0, 3, 1, 3, 3, 3, 3, 3, 1, 3],
        [0, 0, 0, 0, 0, 0, 3, 1, 3, 3, 3, 3, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 3, 3, 1, 3, 3, 3, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 1, 1, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}