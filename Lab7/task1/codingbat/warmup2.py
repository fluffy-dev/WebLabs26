# CodingBat — разминка 2


def string_times(s, n):
    # повторить строку n раз
    return s * n


def front_times(s, n):
    # повторить первые 3 символа n раз
    return s[:3] * n


def string_bits(s):
    # вернуть каждый второй символ строки
    return s[::2]


def string_splosion(s):
    # "взрыв" строки: sum(s[:i+1])
    return "".join(s[:i + 1] for i in range(len(s)))


def last2(s):
    # подсчитать вхождения последних двух символов в остальной части строки
    if len(s) < 2:
        return 0
    last_two = s[-2:]
    count = 0
    for i in range(len(s) - 2):
        if s[i:i + 2] == last_two:
            count += 1
    return count


def array_count9(nums):
    # подсчитать количество девяток в списке
    return nums.count(9)


def array_front9(nums):
    # проверить, есть ли 9 среди первых четырёх элементов
    return 9 in nums[:4]


def array123(nums):
    # проверить, есть ли последовательность 1, 2, 3 в списке
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False


def string_match(a, b):
    # подсчитать совпадающие двухсимвольные подстроки на одних позициях
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i:i + 2] == b[i:i + 2]:
            count += 1
    return count
