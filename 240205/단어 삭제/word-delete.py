import sys
input = sys.stdin.readline


s = input().strip()
p = input().strip()

for _ in range(len(s)-len(p)):
    s = s.replace(p, "")
print(s)