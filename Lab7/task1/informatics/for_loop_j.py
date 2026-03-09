# цикл for — задача К: вывести все простые числа до n
n = int(input())
for num in range(2, n + 1):
    is_prime = all(num % i != 0 for i in range(2, int(num ** 0.5) + 1))
    if is_prime:
        print(num)
