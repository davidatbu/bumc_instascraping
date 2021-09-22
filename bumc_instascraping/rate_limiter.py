from typing import Any, Callable, Deque, Optional
import threading
import time
from collections import deque


class ThreadedRateLimiter:
    def __repr__(self) -> str:
        return f"{self.__class__}(calls={self._calls}, period={self._period})"

    def __init__(
        self,
        calls: int,
        period: int,
        call_when_waiting: Optional[Callable[[float], Any]] = None,
    ) -> None:
        self._calls = calls
        self._period = period
        self._timestamps: Deque[float] = deque(maxlen=calls)
        self._lock = threading.Lock()
        self._call_when_waiting = call_when_waiting

    def __call__(self) -> None:
        with self._lock:
            now = time.time()
            if not self._timestamps:
                self._timestamps.append(now)
                return
            # Number of previous stamps to look at
            num_stamps = 1

            while num_stamps <= len(self._timestamps):
                elapsed = now - self._timestamps[-num_stamps]

                if elapsed <= self._period:

                    # We do +1 because we're right about to make a timestamp(ie, we're right
                    # about to do the action that will count towards the rate limit)
                    if num_stamps + 1 == self._calls:
                        to_wait = self._period - elapsed
                    # This case is only needed for when self._times == 1
                    elif num_stamps == self._calls:
                        to_wait = self._period - elapsed + 0.1
                    else:
                        num_stamps += 1
                        continue
                    if self._call_when_waiting:
                        self._call_when_waiting(to_wait)
                    time.sleep(to_wait)
                    now = time.time()
                    self._timestamps.append(now)
                    return
                else:
                    num_stamps += 1

            self._timestamps.append(now)
