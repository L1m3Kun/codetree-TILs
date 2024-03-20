import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())
metrix = [tuple(map(int, input().split())) for _ in range(N)]


def bfs(one:int, is_end:bool) -> int:
    que = deque([(0,0, one)])
    visited = [[[0,0] for _ in range(M)] for _ in range(N)]
    if one:
        visited[0][0] = [0,1]
    else:
        visited[0][0] = [1,0]
    if is_end:
        while que:
            i, j, is_visit = que.popleft()
            if i == N-2 and j == M-1:
                return visited[N-2][M-1][0] + 1
            if i == N-1 and j == M-2:
                return visited[N-1][M-2][0] + 1
            for di, dj in [(1,0),(0,1),(-1,0), (0,-1)]:
                ni, nj = i+di, j+dj
                if 0 <= ni < N and 0 <= nj < M:
                    if not visited[ni][nj][0] and not metrix[ni][nj]:
                        visited[ni][nj][0] = visited[i][j][0] + 1
                        que.append((ni,nj, metrix[ni][nj]))
    else:
        while que:
            i, j, is_visit = que.popleft()
            if i == N-1 and j == M-1:
                if is_visit:
                    return visited[N-1][M-1][1]
                else:
                    return visited[N-1][M-1][0]
            for di, dj in [(0,1),(1,0),(0,-1), (-1,0)]:
                ni, nj = i+di, j+dj
                if 0 <= ni < N and 0 <= nj < M:
                    if is_visit:
                        if not metrix[ni][nj] and not visited[ni][nj][1]:
                            visited[ni][nj][1] = visited[i][j][1]+1
                            que.append((ni,nj,is_visit))
                    else:
                        if metrix[ni][nj]:
                            if not visited[ni][nj][1]:
                                visited[ni][nj][1] = visited[i][j][0] + 1
                                que.append((ni,nj, metrix[ni][nj]))
                        else:
                            if not visited[ni][nj][0] :
                                visited[ni][nj][0] = visited[i][j][0] + 1
                                que.append((ni,nj, metrix[ni][nj]))
                            

    return -1

if metrix[0][0] and metrix[N-1][M-1]:
    print(-1)
elif metrix[N-1][M-1]:
    print(bfs(1, 1))
else:
    print(bfs(metrix[0][0], 0))