# массивы (списки) — задача Г: посчитать элементы, превышающие среднее
n = int(input())
nums = list(map(int, input().split()))
avg = sum(nums) / n
count = sum(1 for x in nums if x > avg)
print(count)
