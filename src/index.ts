//importaciones
import { z } from "zod";

//schemas
const UserSchema = z.object({
  email: z.string().email(),
  fullname: z.string(),
  phone: z.number(),
});

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
});

//fucionar schemas
const CityzenSchema = UserSchema.merge(AddressSchema);

const StringSchema = z.string();

const ArraySchema = z.array(z.string());

const UsersSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const UsersSchemas = z.array(UsersSchema);

//el orden en como llamamos a los metodos importa: ya que no daran el mismo resultado
const s1 = z.string().optional().array();
const s2 = z.string().array().optional();

//types
type UserType = z.infer<typeof UserSchema>;
type AddressType = z.infer<typeof AddressSchema>;
type CityzenType = z.infer<typeof CityzenSchema>;
type StringType = z.infer<typeof StringSchema>;
type ArrayType = z.infer<typeof ArraySchema>;
type UsersType = z.infer<typeof UsersSchemas>;
type s1Type = z.infer<typeof s1>;
type s2Type = z.infer<typeof s2>;

//inputs
//objetos
const UserInput: UserType = {
  email: "redeyes@gmail.com",
  fullname: "red eyes",
  phone: 11111111,
};

const AddressInput: AddressType = {
  street: "urien",
  city: "libertad",
};

const CityzenInput: CityzenType = {
  email: "redeyes@gmail.com",
  fullname: "red eyes",
  phone: 11111111,
  street: "urien",
  city: "libertad",
};

//string
const StringInput: StringType = "cadena";

//array
const ArrayInput: ArrayType = ["10", "20", "30"];

//array de objetos
const UsersInput: UsersType = [
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

const s1Input: s1Type = ["casa", "casa", "casa"];
const s2Input: s2Type = undefined;

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
