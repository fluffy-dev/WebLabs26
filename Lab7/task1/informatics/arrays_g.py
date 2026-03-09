# массивы (списки) — задача Ж: удалить дубликаты и вывести уникальные элементы
n = int(input())
nums = list(map(int, input().split()))
print(*sorted(set(nums)))
