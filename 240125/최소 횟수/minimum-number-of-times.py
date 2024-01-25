import sys, heapq
input = sys.stdin.readline


def solution():
    a, b = map(int, input().split())
    que = []
    heapq.heappush(que, (0, a))
    visited= [0]*100_001
    visited[a] = 1
    minv = 100_001
    while que:
        cnt, now = heapq.heappop(que)
        if now == b:
            minv = min(minv, cnt)
        for next in [now-1, now+1, now*2]:
            if 0 <= next < 100_000 and not visited[next]:
                if next == now*2:
                    visited[next] = 1
                    heapq.heappush(que, (cnt, next))
                else:
                    visited[next] = 1
                    heapq.heappush(que, (cnt+1, next))
            

    print(minv)

if __name__ == "__main__":
    solution()