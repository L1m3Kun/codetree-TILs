import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())
metrix = [tuple(map(int, input().split())) for _ in range(N)]


def bfs(one:int, is_end:bool) -> int:
    que = deque([(0,0, one)])
    visited = [[50000] * M for _ in range(N)]
    visited[0][0] = 1
    if is_end:
        while que:
            i, j, is_visit = que.popleft()
            if i == N-2 and j == M-1:
                return visited[N-2][M-1] + 1
            if i == N-1 and j == M-2:
                return visited[N-1][M-2] + 1
            for di, dj in [(1,0),(0,1),(-1,0), (0,-1)]:
                ni, nj = i+di, j+dj
                if 0 <= ni < N and 0 <= nj < M:
                    if visited[ni][nj] > visited[i][j] + 1 and not metrix[ni][nj]:
                        visited[ni][nj] = visited[i][j] + 1
                        que.append((ni,nj, metrix[ni][nj]))
    else:
        while que:
            i, j, is_visit = que.popleft()
            if i == N-1 and j == M-1:
                return visited[N-1][M-1]
            for di, dj in [(0,1),(1,0),(0,-1), (-1,0)]:
                ni, nj = i+di, j+dj
                if 0 <= ni < N and 0 <= nj < M and visited[ni][nj] > visited[i][j]+1:
                    if is_visit:
                        if not metrix[ni][nj]:
                            visited[ni][nj] = visited[i][j]+1
                            que.append((ni,nj,is_visit))
                    else:
                        visited[ni][nj] = visited[i][j] + 1
                        que.append((ni,nj, metrix[ni][nj]))

    return -1

if metrix[0][0] and metrix[N-1][M-1]:
    print(-1)
elif sum(map(sum, metrix)) == 0:
    print(N+M-1)
elif metrix[N-1][M-1]:
    print(bfs(1, 1))
else:
    print(bfs(metrix[0][0], 0))