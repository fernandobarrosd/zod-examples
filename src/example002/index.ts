import { z } from "zod";


const moneyNames = z.enum(["Dolar", "Real", "Euro", "Yan"]);

type MoneyName = z.infer<typeof moneyNames>;

const money : MoneyName = "Dolar";

console.log(money);