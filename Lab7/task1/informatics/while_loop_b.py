# цикл while — задача Б: подсчёт количества цифр в числе
n = int(input())
n = abs(n)
count = 0
if n == 0:
    count = 1
while n > 0:
    count += 1
    n //= 10
print(count)
