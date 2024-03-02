import sys
input = sys.stdin.readline


dp = [0] * (200001)
limit = 0
for _ in range(int(input())):
    s, e = map(int, input().split())
    dp[s] += 1
    dp[e] -= 1
    limit = max(limit, e)
for i in range(1, limit+1):
    dp[i] += dp[i-1]
print(max(dp[:limit+1]))