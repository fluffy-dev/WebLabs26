n = int(input())
nums = list(map(int, input().split()))
unique = sorted(set(nums), reverse=True)
print(unique[1])
