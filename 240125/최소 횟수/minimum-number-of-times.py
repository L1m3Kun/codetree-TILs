import sys, heapq
input = sys.stdin.readline


def solution():
    a, b = map(int, input().split())
    que = []
    heapq.heappush(que, (0, a))
    visited= [0]*(b+1)
    min_v = b+1
    while que:
        cnt, now = heapq.heappop(que)
        if now == b:
            min_v = min(min_v, cnt)
            continue
        if cnt >= min_v:
            continue
        if now+1<=b:
            heapq.heappush(que,(cnt+1, now+1))
            visited[now+1] = visited[now] + 1
        if now-1 >0:
            heapq.heappush(que,(cnt+1, now-1))
            visited[now-1] = visited[now] + 1
        if (now << 1) <= b:
            heapq.heappush(que,(cnt, now<<1))
            visited[now<<1] = visited[now]
            
    print(min_v)  
            



if __name__ == "__main__":
    solution()