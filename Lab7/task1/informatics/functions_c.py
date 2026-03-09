# функции — задача В: функция проверки строки на палиндром
def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]


s = input().strip()
print(is_palindrome(s))
