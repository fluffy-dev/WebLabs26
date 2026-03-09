# массивы (списки) — задача Д: отсортировать список по возрастанию
n = int(input())
nums = list(map(int, input().split()))
nums.sort()
print(*nums)
