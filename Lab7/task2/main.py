"""main.py — демонстрация концепций ООП на основе иерархии классов Animal."""

from models import Animal, Dog, Cat, Parrot


def main():
    # создание объектов каждого класса
    generic_animal = Animal(name="Неизвестно", age=3, species="Млекопитающее")
    dog = Dog(name="Рекс", age=5, breed="Немецкая овчарка")
    cat = Cat(name="Мурка", age=3, indoor=True)
    parrot = Parrot(name="Кеша", age=7, can_talk=True)
    silent_parrot = Parrot(name="Зелёный", age=2, can_talk=False)

    # хранение объектов в списке и итерация по нему
    animals = [generic_animal, dog, cat, parrot, silent_parrot]

    print("=== Все животные ===")
    for animal in animals:
        print(animal)

    print("\n=== Описание ===")
    for animal in animals:
        print(animal.describe())

    # полиморфизм: вызов переопределённого speak() для каждого животного
    print("\n=== Полиморфный вызов speak() ===")
    for animal in animals:
        print(animal.speak())

    # вызов уникальных методов дочерних классов
    print("\n=== Уникальные методы ===")
    print(dog.fetch("мяч"))
    print(cat.purr())
    print(parrot.mimic("Привет, мир!"))
    print(silent_parrot.mimic("Алло?"))


if __name__ == "__main__":
    main()
