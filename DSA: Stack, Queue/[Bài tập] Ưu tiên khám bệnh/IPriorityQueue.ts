export interface IPriorityQueue<T> {
    enqueue(item: T, priority: number): void
    dequeue(): T
    size(): number
    isEmpty(): boolean
}
