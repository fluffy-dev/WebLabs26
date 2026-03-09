# цикл while — задача А: считывать числа до 0, вывести их сумму
total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print(total)
