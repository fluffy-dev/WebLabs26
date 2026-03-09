# Task 2 — OOP in Python: Animal Hierarchy

## Overview

This project demonstrates core Object-Oriented Programming concepts in Python using an animal class hierarchy.

## Structure

```
task2/
├── models.py   # Class definitions
├── main.py     # Entry point / usage demonstration
└── README.md
```

## Classes

### `Animal` (Base Class)
- **Attributes:** `name`, `age`, `species`
- **Methods:** `speak()`, `describe()`, `__str__()`

### `Dog(Animal)` — Child Class
- **Extra attribute:** `breed`
- **New method:** `fetch(item)`
- **Overrides:** `speak()` → returns `"Woof!"`

### `Cat(Animal)` — Child Class
- **Extra attribute:** `indoor` (bool)
- **New method:** `purr()`
- **Overrides:** `speak()` → returns `"Meow!"`

### `Parrot(Animal)` — Child Class
- **Extra attribute:** `can_talk` (bool)
- **New method:** `mimic(phrase)`
- **Overrides:** `speak()` → returns different responses based on `can_talk`

## OOP Concepts Demonstrated

| Concept | Where |
|---|---|
| Encapsulation | Attributes set in `__init__` |
| Inheritance | `Dog`, `Cat`, `Parrot` extend `Animal` |
| Method Overriding | `speak()` defined differently in each class |
| Polymorphism | Loop calls `speak()` on mixed list of animals |
| Modules | `models.py` imported in `main.py` |
| `__str__` | Human-readable string representation |

## How to Run

```bash
python main.py
```

## Expected Output

```
=== All Animals ===
Animal(name=Unknown, age=3, species=Mammal)
Dog(name=Rex, age=5, breed=German Shepherd)
Cat(name=Whiskers, age=3, lifestyle=indoor)
Parrot(name=Polly, age=7, can_talk=True)
Parrot(name=Greenie, age=2, can_talk=False)

=== Descriptions ===
Unknown is a 3-year-old Mammal.
Rex is a 5-year-old Dog.
Whiskers is a 3-year-old Cat.
Polly is a 7-year-old Parrot.
Greenie is a 2-year-old Parrot.

=== Polymorphic speak() calls ===
Unknown makes a sound.
Rex says: Woof!
Whiskers says: Meow!
Polly says: Polly wants a cracker!
Greenie squawks loudly!

=== Unique Methods ===
Rex fetches the ball!
Whiskers purrs contentedly.
Polly repeats: 'Hello, world!'
Greenie cannot mimic speech.
```
