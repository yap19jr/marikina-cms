const db =require("../config/db")
class Rooms {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    async save(){

    }

    static findAll(){
        let sql = "Select * from RoomType";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM RoomType WHERE room_type_id =  ${id};`

        return db.execute(sql);
    }

    static findEmagesById(id) {
        let sql = `SELECT * FROM AccommodationImage WHERE id =  ${id};`

        return db.execute(sql);
    }

    static findAllImages() {
        let sql = 'SELECT * FROM AccommodationImage';

        return db.execute(sql);
    }



}
module.exports = Rooms;

