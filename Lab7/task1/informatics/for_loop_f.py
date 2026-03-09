# цикл for — задача Е: сумма цифр числа
n = input().strip()
total = sum(int(d) for d in n if d.isdigit())
print(total)
