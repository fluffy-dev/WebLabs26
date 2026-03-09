# CodingBat — строки 2


def double_char(s):
    # удвоить каждый символ строки
    return "".join(c * 2 for c in s)


def count_hi(s):
    # подсчитать вхождения "hi" в строке
    return s.count("hi")


def cat_dog(s):
    # проверить, что количество "cat" равно количеству "dog"
    return s.count("cat") == s.count("dog")


def count_code(s):
    # подсчитать вхождения шаблона "co_e" (любой символ на месте _)
    count = 0
    for i in range(len(s) - 3):
        if s[i:i + 2] == "co" and s[i + 3] == "e":
            count += 1
    return count


def end_other(a, b):
    # проверить, заканчивается ли одна строка другой (без учёта регистра)
    a, b = a.lower(), b.lower()
    return a.endswith(b) or b.endswith(a)


def xyz_there(s):
    # проверить наличие "xyz" не после точки
    for i in range(len(s) - 2):
        if s[i:i + 3] == "xyz" and (i == 0 or s[i - 1] != "."):
            return True
    return False
