# CodingBat — списки 1


def first_last6(nums):
    # проверить, равен ли первый или последний элемент 6
    return nums[0] == 6 or nums[-1] == 6


def same_first_last(nums):
    # проверить, совпадают ли первый и последний элементы
    return len(nums) >= 1 and nums[0] == nums[-1]


def make_pi():
    # вернуть первые 3 цифры числа пи
    return [3, 1, 4]


def common_end(a, b):
    # проверить, совпадают ли первые или последние элементы двух списков
    return a[0] == b[0] or a[-1] == b[-1]


def sum3(nums):
    # сумма трёх элементов списка
    return sum(nums)


def rotate_left3(nums):
    # сдвиг списка из 3 элементов влево
    return [nums[1], nums[2], nums[0]]


def reverse3(nums):
    # перевернуть список из 3 элементов
    return list(reversed(nums))


def max_end3(nums):
    # заполнить список максимумом из первого и последнего элементов
    m = max(nums[0], nums[-1])
    return [m, m, m]


def sum2(nums):
    # сумма первых двух элементов
    return sum(nums[:2])


def middle_way(a, b):
    # вернуть средние элементы двух списков по 3 элемента
    return [a[1], b[1]]


def make_ends(nums):
    # вернуть первый и последний элементы
    return [nums[0], nums[-1]]


def has23(nums):
    # проверить наличие 2 или 3 в списке
    return 2 in nums or 3 in nums
