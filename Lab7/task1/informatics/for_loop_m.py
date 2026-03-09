# цикл for — задача Н: возведение в степень без встроенных функций
base, exp = map(int, input().split())
result = 1
for _ in range(exp):
    result *= base
print(result)
