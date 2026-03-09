# HackerRank — найти второй по величине элемент массива
n = int(input())
arr = list(map(int, input().split()))
arr = sorted(set(arr), reverse=True)
print(arr[1])
