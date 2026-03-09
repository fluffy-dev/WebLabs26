# массивы (списки) — задача Б: считать n чисел, вывести сумму
n = int(input())
nums = list(map(int, input().split()))
print(sum(nums))
