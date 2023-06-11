import { z } from "zod";

const personSchema = z.object({
  username: z.string().nonempty().toLowerCase(),
  email: z.string().email().nonempty(),
  password: z.string().min(20).nonempty(),
});

type Person = z.infer<typeof personSchema>;

const person: Person = {
  username: "Fernandowaryt",
  email: "fdebarros",
  password: "123456",
};

console.log(person);
console.log(`${person.username} ${person.email}  ${person.password}`);