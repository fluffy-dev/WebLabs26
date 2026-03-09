# HackerRank — вложенные списки: вывести имена студентов со вторым минимальным баллом
records = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    records.append([name, score])

second_lowest = sorted(set(score for _, score in records))[1]
result = sorted(name for name, score in records if score == second_lowest)
for name in result:
    print(name)
