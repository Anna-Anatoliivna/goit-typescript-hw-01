// Створіть змінну, яка може містити або рядок, або число(union type) ?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).




// ********************union type***************
let unionType: string | number;

unionType = 'string'; // OK
unionType = 10; // OK
// unionType = true; // Error




// ********************literal type***************

type EnableOrDisable = 'enable' | 'disable';
let answer: EnableOrDisable;

answer = 'enable'; // ok
answer = 'disable'; // ok
// answer = 'sorry'; // Error
