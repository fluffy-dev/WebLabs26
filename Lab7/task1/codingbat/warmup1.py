

def sleep_in(weekday, vacation):
    return not weekday or vacation


def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile


def sum_double(a, b):
    total = a + b
    return total * 2 if a == b else total


def diff21(n):
    diff = abs(n - 21)
    return diff * 2 if n > 21 else diff


def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)


def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10


def near_hundred(n):
    return abs(n - 100) <= 10 or abs(n - 200) <= 10


def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    return (a < 0) != (b < 0)


def not_string(s):
    return s if s.startswith("not") else "not " + s


def missing_char(s, n):
    return s[:n] + s[n + 1:]


def front_back(s):
    if len(s) <= 1:
        return s
    return s[-1] + s[1:-1] + s[0]


def front3(s):
    front = s[:3]
    return front * 3
