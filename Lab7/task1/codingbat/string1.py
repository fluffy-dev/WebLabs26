# CodingBat — строки 1


def hello_name(name):
    # поздороваться по имени
    return "Hello " + name + "!"


def make_abba(a, b):
    # собрать строку вида a+b+b+a
    return a + b + b + a


def make_tags(tag, word):
    # обернуть слово в HTML-тег
    return f"<{tag}>{word}</{tag}>"


def make_out_word(out, word):
    # вставить слово в середину строки out
    return out[:2] + word + out[2:]


def extra_end(s):
    # повторить последние 2 символа трижды
    return s[-2:] * 3


def first_two(s):
    # вернуть первые 2 символа
    return s[:2]


def first_half(s):
    # вернуть первую половину строки
    return s[:len(s) // 2]


def without_end(s):
    # вернуть строку без первого и последнего символов
    return s[1:-1]


def combo_string(s1, s2):
    # shorter + longer + shorter
    shorter, longer = (s1, s2) if len(s1) <= len(s2) else (s2, s1)
    return shorter + longer + shorter


def non_start(a, b):
    # склеить строки без первых символов
    return a[1:] + b[1:]


def left2(s):
    # сдвинуть строку на 2 символа влево
    return s[2:] + s[:2]
