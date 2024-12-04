function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}.`);
}

// Correct usage:
const today = new Date();
greet("John Doe", today);