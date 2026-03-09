"""models.py — иерархия классов Animal для демонстрации ООП в Python."""


class Animal:
    """базовый класс, представляющий обобщённое животное."""

    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return f"{self.name} издаёт звук."

    def describe(self):
        return f"{self.name} — {self.species}, возраст {self.age} лет."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"


class Dog(Animal):
    """класс Dog, наследующий от Animal."""

    def __init__(self, name, age, breed):
        super().__init__(name, age, species="Dog")
        self.breed = breed

    def speak(self):
        # переопределение метода родительского класса
        return f"{self.name} говорит: Гав!"

    def fetch(self, item):
        return f"{self.name} приносит {item}!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    """класс Cat, наследующий от Animal."""

    def __init__(self, name, age, indoor):
        super().__init__(name, age, species="Cat")
        self.indoor = indoor

    def speak(self):
        # переопределение метода родительского класса
        return f"{self.name} говорит: Мяу!"

    def purr(self):
        return f"{self.name} довольно мурлычет."

    def __str__(self):
        lifestyle = "домашняя" if self.indoor else "уличная"
        return f"Cat(name={self.name}, age={self.age}, lifestyle={lifestyle})"


class Parrot(Animal):
    """класс Parrot, наследующий от Animal."""

    def __init__(self, name, age, can_talk):
        super().__init__(name, age, species="Parrot")
        self.can_talk = can_talk

    def speak(self):
        # переопределение: поведение зависит от умения говорить
        if self.can_talk:
            return f"{self.name} говорит: Попка дурак!"
        return f"{self.name} громко кричит!"

    def mimic(self, phrase):
        if self.can_talk:
            return f"{self.name} повторяет: '{phrase}'"
        return f"{self.name} не умеет подражать речи."

    def __str__(self):
        return f"Parrot(name={self.name}, age={self.age}, can_talk={self.can_talk})"
