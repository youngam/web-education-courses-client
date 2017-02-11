/**
 * Created by alex on 2/7/17.
 */

export class Profile {
   id: number;
   name: string;
   password: string;

   constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
   }
}