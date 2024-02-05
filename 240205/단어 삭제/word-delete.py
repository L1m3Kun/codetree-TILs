import sys
input = sys.stdin.readline


s = input().strip()
p = input().strip()

while p in s:
    s = s.replace(p, "")
print(s)