/**
 * Created by alex on 2/18/17.
 */

export class UserType {
    static ADMIN: UserType = new UserType(1 ,"admin");
    static READER: UserType = new UserType(2 ,"reader");

    name: string;
    id: number;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}