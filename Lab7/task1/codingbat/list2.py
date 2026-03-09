# CodingBat — списки 2


def count_evens(nums):
    # подсчитать чётные числа в списке
    return sum(1 for n in nums if n % 2 == 0)


def big_diff(nums):
    # разность между максимальным и минимальным элементами
    return max(nums) - min(nums)


def centered_average(nums):
    # среднее без учёта минимального и максимального элементов
    nums = sorted(nums)
    return sum(nums[1:-1]) // (len(nums) - 2)


def sum13(nums):
    # сумма, пропуская 13 и следующий за ним элемент
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total


def sum67(nums):
    # сумма, пропуская числа от 6 до 7 включительно
    total = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True
        if not skip:
            total += n
        if n == 7 and skip:
            skip = False
    return total


def has22(nums):
    # проверить, стоят ли две двойки рядом
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False
