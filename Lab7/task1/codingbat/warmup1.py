# CodingBat — разминка 1


def sleep_in(weekday, vacation):
    # можно поспать, если не будний день или отпуск
    return not weekday or vacation


def monkey_trouble(a_smile, b_smile):
    # оба улыбаются или оба нет
    return a_smile == b_smile


def sum_double(a, b):
    # сумма, удвоенная если числа равны
    total = a + b
    return total * 2 if a == b else total


def diff21(n):
    # расстояние до 21, удвоенное если n > 21
    diff = abs(n - 21)
    return diff * 2 if n > 21 else diff


def parrot_trouble(talking, hour):
    # попугай создаёт проблемы, если говорит вне времени 7–20
    return talking and (hour < 7 or hour > 20)


def makes10(a, b):
    # хотя бы одно число равно 10, или их сумма равна 10
    return a == 10 or b == 10 or a + b == 10


def near_hundred(n):
    # число в пределах 10 от 100 или 200
    return abs(n - 100) <= 10 or abs(n - 200) <= 10


def pos_neg(a, b, negative):
    # проверка знаков чисел
    if negative:
        return a < 0 and b < 0
    return (a < 0) != (b < 0)


def not_string(s):
    # добавить "not " в начало, если строка не начинается с "not"
    return s if s.startswith("not") else "not " + s


def missing_char(s, n):
    # убрать символ на позиции n
    return s[:n] + s[n + 1:]


def front_back(s):
    # поменять первый и последний символы местами
    if len(s) <= 1:
        return s
    return s[-1] + s[1:-1] + s[0]


def front3(s):
    # повторить первые 3 символа трижды
    front = s[:3]
    return front * 3
