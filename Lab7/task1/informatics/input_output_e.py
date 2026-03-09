# задача Д: поменять значения двух переменных местами
a, b = map(int, input().split())
a, b = b, a
print(a, b)
