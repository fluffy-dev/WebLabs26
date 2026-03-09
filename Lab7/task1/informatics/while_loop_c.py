# цикл while — задача В: перевернуть число с помощью арифметики
n = int(input())
sign = -1 if n < 0 else 1
n = abs(n)
reversed_n = 0
while n > 0:
    reversed_n = reversed_n * 10 + n % 10
    n //= 10
print(sign * reversed_n)
