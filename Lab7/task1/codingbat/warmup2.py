

def string_times(s, n):
    return s * n


def front_times(s, n):
    return s[:3] * n


def string_bits(s):
    return s[::2]


def string_splosion(s):
    return "".join(s[:i + 1] for i in range(len(s)))


def last2(s):
    if len(s) < 2:
        return 0
    last_two = s[-2:]
    count = 0
    for i in range(len(s) - 2):
        if s[i:i + 2] == last_two:
            count += 1
    return count


def array_count9(nums):
    return nums.count(9)


def array_front9(nums):
    return 9 in nums[:4]


def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False


def string_match(a, b):
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i:i + 2] == b[i:i + 2]:
            count += 1
    return count
