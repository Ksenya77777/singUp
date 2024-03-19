const isLoading: boolean = true;

const int: number = 42;
const message: string = 'Hello Typescript';
const numberArray: number[] = [1, 1, 2, 3, 4];

// Дженерик запись:
const numberArray2: Array<number> = [1, 1, 2, 3, 4];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['Kseniya', 1234];

// Any

let variables: any = 42;
variables = 'New String';

// Function
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('hu');

// Never
// 1) когда ошибка в функции
function fromNever(message: string): never {
  throw new Error(message);
}
// 2) будет бесконечная функция
function infinite(): never {
  while (true) {}
}

// Type
type Login = string;
// означает может быть строкой
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
