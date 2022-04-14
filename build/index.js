"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones
const zod_1 = require("zod");
//schemas
const UserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    fullname: zod_1.z.string(),
    phone: zod_1.z.number(),
});
const AddressSchema = zod_1.z.object({
    street: zod_1.z.string(),
    city: zod_1.z.string(),
});
//fucionar schemas
const CityzenSchema = UserSchema.merge(AddressSchema);
const StringSchema = zod_1.z.string();
const ArraySchema = zod_1.z.array(zod_1.z.string());
const UsersSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
});
const UsersSchemas = zod_1.z.array(UsersSchema);
//el orden en como llamamos a los metodos importa: ya que no daran el mismo resultado
const s1 = zod_1.z.string().optional().array();
const s2 = zod_1.z.string().array().optional();
//inputs
//objetos
const UserInput = {
    email: "redeyes@gmail.com",
    fullname: "red eyes",
    phone: 11111111,
};
const AddressInput = {
    street: "urien",
    city: "libertad",
};
const CityzenInput = {
    email: "redeyes@gmail.com",
    fullname: "red eyes",
    phone: 11111111,
    street: "urien",
    city: "libertad",
};
//string
const StringInput = "cadena";
//array
const ArrayInput = ["10", "20", "30"];
//array de objetos
const UsersInput = [
    {
        name: "ryan",
        age: 24,
    },
    {
        name: "carl",
        age: 29,
    },
    {
        name: "mike",
        age: 27,
    },
];
const s1Input = ["casa", "casa", "casa"];
const s2Input = undefined;
//resultados
const user = UserSchema.parse(UserInput);
const address = AddressSchema.parse(AddressInput);
const cityzen = CityzenSchema.parse(CityzenInput);
const array = ArraySchema.parse(ArrayInput);
const users = UsersSchemas.parse(UsersInput);
//parsear de forma segura (sin terminar la ejecucion)
const string = StringSchema.safeParse(StringInput);
const resultS1 = s1.parse(s1Input);
const resultS2 = s2.parse(s2Input);
console.info(user);
console.info(address);
console.info(cityzen);
console.info(string);
console.info(array);
console.info(users);
console.info(resultS1);
console.info(resultS2);
