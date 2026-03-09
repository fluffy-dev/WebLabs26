# цикл for — задача М: наибольший общий делитель двух чисел
a, b = map(int, input().split())
while b:
    a, b = b, a % b
print(a)
